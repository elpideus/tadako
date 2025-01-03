import axios from "axios";
import * as cheerio from "cheerio";
import Anime from "./Anime.ts";
import Downloader from "./utilities/Downloader.ts";
import * as os from "node:os";
import path from "path"

/**
 * Class representing an episode of an anime.
 */
export default class Episode {

    /**
     * The URL of the episode page.
     * @type {string}
     */
    public url: string;

    public anime: Anime | null;

    /**
     * Creates an instance of the Episode class.
     *
     * @param {string} url - The URL of the episode page from which the download link will be scraped.
     */
    constructor(url: string, anime: Anime | null = null) {
        this.url = url;
        this.anime = anime;
    }

    /**
     * Retrieves the alternative download URL for the episode from the page.
     * It scrapes the episode's page and extracts the download link.
     *
     * @returns {Promise<string | undefined>} - A promise that resolves to the download URL as a string, or undefined if no download URL is found.
     */
    public getDownloadURL = async (): Promise<string | undefined> => {
        const { data } = await axios.get(this.url);
        const $ = cheerio.load(data);

        return $("#download .widget.downloads .widget-body #alternativeDownloadLink").attr("href");
    }

    // TODO: Add documentation
    public download = async (outputDir: string | null = null , fileName: string | null = null, threads: number = 4) => {
        if (!outputDir) outputDir = path.join(os.homedir(), "Downloads");
        if (!fileName) {
            const splitDownloadURL = (await this.getDownloadURL())?.split("/");
            if (splitDownloadURL && splitDownloadURL.length > 1) {
                fileName = splitDownloadURL[splitDownloadURL.length - 1];
                const downloader = new Downloader(await this.getDownloadURL() ?? "", fileName, outputDir);
                await downloader.downloadFile(threads);
            }
            return
        }
        await (new Downloader(this.url, fileName, outputDir)).downloadFile(threads);
    }

}