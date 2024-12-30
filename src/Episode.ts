import axios from "axios";
import * as cheerio from "cheerio";

// TODO: Add Documentation
export default class Episode {

    public url: string;

    constructor(url: string) {
        this.url = url;
    }

    public getDownloadURL = async () => {
        const { data } = await axios.get(this.url);
        const $ = cheerio.load(data);

        return $("#download .widget.downloads .widget-body #alternativeDownloadLink").attr("href");
    }

}