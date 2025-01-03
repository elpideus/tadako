"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var axios_1 = require("axios");
var cheerio = require("cheerio");
var Anime_1 = require("./Anime");
var DateParser_1 = require("./utilities/DateParser");
/**
 * Main class of the Tadako API. Provides most of the useful functions of the library, like list and search.
 */
var Tadako = /** @class */ (function () {
    function Tadako() {
    }
    /**
     * Fetches a list of anime from [AnimeWorld](https://animeworld.so).
     *
     * Allows Filtering and pagination.
     *
     * @param {number} [page=1] - The page number to fetch (defaults to 1).
     * @param {string | null} [section=null] - Optional section to filter the list by (e.g., genre or category).
     * @returns {Promise<{page: number, maxPages: number, results: Anime[]}>} - A promise that resolves to an object
     *                                                                          containing the page number, maximum
     *                                                                          number of pages, and a list of anime
     *                                                                          objects.
     * @returns {number} page - The current page number (adjusted to 1 if it exceeds maxPages).
     * @returns {number} maxPages - The total number of pages available.
     * @returns {Anime[]} items - The list of anime retrieved from the page.
     */
    Tadako.list = function () {
        return __awaiter(this, arguments, void 0, function (page, section) {
            var url, data, $, maxPages, results;
            if (page === void 0) { page = 1; }
            if (section === void 0) { section = null; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://".concat(Tadako.domain, "/").concat(Tadako.routes.list).concat(section ? "/" + section.toUpperCase() : "", "?page=").concat(page);
                        return [4 /*yield*/, axios_1.default.get(url)];
                    case 1:
                        data = (_a.sent()).data;
                        $ = cheerio.load(data);
                        maxPages = parseInt($("#main .content .widget.az-list .widget-body div .paging-wrapper #paging-form .total").text()) || 1;
                        results = [];
                        $("#main .content .widget.az-list .widget-body .items .item").each(function (_, item) {
                            var $item = $(item);
                            results.push(new Anime_1.default("https://".concat(Tadako.domain).concat($item.find(".info .name").attr("href")), {
                                title: $item.find(".info .name").text(),
                                shortDescription: $item.find(".info p").text(),
                                poster: $item.find("a img").attr("src") || null,
                                releaseDate: DateParser_1.default.parseItalianDate($item.find(".info .name").attr("data-tippy-content") || "") || new Date()
                            }));
                        });
                        return [2 /*return*/, { page: page > maxPages ? 1 : page, maxPages: maxPages, results: results }];
                }
            });
        });
    };
    /**
     * Searches for anime on [AnimeWorld](https://animeworld.so) based on a query and optional filters.
     *
     * @param {string} [query=""] - The search query string (e.g., anime title or keywords).
     * @param {SearchFilters} [filters={}] - An object containing additional filters to apply to the search.
     * @returns {Promise<{page: number, maxPages: number, results: Anime[], filters: SearchFilters}>} - A promise that
     *                                                                                                  resolves to an
     *                                                                                                  object
     *                                                                                                  containing the
     *                                                                                                  search results
     *                                                                                                  and pagination
     *                                                                                                  details.
     * @returns {number} page - The current page number for the search results.
     * @returns {number} maxPages - The total number of pages available for the search results.
     * @returns {Anime[]} results - The list of anime matching the search query and filters.
     * @returns {SearchFilters} filters - The filters that were used in the search.
     */
    Tadako.search = function () {
        return __awaiter(this, arguments, void 0, function (query, filters) {
            var url, data, $, results, pagePlaceholder, maxPagesText;
            if (query === void 0) { query = ""; }
            if (filters === void 0) { filters = {}; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://".concat(Tadako.domain, "/").concat(Tadako.routes.search);
                        return [4 /*yield*/, axios_1.default.get(url, { params: __assign({ keyword: query }, filters) })];
                    case 1:
                        data = (_a.sent()).data;
                        $ = cheerio.load(data);
                        results = [];
                        $("#main .content .widget .widget-body .film-list .item").each(function (_, item) {
                            var $item = $(item);
                            results.push(new Anime_1.default("https://".concat(Tadako.domain).concat($item.find(".inner a.name").attr("href")), {
                                title: $item.find(".inner a.name").text(),
                                poster: $item.find(".inner a.poster img").attr("src"),
                                alternativeTitle: $item.find(".inner a.name").attr("data-jtitle")
                            }));
                        });
                        pagePlaceholder = $("#main .content .widget .widget-body .paging-wrapper #paging-form #page-input").attr("placeholder") || "1";
                        maxPagesText = $("#main .content .widget .widget-body .paging-wrapper #paging-form .total").text() || "1";
                        return [2 /*return*/, {
                                page: filters.page || parseInt(pagePlaceholder),
                                maxPages: parseInt(maxPagesText),
                                results: results,
                                filters: filters
                            }];
                }
            });
        });
    };
    /**
     * The base domain for the [AnimeWorld website](https://animeworld.so).
     * @type {string}
     */
    Tadako.domain = "www.animeworld.so";
    /**
     * Routes used for different types of requests on [AnimeWorld](https://animeworld.so).
     * @type {Object}
     * @property {string} list - Route for fetching the anime list.
     * @property {string} search - Route for performing a search.
     */
    Tadako.routes = {
        list: "az-list",
        search: "filter"
    };
    return Tadako;
}());
exports.default = Tadako;
