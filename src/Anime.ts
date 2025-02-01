import {MediaType, MediaTypeMapping} from "./enums/MediaType";
import {Genre, ItalianGenreMapping, Status} from "./enums";
import Tadako from "./Tadako";
import {ItalianStatusMapping} from "./enums/Status";
import DateParser from "./utilities/DateParser";
import Episode from "./Episode";

/**
 * Class representing an Anime object.
 * This class is used to scrape and store detailed information about a specific anime from the
 * [AnimeWorld website](https://animeworld.so).
 */
export default class Anime {
    /**
     * The URL of the anime's page on [AnimeWorld](https://animeworld.so).
     * @type {string}
     */
    public url: string;

    /**
     * The title of the anime.
     * @type {string}
     */
    public title: string = "";

    /**
     * The alternative title of the anime (if available).
     *
     * Usually it is the Japanese title written in [romaji](https://en.wikipedia.org/wiki/Romanization_of_Japanese).
     * @type {string | null}
     */
    public alternativeTitle: string | null = null;

    /**
     * The URL of the anime's poster image.
     * @type {string | null}
     */
    public poster: string | null = null;

    /**
     * The [AniList](https://anilist.co/) URL for the anime.
     * @type {string | null}
     */
    public AniListURL: string | null = null;

    /**
     * The [MyAnimeList](https://myanimelist.net/) URL for the anime.
     * @type {string | null}
     */
    public MyAnimeListURL: string | null = null;

    /**
     * The trailer URL for the anime (if available).
     *
     * Usually hosted on [YouTube](https://youtube.com)
     * @type {string | null}
     */
    public trailer: string | null = null;

    /**
     * The category or type of anime (e.g., Anime, Movie, OVA).
     * @type {Genre | null}
     */
    public category: MediaType | number | null = null;

    /**
     * The release date of the anime.
     * @type {Date | null}
     */
    public releaseDate: Date | null = null;

    /**
     * The season in which the anime was released (if available).
     * @type {string | null}
     */
    public season: string | null = null;

    /**
     * The studio responsible for producing the anime.
     * @type {string | null}
     */
    public studio: string | null = null;

    /**
     * A list of genres associated with the anime.
     * @type {Genre[]}
     */
    public genres: Genre[] = [];

    /**
     * The rating of the anime.
     * @type {number | null}
     */
    public rating: number | null = null;

    /**
     * The duration of each episode of the anime.
     * @type {string | null}
     */
    public duration: string | null = null;

    /**
     * A list of episodes for the anime.
     * @type {Episode[]}
     */
    public episodes: Episode[] = [];

    /**
     * The current status of the anime (e.g., airing, completed).
     * @type {Status | null}
     */
    public status: Status | null = null;

    /**
     * The number of views the anime has received.
     * @type {number | null}
     */
    public views: number | null = null;

    /**
     * A string containing the keywords associated with the anime.
     * @type {string | null}
     */
    public keywords: string | null = null;

    /**
     * A short description of the anime.
     * @type {string | null}
     */
    public shortDescription: string | null = null;

    /**
     * Creates an instance of the Anime class.
     * @param {string} url - The URL of the anime's page on [AnimeWorld](https://animeworld.so).
     * @param {Partial<Omit<Anime, "url">>} [options={}] - Optional properties to initialize the anime instance.
     */
    constructor(url: string, options: Partial<Omit<Anime, "url">> = {}) {
        this.url = url;
        Object.assign(this, options);
    }

    /**
     * Fetches and initializes the data for the anime instance.
     * This method calls the `init` method to scrape the anime's details from the
     * [AnimeWorld website](https://animeworld.so).
     *
     * @returns {Promise<Anime>} - A promise that resolves to the current instance of the Anime class.
     */
    public data = async (): Promise<Anime> => {
        await this.init();
        return this;
    }

    /**
     * Scrapes and initializes the details of the anime from [AnimeWorld](https://animeworld.so).
     * This method loads the anime's page and extracts relevant information such as the title, release date,
     * genres, and other properties.
     *
     * @returns {Promise<Anime>} - A promise that resolves to the current instance of the Anime class with initialized data.
     */
    public init = async (): Promise<Anime> => {
        const $ = await Tadako.parse(this.url);

        this.title = $("#anime-title").text();
        this.alternativeTitle = $("#anime-title").attr("data-jtitle") ?? this.alternativeTitle;
        this.poster = $("#main .content .widget.info .widget-body .row .info .thumb .img").attr("src") ?? this.poster;
        this.AniListURL = $("#anilist-button")?.attr("href") ?? this.AniListURL;
        this.MyAnimeListURL = $("#mal-button")?.attr("href") ?? this.MyAnimeListURL;
        this.trailer = $("#controls .trailer")?.attr("data-url") ? `https://www.youtube.com/watch?v=${$("#controls .trailer")?.attr("data-url")?.split("/").pop()}` : this.trailer;
        this.category = MediaTypeMapping[$('dt:contains("Categoria:")').next().text().trim().toUpperCase()];
        this.releaseDate = DateParser.parseItalianDate($('dt:contains("Data di Uscita:")').next().text().trim());
        this.season = $('dt:contains("Stagione:")').next().find("a").text().trim();
        this.studio = $('dt:contains("Studio:")').next().find("a").text().trim();
        $('dt:contains("Genere:")').next().find("a").each((i, el) => {this.genres.push(ItalianGenreMapping[$(el).text().trim().toUpperCase()])});
        this.rating = parseFloat($('dt:contains("Voto:")').next().find('.rating span').text().trim());
        this.duration = $('dt:contains("Durata:")').next().text().trim();
        $("#animeId .widget-body .server.active .episodes.range").each((index, range) => {
            $(range).find("li.episode").each((index, episode) => {
                this.episodes.push(new Episode(`https://${Tadako.domain}${$(episode).find("a").attr("href")}`, this))
            });
        });
        this.status = ItalianStatusMapping[$('dt:contains("Stato:")').next().find("a").text().trim().toUpperCase()]
        this.views = parseInt($('dt:contains("Visualizzazioni:")').next().text().trim());
        this.keywords = $("#tagsReload").text();
        return this;
    }
}