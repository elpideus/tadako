import type {Genre} from "../enums/Genre.ts";
import type {Season} from "../enums/Season.ts";
import type {MediaType} from "../enums/MediaType.ts";
import type {Status} from "../enums/Status.ts";
import type {Studio} from "../enums/Studio.ts";
import type {AudioLanguage} from "../enums/AudioLanguage.ts";
import type {Sorting} from "../enums/Sorting.ts";

// TODO: Add Documentation
export default interface SearchFilters {
    genre?: Genre | number;
    season?: Season | string;
    year?: number;
    mediaType?: MediaType | number;
    status?: Status | number;
    studio?: Studio | string;
    dubbing?: boolean | number;
    audioLanguage?: AudioLanguage | string;
    sorting?: Sorting | number;
    page?: number;
}