// TODO: Add Documentation

export enum MediaType {
    ANIME = 0,
    MOVIE = 4,
    OVA = 1,
    ONA = 2,
    SPECIAL = 3,
    MUSIC = 5
}

export const ItalianMediaTypeMapping: Record<string, MediaType> = {
    "ANIME": MediaType.ANIME,
    "MOVIE": MediaType.MOVIE,
    "OVA": MediaType.OVA,
    "ONA": MediaType.ONA,
    "SPECIAL": MediaType.SPECIAL,
    "MUSIC": MediaType.MUSIC
}