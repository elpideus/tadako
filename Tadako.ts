import axios from "axios";
import * as cheerio from "cheerio";
import Anime from "./src/Anime.ts";
import DateParser from "./src/utilities/DateParser.ts";


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

    // TODO: Complete this with filters and stuff
    public static search = async (query: string) => {
        const { data } = await axios.get(`https://${Tadako.domain}/${Tadako.routes.search}?keyword=${query}`);
        const $ = cheerio.load(data);

        const results: Anime[] = [];

        $("#main .content .widget .widget-body .film-list .item").each((index, item) => {
            results.push(new Anime(`https://${Tadako.domain}${$(item).find("a.name").attr("href")}`, {title: $(item).find("a.name").text(), poster: $(item).find("a.poster img").attr("src")}))
        });

        return results;
    }
}