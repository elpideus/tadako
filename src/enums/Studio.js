"use strict";
// TODO: Complete descriptions for all the studios
Object.defineProperty(exports, "__esModule", { value: true });
exports.Studio = void 0;
/**
 * Enum representing different animation studios.
 * The keys are internal identifiers, and the values are the corresponding names of the animation studios.
 *
 * This enum is useful for categorizing and referencing animation studios in a structured manner.
 * Each entry represents a specific animation studio, providing an easy way to access studio names
 * throughout the library.
 */
var Studio;
(function (Studio) {
    Studio["UNKNOWN"] = "Sconosciuto";
    /**
     * Shiyong Wang founded [2:10 Animation](https://en.2-10.cn/) as a small studio in 2007, Wuhan, China. After dedicating to Chinese
     * animation for 16 years, the company now has more than 500 employees offering a package service of cartoon IP
     * production and operation. Their services include 6 complete and independent industrial chain modules including
     * animation project planning, script creation, animation production, R&D, publicity and distribution, and
     * commercial operation. They maintain strategic cooperation with leading companies of film and television, video,
     * novel, game, and consumer goods industries, etc.
     *
     * Their works are of multiple categories. It has more than ten high-quality original popular IPs such as
     * "The Silver Guardian", "I am Joybo", "The Great Warrior Wall", "Glaze War" and "The Country of Rare Treasures".
     * They continue to produce high-quality CG short films for dozens of international game products such as
     * "League of Legends", "Onmyoji", "Arknights", "Honor of Kings", "Harry Potter: Magic Awakened". And they have
     * created animation series for many popular IPs such as "Close Combat Mage", "Thousands of World",
     * "Everlasting God of Sword", "Lighter and Princess Dress".
     *
     * While being recognized by the market and users, they have won the recognition and investment of Alibaba,
     * Pop Mart, Frees Fund, COL Group, HyperGryph and other companies and institutions.
     *
     * In 2022, in addition to continuing in-depth cooperation with more than 30 game companies, they also participated
     * in the production of many well-known animation IPs such as "Digimon" and "Transformers" and so on.
     */
    Studio["TWOTEN_ANIMATION"] = "2:10 AM Animation";
    /**
     * We couldn't find much about this studio. We know they have worked on titles like "Megalobox", "Sweetness &
     * Lightning", "The Pilot's Love Song" and "Actually, I am...".
     *
     * The studio seems to have changed their name to TMS/3xCube. They were referred to as 東京ムービー/3xCube in the past.
     *
     * @link [TMS Website](https://tmsanime.com/)
     * @link [Wikipedia](https://en.wikipedia.org/wiki/TMS_Entertainment)
     */
    Studio["TRIPLEXCUBE"] = "3xCube";
    /**
     * Sadly we weren't able to find official information about this studio.
     *
     * According to [AnimeNewsNetwork](https://www.animenewsnetwork.com), in
     * [this article](https://www.animenewsnetwork.com/encyclopedia/company.php?id=21406), the company has worked on
     * a number of titles, some of which are pretty well known, namely "Attack on Titan Final Season THE FINAL CHAPTERS
     * (TV)", "Attack on Titan The Final Season Part 2 (TV)", "Chainsaw Man (TV)", "Josee, The Tiger and the Fish
     * (movie)", "Psycho-Pass 3: First Inspector (movie)" and "Trigun Stampede (TV)".
     */
    Studio["FIVE_INCORPORATED"] = "5 Inc.";
    /**
     * According to [Wikipedia](https://wikipedia.org) in
     * [this article](https://en.wikipedia.org/wiki/Eight_Bit_(studio)):
     *
     * Eightbit co., Ltd. (Japanese: 株式会社エイトビット, Hepburn: Kabushiki-gaisha Eitobitto), also known as 8bit, is a
     * Japanese animation studio established in September 2008 by former Satelight members.
     *
     * On June 8, 2020, it was announced that Eight Bit had entered a partnership with Bandai Namco to create multiple
     * anime productions. Their first project will be The Slime Diaries: That Time I Got Reincarnated as a Slime.
     *
     * On November 1, 2021, Eight Bit opened a new studio in the Niigata Prefecture.
     *
     * On April 1, 2024, Eight Bit became a wholly owned subsidiary of Bandai Namco Filmworks.
     *
     * According to [AniDB](https://anidb.net) on [this page](https://anidb.net/creator/21883) and
     * [MyAnimeList](https://myanimelist.net/) on [this page](https://myanimelist.net/anime/producer/441/8bit):
     *
     * Eight Bit was originally Satelight's first studio and was involved in the production of several works including
     * "Noein", "Sousei no Aquarion" and "Macross F". It became independent in September 2008 under producer Kasai
     * Tsutomu. Its headquarters is located in Suginami, Tokyo, Japan. The major line of work is planning and production
     * of animation programs and 3DCG work.
     *
     * The studio's first major production was the "Gekijouban Macross F: Itsuwari no Utahime" feature film in
     * collaboration with the former parent company Satelight in 2009. The first major work on its own was the
     * television anime series "IS: Infinite Stratos" in 2011.
     *
     * @link [Official Website](https://8bit-studio.co.jp)
     */
    Studio["EIGHT_BIT"] = "8bit";
    Studio["A1_PICTURES"] = "A-1 Pictures";
    Studio["A_LINE"] = "A-Line";
    Studio["A_REAL"] = "A-Real";
    Studio["A_C_G_T"] = "A.C.G.T.";
    Studio["A24"] = "A24";
    Studio["ABC_ANIMATION"] = "ABC Animation";
    Studio["ABJ_COMPANY"] = "ABJ COMPANY";
    Studio["ACCA_EFFE"] = "Acca effe";
    Studio["ACTAS"] = "Actas";
    Studio["AIC"] = "AIC";
    Studio["AIC_A_S_T_A"] = "AIC A.S.T.A.";
    Studio["AIC_BUILD"] = "AIC Build";
    Studio["AIC_CLASSIC"] = "AIC Classic";
    Studio["AIC_FRONTIER"] = "AIC Frontier";
    Studio["AIC_PLUS"] = "AIC Plus+";
    Studio["AIC_SPIRITS"] = "AIC Spirits";
    Studio["AJIA_DO"] = "Ajia-Do";
    Studio["AKATSUKI"] = "Akatsuki";
    Studio["ALBACROW"] = "Albacrow";
    Studio["AN_DERCEN"] = "An DerCen";
    Studio["ANIMA"] = "Anima";
    Studio["ANIMA_CO"] = "Anima&Co.";
    Studio["ANIMATE_FILM"] = "animate Film";
    Studio["ANIMATION_DO"] = "Animation Do";
    Studio["ANKAMA_ANIMATIONS"] = "Ankama Animations";
    Studio["ANPRO"] = "Anpro";
    Studio["APPP"] = "APPP";
    Studio["AQUA_ARIS"] = "AQUA ARIS";
    Studio["ARECT"] = "ARECT";
    Studio["ARK"] = "Ark";
    Studio["ARMS"] = "Arms";
    Studio["ARTLAND"] = "Artland";
    Studio["ARTMIC"] = "Artmic";
    Studio["ARVO_ANIMATION"] = "Arvo Animation";
    Studio["ASAHI_PRODUCTION"] = "Asahi Production";
    Studio["ASATSU_DK"] = "Asatsu DK";
    Studio["ASCENSION"] = "Ascension";
    Studio["ASHI_PRODUCTION"] = "Ashi Production";
    Studio["ASK_ANIMATION_STUDIO"] = "ASK Animation Studio";
    Studio["ASREAD"] = "Asread";
    Studio["ATELIERPONTDARC"] = "AtelierPontdarc";
    Studio["AVACO_CREATIVE_STUDIOS"] = "Avaco Creative Studios";
    Studio["AXSIZ"] = "AXsiZ";
    Studio["B_CMAY_PICTURES"] = "B.CMAY PICTURES";
    Studio["B_T"] = "B&T";
    Studio["BAKKEN_RECORD"] = "Bakken Record";
    Studio["BANDAI_NAMCO_PICTURES"] = "Bandai Namco Pictures";
    Studio["BARNUM_STUDIO"] = "Barnum Studio";
    Studio["BEE_MEDIA"] = "Bee Media";
    Studio["BEE_TRAIN"] = "Bee Train";
    Studio["BESTACK"] = "BeSTACK";
    Studio["BIBURY_ANIMATION_CG"] = "Bibury Animation CG";
    Studio["BIBURY_ANIMATION_STUDIOS"] = "Bibury Animation Studios";
    Studio["BIGFIREBIRD_ANIMATION"] = "BigFireBird Animation";
    Studio["BLADE"] = "Blade";
    Studio["BLOOMZ"] = "BloomZ";
    Studio["BONES"] = "Bones";
    Studio["BOOKONG_CULTURE"] = "BooKong Culture";
    Studio["BOUNCY"] = "Bouncy";
    Studio["BRAINS_BASE"] = "Brain's Base";
    Studio["BRIDGE"] = "Bridge";
    Studio["BRIO_ANIMATION"] = "Brio Animation";
    Studio["BUEMON"] = "Buemon";
    Studio["BUG_FILMS"] = "BUG FILMS";
    Studio["C_STATION"] = "C-Station";
    Studio["C2C"] = "C2C";
    Studio["CG_YEAR"] = "CG Year";
    Studio["CGCG_STUDIO"] = "CGCG Studio";
    Studio["CHAOS_PROJECT"] = "Chaos Project";
    Studio["CHENGDU_COCO_CARTOON"] = "Chengdu Coco Cartoon";
    Studio["CHILDRENS_PLAYGROUND_ENTERTAINMENT"] = "Children's Playground Entertainment";
    Studio["CLAP"] = "CLAP";
    Studio["CLOUD_HEARTS"] = "Cloud Hearts";
    Studio["CLOVERWORKS"] = "CloverWorks";
    Studio["CMC_MEDIA"] = "CMC Media";
    Studio["COCKTAIL_MEDIA"] = "Cocktail Media";
    Studio["COLORED_PENCIL_ANIMATION_DESIGN"] = "Colored-Pencil Animation Design";
    Studio["COMIX_WAVE_FILMS"] = "CoMix Wave Films";
    Studio["COMPTOWN"] = "CompTown";
    Studio["CONNECT"] = "Connect";
    Studio["CRAFTAR_STUDIOS"] = "Craftar Studios";
    Studio["CREATORS_IN_PACK"] = "Creators in Pack";
    Studio["CYGAMESPICTURES"] = "CygamesPictures";
    Studio["DANDELION_ANIMATION_STUDIO"] = "DandeLion Animation Studio";
    Studio["DAUME"] = "Daume";
    Studio["DAVID_PRODUCTION"] = "David Production";
    Studio["DIGITAL_NETWORK_ANIMATION"] = "Digital Network Animation";
    Studio["DIOMEDEA"] = "Diomedea";
    Studio["DJINN_POWER"] = "Djinn Power";
    Studio["DLE"] = "DLE";
    Studio["DMM_PICTURES"] = "DMM pictures";
    Studio["DMM_FUTUREWORKS"] = "DMM.futureworks";
    Studio["DOGA_KOBO"] = "Doga Kobo";
    Studio["DOMERICA"] = "domerica";
    Studio["DONGWOO_A_E"] = "Dongwoo A&E";
    Studio["DR_MOVIE"] = "DR Movie";
    Studio["DRAWIZ"] = "DRAWIZ";
    Studio["DRIVE"] = "Drive";
    Studio["DROP"] = "drop";
    Studio["DWANGO"] = "Dwango";
    Studio["DYNAMO_PICTURES"] = "Dynamo Pictures";
    Studio["E_G_FILMS"] = "E&G Films";
    Studio["E_H_PRODUCTION"] = "E&H Production";
    Studio["EAST_FISH_STUDIO"] = "East Fish Studio";
    Studio["EGG_FIRM"] = "Egg Firm";
    Studio["EIKEN"] = "Eiken";
    Studio["EKACHI_EPILKA"] = "EKACHI EPILKA";
    Studio["ELIAS"] = "Elias";
    Studio["EMON"] = "Emon";
    Studio["EMT_SQUARED"] = "EMT Squared";
    Studio["ENCOURAGE_FILMS"] = "Encourage Films";
    Studio["ENGI"] = "ENGI";
    Studio["ENISHIYA"] = "Enishiya";
    Studio["EOTA"] = "EOTA";
    Studio["ETHER_KITTEN"] = "Ether Kitten";
    Studio["EVG"] = "evg";
    Studio["EZOLA"] = "Ez\u03CCla";
    Studio["FANWORKS"] = "Fanworks";
    Studio["FEEL"] = "feel.";
    Studio["FELIX_FILM"] = "Felix Film";
    Studio["FIFTH_AVENUE"] = "Fifth Avenue";
    Studio["FLAGSHIP_LINE"] = "FLAGSHIP LINE";
    Studio["FLAT_STUDIO"] = "Flat Studio";
    Studio["FREDERATOR_STUDIOS"] = "Frederator Studios";
    Studio["FRONT_LINE"] = "Front Line";
    Studio["FRONTIER_WORKS"] = "Frontier Works";
    Studio["FUGAKU"] = "Fugaku";
    Studio["FUJI_TV"] = "Fuji TV";
    Studio["G_ANGLE"] = "G-angle";
    Studio["G_G_ENTERTAINMENT"] = "G&G Entertainment";
    Studio["GAINA"] = "Gaina";
    Studio["GAINAX"] = "Gainax";
    Studio["GAINAX_KYOTO"] = "Gainax Kyoto";
    Studio["GALLOP"] = "Gallop";
    Studio["GARDEN_CULTURE"] = "Garden Culture";
    Studio["GATHERING"] = "Gathering";
    Studio["GEEK_TOYS"] = "GEEK TOYS";
    Studio["GEKKOU"] = "Gekkou";
    Studio["GEMBA"] = "GEMBA";
    Studio["GENO_STUDIO"] = "Geno Studio";
    Studio["GIFTANIMATION"] = "GIFTanimation";
    Studio["GIGA_PRODUCTION"] = "Giga Production";
    Studio["GINGA_YA"] = "Ginga Ya";
    Studio["GOHANDS"] = "GoHands";
    Studio["GONZO"] = "Gonzo";
    Studio["GOSAY_STUDIO"] = "Gosay Studio";
    Studio["GRAPHINICA"] = "Graphinica";
    Studio["GRAVITY_WELL"] = "Gravity Well";
    Studio["GREEN_MONSTER_TEAM"] = "Green Monster Team";
    Studio["GRIZZLY"] = "GRIZZLY";
    Studio["GROUP_TAC"] = "Group TAC";
    Studio["GUTON_ANIMATION_STUDIO"] = "Guton Animation Studio";
    Studio["HAL_FILM_MAKER"] = "Hal Film Maker";
    Studio["HAOLINERS_ANIMATION_LEAGUE"] = "Haoliners Animation League";
    Studio["HAYABUSA_FILM"] = "Hayabusa Film";
    Studio["HMCH"] = "HMCH";
    Studio["HOODS_DRIFTERS_STUDIO"] = "Hoods Drifters Studio";
    Studio["HOODS_ENTERTAINMENT"] = "Hoods Entertainment";
    Studio["HORNETS"] = "HORNETS";
    Studio["HOTLINE"] = "Hotline";
    Studio["HOTZIPANG"] = "HOTZIPANG";
    Studio["HUAMEI_ANIMATION"] = "HuaMei Animation";
    Studio["ILCA"] = "ILCA";
    Studio["IMAGICA_LAB"] = "Imagica Lab.";
    Studio["IMAGIN"] = "Imagin";
    Studio["IMAGINEER"] = "Imagineer";
    Studio["INDIVISION"] = "Indivision";
    Studio["ISSEN"] = "Issen";
    Studio["IXTL"] = "ixtl";
    Studio["J_C_STAFF"] = "J.C.Staff";
    Studio["JAPAN_TAPS"] = "Japan Taps";
    Studio["JAPAN_VISTEC"] = "Japan Vistec";
    Studio["JINNIS_ANIMATION_STUDIOS"] = "Jinnis Animation Studios";
    Studio["JUMONDO"] = "Jumondo";
    Studio["KACHIDOKI_STUDIO"] = "Kachidoki Studio";
    Studio["KACHIGARASU"] = "Kachigarasu";
    Studio["KAMIKAZE_DOUGA"] = "Kamikaze Douga";
    Studio["KARAKU"] = "Karaku";
    Studio["KAZAMI_GAKUEN_KOUSHIKI_DOUGA_BU"] = "Kazami Gakuen Koushiki Douga-bu";
    Studio["KHARA"] = "Khara";
    Studio["KIGUMI"] = "Kigumi";
    Studio["KINEMA_CITRUS"] = "Kinema Citrus";
    Studio["KINO_PRODUCTION"] = "Kino Production";
    Studio["KJJ_ANIMATION"] = "KJJ Animation";
    Studio["KOKUSAI_EIGASHA"] = "Kokusai Eigasha";
    Studio["KUNGFUFROG_ANIMATION"] = "Kungfufrog Animation";
    Studio["KYOTO_ANIMATION"] = "Kyoto Animation";
    Studio["KYOTOMA"] = "Kyotoma";
    Studio["LANDQ_STUDIOS"] = "LandQ studios";
    Studio["LAPIN_TRACK"] = "Lapin Track";
    Studio["LARX_ENTERTAINMENT"] = "Larx Entertainment";
    Studio["LAY_DUCE"] = "Lay-duce";
    Studio["LERCHE"] = "Lerche";
    Studio["LESPRIT"] = "Lesprit";
    Studio["LIBER"] = "Liber";
    Studio["LICO"] = "LICO";
    Studio["LIDE"] = "Lide";
    Studio["LIDENFILMS"] = "LIDENFILMS";
    Studio["LIDENFILMS_KYOTO_STUDIO"] = "LIDENFILMS Kyoto Studio";
    Studio["LIFE_WORK"] = "Life Work";
    Studio["LIGHT_CHASER_ANIMATION_STUDIOS"] = "Light Chaser Animation Studios";
    Studio["LILIX"] = "Lilix";
    Studio["LINGSANWU_ANIMATION"] = "Lingsanwu Animation";
    Studio["LIVE2D_CREATIVE_STUDIO"] = "Live2D Creative Studio";
    Studio["LMD"] = "LMD";
    Studio["M_S_C"] = "M.S.C";
    Studio["MADHOUSE"] = "Madhouse";
    Studio["MAGIA_DORAGLIER"] = "Magia Doraglier";
    Studio["MAGIC_BUS"] = "Magic Bus";
    Studio["MAHO_FILM"] = "Maho Film";
    Studio["MAKARIA"] = "Makaria";
    Studio["MANAA_ANIMATION"] = "Manaa Animation";
    Studio["MANGLOBE"] = "Manglobe";
    Studio["MAPPA"] = "MAPPA";
    Studio["MARVY_JACK"] = "Marvy Jack";
    Studio["MARZA_ANIMATION_PLANET"] = "Marza Animation Planet";
    Studio["MASTER_LIGHTS"] = "MASTER LIGHTS";
    Studio["MIHOYOANIME"] = "miHoYoAnime";
    Studio["MILI_PICTURES"] = "Mili Pictures";
    Studio["MILLEPENSEE"] = "Millepensee";
    Studio["MINAMI_MACHI_BUGYOUSHO"] = "Minami Machi Bugyousho";
    Studio["MIPPEI_EIGEKI_KIRYUUKAN"] = "Mippei Eigeki Kiryuukan";
    Studio["MONOFILMO"] = "monofilmo";
    Studio["MUA_FILM"] = "Mua Film";
    Studio["MUSHI_PRODUCTION"] = "Mushi Production";
    Studio["NAKAMURA_PRODUCTION"] = "Nakamura Production";
    Studio["NAMU_ANIMATION"] = "Namu Animation";
    Studio["NAZ"] = "NAZ";
    Studio["NETFLIX_ANIMATION"] = "Netflix Animation";
    Studio["NEXUS"] = "Nexus";
    Studio["NICE_BOAT_ANIMATION"] = "Nice Boat Animation";
    Studio["NIHON_AD_SYSTEMS"] = "Nihon Ad Systems";
    Studio["NIPPON_ANIMATION"] = "Nippon Animation";
    Studio["NOMAD"] = "Nomad";
    Studio["NUT"] = "Nut";
    Studio["OFFICE_DCI"] = "Office DCI";
    Studio["OFFICE_NOBU"] = "Office Nobu";
    Studio["OKURUTO_NOBORU"] = "Okuruto Noboru";
    Studio["OLM"] = "OLM";
    Studio["OLM_DIGITAL"] = "OLM Digital";
    Studio["ORANGE"] = "Orange";
    Studio["ORDET"] = "Ordet";
    Studio["OXYBOT"] = "Oxybot";
    Studio["OZ"] = "Oz";
    Studio["P_A_WORKS"] = "P.A. Works";
    Studio["P_I_C_S"] = "P.I.C.S.";
    Studio["PALM_STUDIO"] = "Palm Studio";
    Studio["PANDA_TOWER_STUDIO"] = "Panda Tower Studio";
    Studio["PAPER_PLANE_ANIMATION_STUDIO_ANIME"] = "Paper Plane Animation Studio Anime";
    Studio["PASSIONE"] = "Passione";
    Studio["PASTEL"] = "Pastel";
    Studio["PB_ANIMATION_CO_LIMITED"] = "Pb Animation Co. Ltd.";
    Studio["PHANTOM"] = "PHANTOM";
    Studio["PICTURE_MAGIC"] = "Picture Magic";
    Studio["PIERROT_FILMS"] = "Pierrot Films";
    Studio["PIERROT_PLUS"] = "Pierrot Plus";
    Studio["PINE_JAM"] = "Pine Jam";
    Studio["PLANET"] = "Planet";
    Studio["PLATINUM_VISION"] = "Platinum Vision";
    Studio["PLUM"] = "Plum";
    Studio["POLYGON_PICTURES"] = "Polygon Pictures";
    Studio["POWERHOUSE_ANIMATION_STUDIOS"] = "Powerhouse Animation Studios";
    Studio["PRA"] = "PRA";
    Studio["PRIMASTEA"] = "Primastea";
    Studio["PRIMETIME"] = "PrimeTime";
    Studio["PRODUCTION_H"] = "Production +h.";
    Studio["PRODUCTION_DOA"] = "production doA";
    Studio["PRODUCTION_GOODBOOK"] = "Production GoodBook";
    Studio["PRODUCTION_I_G"] = "Production I.G";
    Studio["PRODUCTION_IMS"] = "Production IMS";
    Studio["PRODUCTION_REED"] = "Production Reed";
    Studio["PROJECT_51_PRODUCTIONS"] = "Project 51 Productions";
    Studio["PROJECT_NO_9"] = "Project No.9";
    Studio["PUBLIC_AND_BASIC"] = "Public & Basic";
    Studio["PURPLE_COW_STUDIO_JAPAN"] = "Purple Cow Studio Japan";
    Studio["QUAD"] = "Quad";
    Studio["QUALIA_ANIMATION"] = "Qualia Animation";
    Studio["QUBIC_PICTURES"] = "Qubic Pictures";
    Studio["RABBIT_GATE"] = "Rabbit Gate";
    Studio["RADIX"] = "Radix";
    Studio["RED_DOG_CULTURE_HOUSE"] = "Red Dog Culture House";
    Studio["REMIC"] = "Remic";
    Studio["REVOROOT"] = "Revoroot";
    Studio["RISING_FORCE"] = "Rising Force";
    Studio["ROCKWELL_EYES"] = "Rockwell Eyes";
    Studio["ROLL2"] = "ROLL2";
    Studio["RUO_HONG_CULTURE"] = "Ruo Hong Culture";
    Studio["SABER_WORKS"] = "Saber Works";
    Studio["SAETTA"] = "Saetta";
    Studio["SAMSARA_ANIMATION_STUDIO"] = "Samsara Animation Studio";
    Studio["SANZIGEN"] = "SANZIGEN";
    Studio["SATELIGHT"] = "Satelight";
    Studio["SCIENCE_SARU"] = "Science SARU";
    Studio["SCOOTER_FILMS"] = "Scooter Films";
    Studio["SEVEN"] = "Seven";
    Studio["SEVEN_ARCS"] = "Seven Arcs";
    Studio["SEVEN_ARCS_PICTURES"] = "Seven Arcs Pictures";
    Studio["SEVEN_STONE_ENTERTAINMENT"] = "Seven Stone Entertainment";
    Studio["SHAFT"] = "Shaft";
    Studio["SHANGHAI_FOCH_FILM_CULTURE_INVESTMENT"] = "Shanghai Foch Film Culture Investment";
    Studio["SHANKAR_ANIMATION"] = "Shankar Animation";
    Studio["SHAREFUN_STUDIO"] = "Sharefun Studio";
    Studio["SHIN_EI_ANIMATION"] = "Shin-Ei Animation";
    Studio["SHINKUUKAN"] = "Shinkuukan";
    Studio["SHIROGUMI"] = "Shirogumi";
    Studio["SHUKA"] = "Shuka";
    Studio["SIGNAL_MD"] = "Signal.MD";
    Studio["SILVER"] = "Silver";
    Studio["SILVER_LINK"] = "Silver Link.";
    Studio["SOLA_DIGITAL_ARTS"] = "Sola Digital Arts";
    Studio["SOTSU"] = "Sotsu";
    Studio["SPACE_NEKO_COMPANY"] = "Space Neko Company";
    Studio["SPARKLY_KEY_ANIMATION_STUDIO"] = "Sparkly Key Animation Studio";
    Studio["SPRITE_ANIMATION_STUDIOS"] = "Sprite Animation Studios";
    Studio["STAPLE_ENTERTAINMENT"] = "Staple Entertainment";
    Studio["STEVE_N_STEVEN"] = "Steve N'Steven";
    Studio["STINGRAY"] = "Stingray";
    Studio["STUDIO_3HZ"] = "Studio 3Hz";
    Studio["STUDIO_4_C"] = "Studio 4\u00B0C";
    Studio["STUDIO_A_CAT"] = "Studio A-CAT";
    Studio["STUDIO_ANIMAL"] = "Studio Animal";
    Studio["STUDIO_BIND"] = "Studio Bind";
    Studio["STUDIO_BLANC"] = "Studio Blanc";
    Studio["STUDIO_CHIZU"] = "Studio Chizu";
    Studio["STUDIO_COLORIDO"] = "Studio Colorido";
    Studio["STUDIO_COMET"] = "Studio Comet";
    Studio["STUDIO_DAISY"] = "Studio Daisy";
    Studio["STUDIO_DEEN"] = "Studio Deen";
    Studio["STUDIO_DURIAN"] = "Studio DURIAN";
    Studio["STUDIO_ELLE"] = "Studio elle";
    Studio["STUDIO_FANTASIA"] = "Studio Fantasia";
    Studio["STUDIO_FLAD"] = "Studio Flad";
    Studio["STUDIO_FLAG"] = "Studio Flag";
    Studio["STUDIO_GHIBLI"] = "Studio Ghibli";
    Studio["STUDIO_GOKUMI"] = "Studio Gokumi";
    Studio["STUDIO_HIBARI"] = "Studio Hibari";
    Studio["STUDIO_HOKIBOSHI"] = "Studio Hokiboshi";
    Studio["STUDIO_JEMI"] = "Studio Jemi";
    Studio["STUDIO_JUNIO"] = "Studio Junio";
    Studio["STUDIO_KAFKA"] = "Studio Kafka";
    Studio["STUDIO_KAI"] = "Studio Kai";
    Studio["STUDIO_KIKAN"] = "Studio Kikan";
    Studio["STUDIO_LAN"] = "Studio LAN";
    Studio["STUDIO_LINGS"] = "Studio Lings";
    Studio["STUDIO_LIVE"] = "Studio Live";
    Studio["STUDIO_M2"] = "Studio M2";
    Studio["STUDIO_MASSKET"] = "Studio Massket";
    Studio["STUDIO_MATRIX"] = "Studio Matrix";
    Studio["STUDIO_MAUSU"] = "Studio Mausu";
    Studio["STUDIO_MIR"] = "Studio Mir";
    Studio["STUDIO_MOE"] = "Studio Moe";
    Studio["STUDIO_MOTHER"] = "studio MOTHER";
    Studio["STUDIO_N"] = "Studio N";
    Studio["STUDIO_NANAHOSHI"] = "Studio Nanahoshi";
    Studio["STUDIO_PALETTE"] = "Studio Palette";
    Studio["STUDIO_PIERROT"] = "Studio Pierrot";
    Studio["STUDIO_POLON"] = "Studio Polon";
    Studio["STUDIO_PONOC"] = "Studio Ponoc";
    Studio["STUDIO_PPURI"] = "Studio Ppuri";
    Studio["STUDIO_PUYUKAI"] = "Studio PuYUKAI";
    Studio["STUDIO_RIKKA"] = "Studio Rikka";
    Studio["STUDIO_SIGNPOST"] = "Studio Signpost";
    Studio["STUDIO_VOLN"] = "Studio VOLN";
    Studio["STUDIO_CUCURI"] = "Studio! Cucuri";
    Studio["SUBLIMATION"] = "Sublimation";
    Studio["SUCCESS_CORPORATION"] = "Success Corp.";
    Studio["SUISEISHA"] = "Suiseisha";
    Studio["SUNRISE"] = "Sunrise";
    Studio["SUNRISE_BEYOND"] = "Sunrise Beyond";
    Studio["SYNERGYSP"] = "SynergySP";
    Studio["TAMA_PRODUCTION"] = "Tama Production";
    Studio["TATSUNOKO_PRODUCTION"] = "Tatsunoko Production";
    Studio["TEAM_ONEONE"] = "Team OneOne";
    Studio["TEAM_TILLDAWN"] = "Team TillDawn";
    Studio["TEAM_YAMAHITSUJI"] = "Team Yamahitsuji";
    Studio["TEAM_YOKKYUFUMAN"] = "Team YokkyuFuman";
    Studio["TEAMKG"] = "teamKG";
    Studio["TEAR_STUDIO"] = "Tear Studio";
    Studio["TEDDY"] = "Teddy";
    Studio["TELE_CARTOON_JAPAN"] = "Tele-Cartoon Japan";
    Studio["TELECOM_ANIMATION_FILM"] = "Telecom Animation Film";
    Studio["TENCENT_ANIMATION_AND_COMICS"] = "Tencent Animation & Comics";
    Studio["TENCENT_PENGUIN_PICTURES"] = "Tencent Penguin Pictures";
    Studio["TEZUKA_PRODUCTIONS"] = "Tezuka Productions";
    Studio["THE_ANSWER_STUDIO"] = "The Answer Studio";
    Studio["THINK_CORPORATION"] = "Think Corporation";
    Studio["THUNDRAY"] = "Thundray";
    Studio["THYMOS_MEDIA"] = "Thymos Media";
    Studio["TMS_ENTERTAINMENT"] = "TMS Entertainment";
    Studio["TNK"] = "TNK";
    Studio["TOEI_ANIMATION"] = "Toei Animation";
    Studio["TOHO_ANIMATION"] = "TOHO animation";
    Studio["TOHO_INTERACTIVE_ANIMATION"] = "Toho Interactive Animation";
    Studio["TOKYO_KIDS"] = "Tokyo Kids";
    Studio["TOKYO_MOVIE_SHINSHA"] = "Tokyo Movie Shinsha";
    Studio["TOMASON"] = "Tomason";
    Studio["TOMOVIES"] = "Tomovies";
    Studio["TOPCRAFT"] = "Topcraft";
    Studio["TRANS_ARTS"] = "Trans Arts";
    Studio["TRI_SLASH"] = "Tri-Slash";
    Studio["TRIANGLE_STAFF"] = "Triangle Staff";
    Studio["TRIF_STUDIO"] = "TriF Studio";
    Studio["TRIGGER"] = "Trigger";
    Studio["TRINET_ENTERTAINMENT"] = "Trinet Entertainment";
    Studio["TROYCA"] = "TROYCA";
    Studio["TSUCHIDA_PRODUCTIONS"] = "Tsuchida Productions";
    Studio["TSUMUGI_AKITA_ANIMATION_LAB"] = "Tsumugi Akita Animation Lab";
    Studio["TWILIGHT_STUDIO"] = "Twilight Studio";
    Studio["TWIN_ENGINE"] = "Twin Engine";
    Studio["TYO_ANIMATIONS"] = "TYO Animations";
    Studio["TYPHOON_GRAPHICS"] = "Typhoon Graphics";
    Studio["UFOTABLE"] = "ufotable";
    Studio["UNEND"] = "Unend";
    Studio["URBAN_PRODUCT"] = "Urban Product";
    Studio["UWAN_PICTURES"] = "UWAN Pictures";
    Studio["VEGA_ENTERTAINMENT"] = "Vega Entertainment";
    Studio["VENET"] = "Venet";
    Studio["VISUAL_FLIGHT"] = "Visual Flight";
    Studio["VOIL"] = "Voil";
    Studio["W_TOON_STUDIO"] = "W-Toon Studio";
    Studio["WAO_WORLD"] = "WAO World";
    Studio["WAWAYU_ANIMATION"] = "Wawayu Animation";
    Studio["WHITE_FOX"] = "White Fox";
    Studio["WINDY_STUDIO"] = "Windy Studio";
    Studio["WIT_STUDIO"] = "Wit Studio";
    Studio["WOLFSBANE"] = "Wolfsbane";
    Studio["XEBEC"] = "Xebec";
    Studio["XFLAG"] = "XFLAG";
    Studio["XIAOYING_FEIYANG_PICTURES"] = "Xiaoying Feiyang Pictures";
    Studio["YAOYOROZU"] = "Yaoyorozu";
    Studio["YOKOHAMA_ANIMATION_LAB"] = "Yokohama Animation Lab";
    Studio["YOSTAR_PICTURES"] = "Yostar Pictures";
    Studio["YUMETA_COMPANY"] = "Yumeta Company";
    Studio["ZERO_G"] = "Zero-G";
    Studio["ZERO_G_ROOM"] = "Zero-G Room";
    Studio["ZEXCS"] = "Zexcs";
})(Studio || (exports.Studio = Studio = {}));
