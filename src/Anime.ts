import {type Genre, ItalianGenreMapping} from "./enums/Genre.ts";
import {ItalianStatusMapping, Status} from "./enums/Status.ts";
import axios from "axios";
import * as cheerio from "cheerio";
import DateParser from "./utilities/DateParser.ts";
import Episode from "./Episode.ts";
import Tadako from "../Tadako.ts";

export default class Anime {

    public url: string;
    public title: string = "";
    public alternativeTitle: string | null = null;
    public poster: string | null = null;
    public AniListURL: string | null = null;
    public MyAnimeListURL: string | null = null;
    public trailer: string | null = null;
    public category: Genre | null = null;
    public releaseDate: Date | null = null;
    public season: string | null = null;
    public studio: string | null = null;
    public genres: Genre[] = [];
    public rating: number | null = null;
    public duration: string | null = null;
    public episodes: Episode[] = [];
    public status: Status | null = null;
    public views: number | null = null;
    public keywords: string | null = null;
    public shortDescription: string | null = null;

    constructor(url: string, options: Partial<Omit<Anime, "url">> = {}) {
        this.url = url;
        Object.assign(this, options);
    }

    public data = async () => {
        await this.init();
        return this;
    }

    public init = async (): Promise<Anime> => {
        const { data } = await axios.get(this.url);
        const $ = cheerio.load(data);

        this.title = $("#anime-title").text();
        this.alternativeTitle = $("#anime-title").attr("data-jtitle") ?? this.alternativeTitle;
        this.poster = $("#main .content .widget.info .widget-body .row .info .thumb .img").attr("src") ?? this.poster;
        this.AniListURL = $("#anilist-button")?.attr("href") ?? this.AniListURL;
        this.MyAnimeListURL = $("#mal-button")?.attr("href") ?? this.MyAnimeListURL;
        this.trailer = $("#controls .trailer")?.attr("data-url") ? `https://www.youtube.com/watch?v=${$("#controls .trailer")?.attr("data-url")?.split("/").pop()}` : this.trailer;
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

        return this;
    }
}