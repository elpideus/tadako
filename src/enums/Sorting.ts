// TODO: Add Documentation
export enum Sorting {
    DEFAULT,
    NEW_ADDITIONS,
    A_TO_Z,
    Z_TO_A,
    OLDEST,
    LATEST,
    MOST_VIEWED
}

export const SortingMapping: Record<string, Sorting> = {
    "DEFAULT": Sorting.DEFAULT,
    "NEW_ADDITIONS": Sorting.NEW_ADDITIONS,
    "NEW": Sorting.NEW_ADDITIONS,
    "A_TO_Z": Sorting.A_TO_Z,
    "ATOZ": Sorting.A_TO_Z,
    "ALPHABETICAL": Sorting.A_TO_Z,
    "Z_TO_A": Sorting.Z_TO_A,
    "ZTOA": Sorting.Z_TO_A,
    "OLDEST": Sorting.OLDEST,
    "LATEST": Sorting.LATEST,
    "VIEWS": Sorting.MOST_VIEWED,
    "MOST VIEWED": Sorting.MOST_VIEWED,
    "MOST_VIEWED": Sorting.MOST_VIEWED
}