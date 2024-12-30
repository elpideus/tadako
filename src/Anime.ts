import {type Genre, ItalianGenreMapping} from "./Genre.ts";
import {ItalianStatusMapping, Status} from "./Status.ts";
import axios from "axios";
import * as cheerio from "cheerio";
import DateParser from "./utilities/DateParser.ts";
import Episode from "./Episode.ts";
import Tadako from "./Tadako.ts";

export default class Anime {

    public url: string;
    public title: string = "";
    public alternativeTitle: string | null = null;
    public AniListURL: string | null = null;
    public MyAnimeListURL: string | null = null;
    public trailer: string | null = null;
    public downloadURL: string | null = null;
    public category: Genre | null = null;
    public releaseDate: Date = new Date();
    public season: string = "";
    public studio: string = "";
    public genres: Genre[] = [];
    public rating: number = 0;
    public duration: string = "0 min/ep";
    public episodes: Episode[] = [];
    public status: Status = Status.FINISHED;
    public views: number = 0;
    public keywords: string = "";

    constructor(url: string, title: string = "") {
        this.url = url;
        this.title = title;
    }

    static get = async (url: string): Promise<Anime> => {
        const instance = new Anime(url);
        await instance.init();
        return instance;
    }

    get = async (): Promise<Anime> => {
        await this.init();
        return this;
    }


    private init = async () => {
        const { data } = await axios.get(this.url);
        const $ = cheerio.load(data);

        this.title = $("#anime-title").text();
        this.alternativeTitle = $("#anime-title").attr("data-jtitle") ?? this.alternativeTitle;
        this.AniListURL = $("#anilist-button")?.attr("href") ?? this.AniListURL;
        this.MyAnimeListURL = $("#mal-button")?.attr("href") ?? this.MyAnimeListURL;
        this.trailer = $("#controls .trailer")?.attr("data-url") ? `https://www.youtube.com/watch?v=${$("#controls .trailer")?.attr("data-url")?.split("/").pop()}` : this.trailer;
        this.downloadURL = $("#download .widget.downloads .widget-body #alternativeDownloadLink").attr("href") ?? this.downloadURL;
        this.category = ItalianGenreMapping[$('dt:contains("Categoria:")').next().text().trim().toUpperCase()];
        this.releaseDate = DateParser.parseItalianDate($('dt:contains("Data di Uscita:")').next().text().trim());
        this.season = $('dt:contains("Stagione:")').next().find("a").text().trim();
        this.studio = $('dt:contains("Studio:")').next().find("a").text().trim();
        $('dt:contains("Genere:")').next().find("a").each((i, el) => {this.genres.push(ItalianGenreMapping[$(el).text().trim().toUpperCase()])});
        this.rating = parseFloat($('dt:contains("Voto:")').next().find('.rating span').text().trim());
        this.duration = $('dt:contains("Durata:")').next().text().trim();
        $("#animeId .widget-body .server.active .episodes.range.active .episode").each((index, episode) => {
            this.episodes.push(new Episode(`https://${Tadako.domain}${$(episode).find("a").attr("href")}`))
        });
        this.status = ItalianStatusMapping[$('dt:contains("Stato:")').next().find("a").text().trim().toUpperCase()]
        this.views = parseInt($('dt:contains("Visualizzazioni:")').next().text().trim());
        this.keywords = $("#tagsReload").text();
    }
}