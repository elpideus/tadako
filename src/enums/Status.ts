import {Genre} from "./Genre.ts";

export enum Status {
    ONGOING,
    FINISHED,
    UNRELEASED,
    DROPPED
}

export const ItalianStatusMapping: Record<string, Status> = {
    "IN CORSO": Status.ONGOING,
    "FINITO": Status.FINISHED,
    "NON RILASCIATO": Status.UNRELEASED,
    "DROPPATO": Status.DROPPED
}