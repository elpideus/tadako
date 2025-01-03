import axios from "axios";
import * as cheerio from "cheerio";
import Anime from "./Anime";
import DateParser from "./utilities/DateParser";
import type SearchFilters from "./interfaces/SearchFilters.ts";
import {MediaType} from "./enums";


/**
 * Main class of the Tadako API. Provides most of the useful functions of the library, like list and search.
 */
export default class Tadako {

    /**
     * The base domain for the [AnimeWorld website](https://animeworld.so).
     * @type {string}
     */
    static domain: string = "www.animeworld.so";

    /**
     * Routes used for different types of requests on [AnimeWorld](https://animeworld.so).
     * @type {Object}
     * @property {string} list - Route for fetching the anime list.
     * @property {string} search - Route for performing a search.
     */
    static routes: { list: string, search: string} = {
        list: "az-list",
        search: "filter"
    };

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
    static async list(page: number = 1, section: string | null = null): Promise<{page: number, maxPages: number, results: Anime[]}> {
        const url = `https://${Tadako.domain}/${Tadako.routes.list}${section ? "/" + section.toUpperCase() : ""}?page=${page}`;
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const maxPages = parseInt($("#main .content .widget.az-list .widget-body div .paging-wrapper #paging-form .total").text()) || 1;

        const results: Anime[] = [];
        $("#main .content .widget.az-list .widget-body .items .item").each((_, item) => {
            const $item = $(item);
            results.push(new Anime(
                `https://${Tadako.domain}${$item.find(".info .name").attr("href")}`, {
                    title: $item.find(".info .name").text(),
                    shortDescription: $item.find(".info p").text(),
                    poster: $item.find("a img").attr("src") || null,
                    releaseDate: DateParser.parseItalianDate($item.find(".info .name").attr("data-tippy-content") || "") || new Date()
                }
            ));
        });

        return { page: page > maxPages ? 1 : page, maxPages, results: results };
    }

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
    static async search(query: string = "", filters: SearchFilters = {}): Promise<{page: number, maxPages: number, results: Anime[], filters: SearchFilters}> {
        const url = `https://${Tadako.domain}/${Tadako.routes.search}`;
        const { data } = await axios.get(url, { params: { keyword: query, ...filters } });
        const $ = cheerio.load(data);

        const results: Anime[] = [];
        $("#main .content .widget .widget-body .film-list .item").each((_, item) => {
            const $item = $(item);
            let mediaType: MediaType = MediaType.ANIME;
            if ($item.find("a.poster .status .movie")) mediaType = MediaType.MOVIE;
            if ($item.find("a.poster .status .ova")) mediaType = MediaType.OVA;
            if ($item.find("a.poster .status .ona")) mediaType = MediaType.ONA;
            if ($item.find("a.poster .status .special")) mediaType = MediaType.SPECIAL;
            if ($item.find("a.poster .status .music")) mediaType = MediaType.MUSIC;
            results.push(new Anime(
                `https://${Tadako.domain}${$item.find(".inner a.name").attr("href")}`, {
                    title: $item.find(".inner a.name").text(),
                    poster: $item.find(".inner a.poster img").attr("src"),
                    alternativeTitle: $item.find(".inner a.name").attr("data-jtitle"),
                    category: mediaType
                }
            ));
        });

        const pagePlaceholder = $("#main .content .widget .widget-body .paging-wrapper #paging-form #page-input").attr("placeholder") || "1";
        const maxPagesText = $("#main .content .widget .widget-body .paging-wrapper #paging-form .total").text() || "1";

        return {
            page: filters.page || parseInt(pagePlaceholder),
            maxPages: parseInt(maxPagesText),
            results,
            filters
        };
    }
}
