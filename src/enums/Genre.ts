// TODO: Add Documentation
export enum Genre {
    MARTIAL_ARTS = 3,
    AVANTGARDE = 5,
    ADVENTURE = 2,
    ACTION = 1,
    CHILDREN = 47,
    COMEDY = 4,
    DEMONS = 6,
    DRAMATIC = 7,
    ECCHI = 8,
    FANTASY = 9,
    GAME = 10,
    HAREM = 11,
    HENTAI = 43,
    HORROR = 13,
    JOSEI = 14,
    MAGIC = 16,
    MECHA = 18,
    MILITARY = 19,
    MYSTERY = 21,
    MUSIC = 20,
    PARODY = 22,
    POLICE = 23,
    PSYCHOLOGICAL = 24,
    ROMANTIC = 46,
    SAMURAI = 26,
    SCIFI = 28,
    SCHOOL = 27,
    SEINEN = 29,
    SENTIMENTAL = 25,
    SHOUJO = 30,
    SHOUJO_AI = 31,
    SHOUNEN = 32,
    SHOUNEN_AI = 33,
    SLICE_OF_LIFE = 34,
    SPACE = 35,
    SUPERNATURAL = 37,
    SPORT = 36,
    HISTORY = 12,
    SUPERPOWERS = 38,
    THRILLER = 39,
    VAMPIRES = 40,
    VEHICLES = 48,
    YAOI = 41,
    YURI = 42
}

export const ItalianGenreMapping: Record<string, Genre> = {
    "ARTI MARZIALI": Genre.MARTIAL_ARTS,
    "AVANGUARDIA": Genre.AVANTGARDE,
    "AVVENTURA": Genre.ADVENTURE,
    "AZIONE": Genre.ACTION,
    "BAMBINI": Genre.CHILDREN,
    "COMMEDIA": Genre.COMEDY,
    "DEMONI": Genre.DEMONS,
    "DRAMMATICO": Genre.DRAMATIC,
    "ECCHI": Genre.ECCHI,
    "FANTASY": Genre.FANTASY,
    "GIOCO": Genre.GAME,
    "HAREM": Genre.HAREM,
    "HENTAI": Genre.HENTAI,
    "HORROR": Genre.HORROR,
    "JOSEI": Genre.JOSEI,
    "MAGIA": Genre.MAGIC,
    "MECHA": Genre.MECHA,
    "MILITARI": Genre.MILITARY,
    "MISTERO": Genre.MYSTERY,
    "MUSICALE": Genre.MUSIC,
    "PARODIA": Genre.PARODY,
    "POLIZIA": Genre.POLICE,
    "PSICOLOGICO": Genre.PSYCHOLOGICAL,
    "ROMANTICO": Genre.ROMANTIC,
    "SAMURAI": Genre.SAMURAI,
    "SCI-FI": Genre.SCIFI,
    "SCOLASTICO": Genre.SCHOOL,
    "SEINEN": Genre.SEINEN,
    "SENTIMENTALE": Genre.SENTIMENTAL,
    "SHOUJO": Genre.SHOUJO,
    "SHOUJO AI": Genre.SHOUJO_AI,
    "SHOUNEN": Genre.SHOUNEN,
    "SHOUNEN AI": Genre.SHOUNEN_AI,
    "SLICE OF LIFE": Genre.SLICE_OF_LIFE,
    "SPAZIO": Genre.SPACE,
    "SOPRANNATURALE": Genre.SUPERNATURAL,
    "SPORT": Genre.SPORT,
    "STORICO": Genre.HISTORY,
    "SUPERPOTERI": Genre.SUPERPOWERS,
    "THRILLER": Genre.THRILLER,
    "VAMPIRI": Genre.VAMPIRES,
    "VEICOLI": Genre.VEHICLES,
    "YAOI": Genre.YAOI,
    "YURI": Genre.YURI
}

// TODO: Add Genre mapping for english