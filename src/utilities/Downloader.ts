import * as os from "node:os";
import path from "node:path";
import https from "https";
import fs from "fs";
import DateParser from "./DateParser.ts";
import {exec} from "node:child_process";

// TODO: Add documentation
export default class Downloader {
    public url: string;
    public fileName: string;
    public outputDir: string;

    constructor(url: string, fileName: string | null = null, outputDir: string | null = null) {
        this.url = url;
        const splitURL = url.split("/");
        this.fileName = fileName ?? splitURL[splitURL.length - 1];
        this.outputDir = outputDir ?? path.join(os.homedir(), "Downloads");
    }

    public downloadFile = async (threads: number = Math.ceil((os.cpus().length / 2)), clearConsoleOnNewDownload: boolean = true): Promise<void> => {
        const filePath = path.join(this.outputDir, this.fileName);

        const getHeaders = () =>
            new Promise((resolve, reject) => {
                https
                    .get(this.url, { method: "HEAD" }, (response) => {
                        if (response.statusCode !== 200 && response.statusCode !== 206) {
                            reject(new Error(`Failed to fetch file headers: ${response.statusCode}`));
                            return;
                        }
                        resolve(response.headers);
                    })
                    .on("error", reject);
            });

        const headers = await getHeaders();
        // @ts-ignore
        const totalSize = parseInt(headers["content-length"] || "0", 10);
        if (!totalSize) throw new Error("Unable to determine file size.");

        try {
            const stats = await fs.promises.stat(filePath);
            if (stats.size === totalSize) {
                console.log(`File already exists: ${this.fileName} (${(totalSize / 1024 / 1024).toFixed(2)} MB). Skipping download...`);
                return;
            }
        } catch (err) {
            // File doesn't exist, continue with download
        }

        const chunkSize = Math.ceil(totalSize / threads);
        let downloadedSize = 0;
        let speed = 0;
        let lastSpeedUpdate = Date.now();
        const startTime = Date.now();

        console.log(`Downloading ${this.fileName} (${threads} ${threads > 1 ? "threads" : "thread"}) ...`);

        let secondsTaken = 0;

        const updateProgress = setInterval(() => {
            const percentage = (downloadedSize / totalSize) * 100;
            const elapsedSeconds = (Date.now() - startTime) / 1000;

            if (Date.now() - lastSpeedUpdate >= 5000) {
                speed = downloadedSize / 1024 / 1024 / elapsedSeconds;
                lastSpeedUpdate = Date.now();
            }

            const remainingSize = totalSize - downloadedSize; // bytes
            const etaSeconds = Math.floor(speed > 0 ? remainingSize / (speed * 1024 * 1024) : 0);

            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);

            const formattedPercentage =
                totalSize < 2 * 1024 * 1024 * 1024
                    ? Math.floor(percentage)
                    : percentage.toFixed(2);

            process.stdout.write(`Downloaded: ${formattedPercentage}% (${(downloadedSize / 1024 / 1024).toFixed(2)} MB / ${(totalSize / 1024 / 1024).toFixed(2)} MB) - Speed: ${speed.toFixed(2)} MB/s ETA: ${DateParser.secondsToHumanTime(etaSeconds)}`);

            secondsTaken += 1;
        }, 1000);

        const downloadChunk = (start: number, end: number, index: number) => {
            return new Promise<Buffer>((resolve, reject) => {
                const options = {
                    headers: {
                        Range: `bytes=${start}-${end}`,
                    },
                };

                https.get(this.url, options, (response) => {
                    if (response.statusCode !== 206) {
                        reject(new Error(`Failed to download chunk ${index}: ${response.statusCode}`));
                        return;
                    }

                    const chunks: Buffer[] = [];
                    response.on("data", (chunk) => {
                        chunks.push(chunk);
                        downloadedSize += chunk.length;
                    });

                    response.on("end", () => {
                        resolve(Buffer.concat(chunks));
                    });

                    response.on("error", reject);
                });
            });
        };

        const promises = [];
        for (let i = 0; i < threads; i++) {
            const start = i * chunkSize;
            const end = Math.min(totalSize - 1, (i + 1) * chunkSize - 1);
            promises.push(downloadChunk(start, end, i));
        }

        try {
            const chunks = await Promise.all(promises);
            await fs.promises.writeFile(filePath, Buffer.concat(chunks));
            clearInterval(updateProgress);
            const updateString = `Finished downloading ${this.fileName} (${(totalSize / 1024 / 1024).toFixed(2)} MB) in ${DateParser.secondsToHumanTime(secondsTaken)}.\n`;
            if (clearConsoleOnNewDownload) {
                console.clear();
                console.log(updateString)
            } else {
                process.stdout.clearLine(0);
                process.stdout.cursorTo(0);
                process.stdout.write(updateString);
            }
        } catch (err) {
            clearInterval(updateProgress);
            throw err;
        }
    };
}
