import {type AudioLanguage, type Genre, type MediaType, type Season, type Sorting, type Status, type Studio} from "../enums";

/**
 * Interface representing the filters used in a search query on the [AnimeWorld website](https://animeworld.so).
 * This interface allows users to filter anime search results based on various criteria such as genre, season, year, and more.
 */
export default interface SearchFilters {

    /**
     * The genre of the anime. Can be a specific genre or a genre represented by a numeric ID.
     * @type {Genre | number}
     */
    genre?: Genre | number;

    /**
     * The season of the anime. Can be a specific season (e.g., "Winter", "Fall") or a string representing the season.
     * @type {Season | string}
     */
    season?: Season | string;

    /**
     * The release year of the anime.
     * @type {number}
     */
    year?: number;

    /**
     * The type of media for the anime (e.g., Anime, Movie, OVA). Can be a specific media type or a numeric ID.
     * @type {MediaType | number}
     */
    type?: MediaType | number;

    /**
     * The current status of the anime (e.g., ongoing, completed). Can be a specific status or a numeric ID.
     * @type {Status | number}
     */
    status?: Status | number;

    /**
     * The studio that produced the anime. Can be a specific studio name or a string.
     * @type {Studio | string}
     */
    studio?: Studio | string;

    /**
     * Whether the anime is dubbed. Can be a boolean or a numeric value representing the dubbing status.
     * @type {boolean | number}
     */
    dubbing?: boolean | number;

    /**
     * The language of the audio for the anime. Can be a specific language or a string.
     * @type {AudioLanguage | string}
     */
    language?: AudioLanguage | string;

    /**
     * The sorting order for the search results. Can be a specific sorting type or a numeric ID.
     * @type {Sorting | number}
     */
    sort?: Sorting | number;

    /**
     * The page number for pagination. Specifies which page of search results to retrieve.
     * @type {number}
     */
    page?: number;
}