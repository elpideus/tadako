import axios from "axios";
import * as cheerio from "cheerio";
import Anime from "./src/Anime.ts";
import DateParser from "./src/utilities/DateParser.ts";
import type SearchFilters from "./src/interfaces/SearchFilters.ts";

// TODO: Add Documentation
export default class Tadako {

    public static domain = "www.animeworld.so";

    public static routes = {
        list: "az-list",
        search: "filter"
    }

    public static list = async (page: number = 1, section: string | null = null): Promise<{page: number, maxPages: number, items: Anime[]}> => {
        const { data } = await axios.get(`https://${Tadako.domain}/${Tadako.routes.list}${section ? "/" + section.toUpperCase() : ""}?page=${page}`);
        const $ = cheerio.load(data);

        let items: {page: number, maxPages: number, items: Anime[]} = { page: page, maxPages: parseInt($("#main .content .widget.az-list .widget-body div .paging-wrapper #paging-form .total").text()), items: [] };

        $('#main .content .widget.az-list .widget-body .items .item').each((index, item) => {
            items.items.push(
                new Anime(`https://${Tadako.domain}${$(item).find(".info .name").attr("href")}`, {
                    title: $(item).find(".info .name").text(),
                    shortDescription: $(item).find(".info p").text(),
                    poster: $(item).find("a img").attr("src") ?? null,
                    releaseDate: DateParser.parseItalianDate($(item).find(".info .name").attr("data-tippy-content") || "") ?? new Date()
                })
            );
        });

        if (items.page > items.maxPages) items.page = 1;

        return items;
    }

    public static search = async (query: string = "", filters: SearchFilters = {}) => {

        const { data } = await axios.get(`https://${Tadako.domain}/${Tadako.routes.search}`, { params: {keyword: query, ...filters} });
        const $ = cheerio.load(data);

        const results: {page: number, maxPages: number, results: Anime[], filters: SearchFilters} = {page: 0, maxPages: 0, results: [], filters: {}};

        $("#main .content .widget .widget-body .film-list .item").each((index, item) => {
            results.results.push(new Anime(
                `https://${Tadako.domain}${$(item).find(".inner a.name").attr("href")}`, {
                    title: $(item).find(".inner a.name").text(),
                    poster: $(item).find(".inner a.poster img").attr("src"),
                    alternativeTitle: $(item).find(".inner a.name").attr("data-jtitle")
                }));
            results.page = (filters.page ?? parseInt($("#main .content .widget .widget-body .paging-wrapper #paging-form #page-input").attr("placeholder") ?? "1"));
            results.maxPages = parseInt($("#main .content .widget .widget-body .paging-wrapper #paging-form .total").text() ?? "1");
            results.filters = filters;
        });

        return results;
    }
}