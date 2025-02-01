import Anime from "./Anime";
import Tadako from "./Tadako";
import * as os from "node:os";
import Downloader from "./utilities/Downloader";
import * as path from "node:path";

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

    public getDownloadURL = async (): Promise<string | undefined> => {
        const $ = await Tadako.parse(this.url);

        return $("#download .widget.downloads .widget-body #alternativeDownloadLink").attr("href");
    }

    // TODO: Add documentation
    public download = async (outputDir: string | null = null , fileName: string | null = null, threads: number = Math.ceil(os.cpus().length / 2)) => {
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