"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Genre_1 = require("./enums/Genre");
var Status_1 = require("./enums/Status");
var axios_1 = require("axios");
var cheerio = require("cheerio");
var DateParser_1 = require("./utilities/DateParser");
var Episode_1 = require("./Episode");
var Tadako_1 = require("./Tadako");
/**
 * Class representing an Anime object.
 * This class is used to scrape and store detailed information about a specific anime from the
 * [AnimeWorld website](https://animeworld.so).
 */
var Anime = /** @class */ (function () {
    /**
     * Creates an instance of the Anime class.
     * @param {string} url - The URL of the anime's page on [AnimeWorld](https://animeworld.so).
     * @param {Partial<Omit<Anime, "url">>} [options={}] - Optional properties to initialize the anime instance.
     */
    function Anime(url, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        /**
         * The title of the anime.
         * @type {string}
         */
        this.title = "";
        /**
         * The alternative title of the anime (if available).
         *
         * Usually it is the Japanese title written in [romaji](https://en.wikipedia.org/wiki/Romanization_of_Japanese).
         * @type {string | null}
         */
        this.alternativeTitle = null;
        /**
         * The URL of the anime's poster image.
         * @type {string | null}
         */
        this.poster = null;
        /**
         * The [AniList](https://anilist.co/) URL for the anime.
         * @type {string | null}
         */
        this.AniListURL = null;
        /**
         * The [MyAnimeList](https://myanimelist.net/) URL for the anime.
         * @type {string | null}
         */
        this.MyAnimeListURL = null;
        /**
         * The trailer URL for the anime (if available).
         *
         * Usually hosted on [YouTube](https://youtube.com)
         * @type {string | null}
         */
        this.trailer = null;
        /**
         * The category or type of anime (e.g., Anime, Movie, OVA).
         * @type {Genre | null}
         */
        this.category = null;
        /**
         * The release date of the anime.
         * @type {Date | null}
         */
        this.releaseDate = null;
        /**
         * The season in which the anime was released (if available).
         * @type {string | null}
         */
        this.season = null;
        /**
         * The studio responsible for producing the anime.
         * @type {string | null}
         */
        this.studio = null;
        /**
         * A list of genres associated with the anime.
         * @type {Genre[]}
         */
        this.genres = [];
        /**
         * The rating of the anime.
         * @type {number | null}
         */
        this.rating = null;
        /**
         * The duration of each episode of the anime.
         * @type {string | null}
         */
        this.duration = null;
        /**
         * A list of episodes for the anime.
         * @type {Episode[]}
         */
        this.episodes = [];
        /**
         * The current status of the anime (e.g., airing, completed).
         * @type {Status | null}
         */
        this.status = null;
        /**
         * The number of views the anime has received.
         * @type {number | null}
         */
        this.views = null;
        /**
         * A string containing the keywords associated with the anime.
         * @type {string | null}
         */
        this.keywords = null;
        /**
         * A short description of the anime.
         * @type {string | null}
         */
        this.shortDescription = null;
        /**
         * Fetches and initializes the data for the anime instance.
         * This method calls the `init` method to scrape the anime's details from the
         * [AnimeWorld website](https://animeworld.so).
         *
         * @returns {Promise<Anime>} - A promise that resolves to the current instance of the Anime class.
         */
        this.data = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        }); };
        /**
         * Scrapes and initializes the details of the anime from [AnimeWorld](https://animeworld.so).
         * This method loads the anime's page and extracts relevant information such as the title, release date,
         * genres, and other properties.
         *
         * @returns {Promise<Anime>} - A promise that resolves to the current instance of the Anime class with initialized data.
         */
        this.init = function () { return __awaiter(_this, void 0, void 0, function () {
            var data, $;
            var _this = this;
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0: return [4 /*yield*/, axios_1.default.get(this.url)];
                    case 1:
                        data = (_k.sent()).data;
                        $ = cheerio.load(data);
                        this.title = $("#anime-title").text();
                        this.alternativeTitle = (_a = $("#anime-title").attr("data-jtitle")) !== null && _a !== void 0 ? _a : this.alternativeTitle;
                        this.poster = (_b = $("#main .content .widget.info .widget-body .row .info .thumb .img").attr("src")) !== null && _b !== void 0 ? _b : this.poster;
                        this.AniListURL = (_d = (_c = $("#anilist-button")) === null || _c === void 0 ? void 0 : _c.attr("href")) !== null && _d !== void 0 ? _d : this.AniListURL;
                        this.MyAnimeListURL = (_f = (_e = $("#mal-button")) === null || _e === void 0 ? void 0 : _e.attr("href")) !== null && _f !== void 0 ? _f : this.MyAnimeListURL;
                        this.trailer = ((_g = $("#controls .trailer")) === null || _g === void 0 ? void 0 : _g.attr("data-url")) ? "https://www.youtube.com/watch?v=".concat((_j = (_h = $("#controls .trailer")) === null || _h === void 0 ? void 0 : _h.attr("data-url")) === null || _j === void 0 ? void 0 : _j.split("/").pop()) : this.trailer;
                        this.category = $('dt:contains("Categoria:")').next().text().trim().toUpperCase();
                        this.releaseDate = DateParser_1.default.parseItalianDate($('dt:contains("Data di Uscita:")').next().text().trim());
                        this.season = $('dt:contains("Stagione:")').next().find("a").text().trim();
                        this.studio = $('dt:contains("Studio:")').next().find("a").text().trim();
                        $('dt:contains("Genere:")').next().find("a").each(function (i, el) { _this.genres.push(Genre_1.ItalianGenreMapping[$(el).text().trim().toUpperCase()]); });
                        this.rating = parseFloat($('dt:contains("Voto:")').next().find('.rating span').text().trim());
                        this.duration = $('dt:contains("Durata:")').next().text().trim();
                        $("#animeId .widget-body .server.active .episodes.range.active .episode").each(function (index, episode) {
                            _this.episodes.push(new Episode_1.default("https://".concat(Tadako_1.default.domain).concat($(episode).find("a").attr("href"))));
                        });
                        this.status = Status_1.ItalianStatusMapping[$('dt:contains("Stato:")').next().find("a").text().trim().toUpperCase()];
                        this.views = parseInt($('dt:contains("Visualizzazioni:")').next().text().trim());
                        this.keywords = $("#tagsReload").text();
                        return [2 /*return*/, this];
                }
            });
        }); };
        this.url = url;
        Object.assign(this, options);
    }
    return Anime;
}());
exports.default = Anime;
