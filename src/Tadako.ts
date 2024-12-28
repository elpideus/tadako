import axios from "axios";
import * as cheerio from "cheerio";


export default class Tadako {

    public static domain = "animeworld.so";

    public static routes = {
        list: "az-list"
    }

    public static list = async (page: number = 1, section: string = "/"): Promise<{page: number, maxPages: number, items: {name: string, shortDescription: string, poster: string | null, releaseDate: string | null; url: string}[]}> => {
        const { data } = await axios.get(`https://www.${Tadako.domain}/${Tadako.routes.list}/${section.toUpperCase()}?page=${page}`);
        const $ = cheerio.load(data);

        let items: {page: number, maxPages: number, items: { name: string; shortDescription: string; poster: string | null; releaseDate: string | null; url: string}[]} = { page: page, maxPages: parseInt($("#main .content .widget.az-list .widget-body div .paging-wrapper #paging-form .total").text()), items: [] };

        $('#main .content .widget.az-list .widget-body .items .item').each((index, element) => {
            items.items.push({
                name: $(element).find(".info .name").text(),
                shortDescription: $(element).find(".info p").text(),
                poster: $(element).find("a img").attr("src") ?? null,
                releaseDate: $(element).find(".info .name").attr("data-tippy-content") ?? null,
                url: `https://www.${Tadako.domain}${$(element).find(".info .name").attr("href")}`
            });
        });

        if (items.page > items.maxPages) items.page = 1;

        return items;
    }
}