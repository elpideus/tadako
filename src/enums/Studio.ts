// TODO: Complete descriptions for all the studios

/**
 * Enum representing different animation studios.
 * The keys are internal identifiers, and the values are the corresponding names of the animation studios.
 *
 * This enum is useful for categorizing and referencing animation studios in a structured manner.
 * Each entry represents a specific animation studio, providing an easy way to access studio names
 * throughout the library.
 */
export enum Studio {

    UNKNOWN = "Sconosciuto",

    /**
     * Shiyong Wang founded [2:10 Animation](https://en.2-10.cn/) as a small studio in 2007, Wuhan, China. After
     * dedicating to Chinese animation for 16 years, the company now has more than 500 employees offering a package
     * service of cartoon IP production and operation. Their services include 6 complete and independent industrial
     * chain modules including animation project planning, script creation, animation production, R&D, publicity and
     * distribution, and commercial operation. They maintain strategic cooperation with leading companies of film and
     * television, video, novel, game, and consumer goods industries, etc.
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
    TWOTEN_ANIMATION = "2:10 AM Animation",

    /**
     * We couldn't find much about this studio. We know they have worked on titles like "Megalobox", "Sweetness &
     * Lightning", "The Pilot's Love Song" and "Actually, I am...".
     *
     * The studio seems to have changed their name to TMS/3xCube. They were referred to as 東京ムービー/3xCube in the past.
     *
     * @link [TMS Website](https://tmsanime.com/)
     * @link [Wikipedia](https://en.wikipedia.org/wiki/TMS_Entertainment)
     */
    TRIPLEXCUBE = "3xCube",

    /**
     * Sadly we weren't able to find official information about this studio.
     *
     * According to [AnimeNewsNetwork](https://www.animenewsnetwork.com), in
     * [this article](https://www.animenewsnetwork.com/encyclopedia/company.php?id=21406), the company has worked on
     * a number of titles, some of which are pretty well known, namely "Attack on Titan Final Season THE FINAL CHAPTERS
     * (TV)", "Attack on Titan The Final Season Part 2 (TV)", "Chainsaw Man (TV)", "Josee, The Tiger and the Fish
     * (movie)", "Psycho-Pass 3: First Inspector (movie)" and "Trigun Stampede (TV)".
     */
    FIVE_INCORPORATED = "5 Inc.",

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
     * ---
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
    EIGHT_BIT = "8bit",

    /**
     * According to [Wikipedia](https://wikipedia.org) in [this article](https://en.wikipedia.org/wiki/A-1_Pictures):
     *
     * A-1 Pictures Inc. (Japanese: 株式会社エー・ワン・ピクチャーズ, Hepburn: Kabushiki-gaisha Ē Wan Pikuchāzu) is a Japanese
     * animation studio founded on May 9, 2005, by Mikihiro Iwata and is a subsidiary of Aniplex, a Sony Music
     * Entertainment Japan company. The studio is headquartered in Suginami, Tokyo, Japan.
     *
     * A-1 Pictures was established with the aim of creating a flexible production system to produce high-quality
     * animation. It has since grown into one of the leading animation studios in Japan, producing a wide variety of
     * works ranging from television series to feature films.
     *
     * Notable works include "Sword Art Online," "Anohana: The Flower We Saw That Day," "Your Lie in April," and "Blue
     * Exorcist." The studio is also known for its involvement in collaborative projects and partnerships with other
     * production companies and creators.
     *
     * In 2018, A-1 Pictures restructured its operations, forming CloverWorks as a subsidiary studio to focus on
     * specific projects, while A-1 Pictures continued to handle major productions.
     *
     * ---
     *
     * According to [MyAnimeList](https://myanimelist.net/)
     * on [this page](https://myanimelist.net/anime/producer/56/A-1_Pictures):
     *
     * A-1 Pictures (A-1 Pictures Inc.) is a Japanese animation studio in Suginami, Tokyo. Founded by former Sunrise
     * producer Mikihiro Iwata in 2005, it was established as a subsidiary of Aniplex. The studio was meant to oversee
     * Aniplex's family-oriented series before it evolved into producing various independent anime projects.
     *
     * A-1 Pictures has since released popular television anime such as Fairy Tail, Sword Art Online, Nanatsu no Taizai
     * (The Seven Deadly Sins), and Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen (Kaguya-Sama: Love is
     * War).
     *
     * @link [Official Website](https://a1p.jp/)
     */
    A1_PICTURES= "A-1 Pictures",

    /**
     * We didn't find much about this studio.
     *
     * According to [this Japanese Wikipedia Article](https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%BC%E3%83%BB%E3%83%A9%E3%82%A4%E3%83%B3)
     * it seems to have collaborated in the production of popular anime series like "kiss×sis", "Inazuma Eleven GO
     * Chrono Stone", "Inazuma Eleven GO Galaxy", "Jojo's Bizarre Adventure Stardust Crusaders", "Seven deadly sins", "
     * Macross Δ" and "Fate/Apocrypha".
     *
     * ---
     *
     * At the moment of writing this short description the website seems to be unavailable, reporting a Forbidden error,
     * specifying "You don't have permission to access this resource".
     *
     * @link [Official Website](http://a-line.tokyo/)
     *
     */
    A_LINE = "A-Line",

    /**
     * Unfortunately we couldn't find any info at all regarding this studio, but just some of their works. They seem to
     * have at least collaborated with other studios in the making of the following 7 titles, according to [this
     * MyAnimeList page](https://myanimelist.net/anime/producer/1257/A-Real):
     * - Kenka Banchou Otome: Girl Beats Boys
     * - Dekoboko Majo no Oyako Jijou (The Family Circumstances of the Irregular Witch)
     * - Iya na Kao sare nagara Opantsu Misete Moraitai 2 (I Want You To Show Me Your Panties With a Disgusted Face 2)
     * - Urawa no Usagi-chan
     * - Musashino!
     * - Urawa no Usagi-chan: Natsu no Hi to, Bushitsu to, Tomodachi to
     * - Hana-Doll*: Reinterpretation of Flowering
     */
    A_REAL = "A-Real",

    /**
     * According to [Wikipedia](https://en.wikipedia.org) in [this article](https://en.wikipedia.org/wiki/A.C.G.T):
     *
     * A.C.G.T Inc. (Japanese: 株式会社エー・シー・ジー・ティー, Hepburn: Kabushiki-gaisha Ē shī jī tī, stylized as A・C・G・T)
     * is a Japanese animation studio established on December 19, 2000, by former Triangle Staff members in Suginami,
     * Tokyo. It has been involved in the development of many series, predominantly contributing to other studios and
     * adapting works based on light novels and manga. It is a subsidiary of OB Planning, which handles executive
     * production on many of its series. A.C.G.T also works regularly with production company Genco, which at times
     * provides executive production while A.C.G.T completes animation production. In 2006, the studio's headquarters
     * was moved from Suginami to Nerima.
     *
     * They have worked on titles like "Initial D Fourth Stage" and "Dies Irae".
     *
     * @link [Official Website](http://acgt.co.jp/)
     */
    A_C_G_T = "A.C.G.T.",

    /**
     * According to [Wikipedia](https://en.wikipedia.org) in [this article](https://en.wikipedia.org/wiki/A24):
     *
     * A24 Films LLC, commonly referred to as A24, is an American independent entertainment company that specializes in
     * film and television production, as well as film distribution. The company is based in Manhattan.
     *
     * The company was founded in 2012 by Daniel Katz, David Fenkel, and John Hodges. Prior to A24, all had worked
     * extensively in film and production before leaving their positions to co-found the company, originally A24 Films,
     * which specialized in film distribution. Starting off in 2013 with A Glimpse Inside the Mind of Charles Swan III,
     * the company's growth started with the release of Spring Breakers later that year. In 2014, A24 picked up the U.S.
     * rights to Ex Machina and Room in 2015, before obtaining worldwide rights to The Witch, which was released
     * theatrically in 2015. They entered into deals with Amazon Prime Video, and DirecTV Cinema in late 2013, with some
     * films distributed through them, and the name was changed to just A24 in 2016. In 2022, A24 produced the film
     * Everything Everywhere All at Once, which won the Academy Award for Best Picture and six more Oscars; the film has
     * also received acclaim from both audiences and critics, it is their first film to reach $100
     * million at the box office.
     *
     * A24's television division has produced numerous programs, including At Home with Amy Sedaris (2017–2020), Beef
     * (2023), The Carmichael Show (2015–2017), Euphoria (2019–present), Hazbin Hotel (2024–present), I'm Sorry
     * (2017–2019), Irma Vep (2022), Mo (2022–present), Mr. Corman (2021), Ramy (2019–2022), and Ziwe (2021–2022).
     *
     * The company has also frequently worked with artistically minded writer-directors, including Ari Aster, Robert
     * Eggers, Darren Aronofsky, Sean Baker, the Daniels, Danny and Michael Philippou, Alex Garland, Scott Beck, Bryan
     * Woods, Rose Glass, Celine Song, Joanna Hogg, Yorgos Lanthimos, Sean Durkin, Kristoffer Borgli, David Lowery,
     * Halina Reijn, Mike Mills, and the Safdie brothers.
     *
     * A24 has developed a reputation as a powerhouse in independent film with a passionate fanbase. Its projects have
     * also had a major influence on style in contemporary horror and arthouse films, among other areas. A24 is also
     * known for the originality and artistic style of films it produces, generally shunning the style of films produced
     * or released by the major film studios.
     *
     * @link [Official Website](https://a24films.com/)
     */
    A24 = "A24",

    /**
     * According to [Wikipedia](https://en.wikipedia.org)
     * in [this article](https://en.wikipedia.org/wiki/ABC_Animation):
     *
     * ABC Animation, Inc. is a Japanese animation planning, production and content company that serves as a subsidiary
     * of the Asahi Broadcasting Group Holdings Corporation. Based in Shinjuku, Tokyo, the company was formed as part of
     * a spin-off of ABC's animation co-production business into a separate company, as part of a major restructuring of
     * ABC's restructuring of its content production division. ABC Animation also owns animation studio Silver Link as
     * well as other companies such as Zero G Act and CGCG Studio. The company is responsible for the planning and
     * production of anime, including films and television series as well as content sales and licensing. Among these is
     * Toei Animation's long-running magical girl series Pretty Cure which has been airing since 2004. Since the shows
     * air on a daytime slot, all entries from 2016 onwards are co-produced jointly with ABC Television, which previously
     * solely handled co-production duties from the franchise's first entry in 2004. ABC-A began co-producing the series
     * since "Witchy Pretty Cure".
     *
     * ---
     *
     * This studio worked on really popular titles like "Koe no Katachi (A Silent Voice)", "Violet Evergarden", "Seishun
     * Buta Yarou wa Bunny Girl Senpai no Yume wo Minai (Rascal Does Not Dream of Bunny Girl Senpai)", "Darling in the
     * FranXX", "Kobayashi-san Chi no Maid Dragon (Miss Kobayashi's Dragon Maid)", "Kimi no Suizou wo Tabetai (I Want To
     * Eat Your Pancreas)", "Orange", "Itai no wa Iya nanode Bougyoryoku ni Kyokufuri Shitai to Omoimasu. (BOFURI: I
     * Don't Want to Get Hurt, so I'll Max Out My Defense.)", "Uzaki-chan wa Asobitai! (Uzaki-chan Wants to Hang Out!)"
     * and "Free! Dive to the Future".
     *
     * @link [Official Website](https://www.abc-anime.co.jp/)
     */
    ABC_ANIMATION = "ABC Animation",

    /**
     * According to [MyAnimeList](https://myanimelist.net/)
     * in [this article](https://myanimelist.net/anime/producer/2807/ABJ_COMPANY):
     *
     * ABJ COMPANY is an animation studio and webtoon agency.
     *
     * We weren't able to find any more information about this studio
     */
    ABJ_COMPANY = "ABJ COMPANY",

    /**
     * According to [Wikipedia](https://it.wikipedia.org)
     * in [this italian article](https://it.wikipedia.org/wiki/Acca_effe):
     *
     * Acca effe (株式会社 Acca effe, Kabushiki-gaisha Acca effe) is a Japanese animation studio founded on May 8, 2009,
     * and based in Nerima, Tokyo.
     *
     * The studio was founded on May 8, 2009, by Namatame Satoshi, one of the producers of "Godannar" and "Gun x Sword",
     * along with former employees of Studio AIC, the production company behind the aforementioned anime. The studio
     * primarily specializes in subcontracting work and frequently collaborates with TROYCA, a studio established by
     * former members of AIC Classic.
     *
     * In 2019, the studio co-produced the series "Strike Witches: 501st Joint Fighter Wing Take Off!" together with
     * Giga Production, marking its first experience as a primary producer.
     * In 2022, the company established Production CK.
     *
     * The studio is headquartered in Nerima, Tokyo.
     */
    ACCA_EFFE = "Acca effe",

    /**
     * According to [Wikipedia](https://it.wikipedia.org)
     * in [this article](https://en.wikipedia.org/wiki/Actas):
     *
     * Actas Inc. is a Japanese animation studio founded in 1998. It is currently a subsidiary of Bandai Namco
     * Filmworks, which in turn is a subsidiary to Bandai Namco Holdings.
     *
     * Actas was founded on July 6, 1998, by Hiroshi Katō and Jūtarō Ōba, who previously worked for Tatsunoko Production
     * and Ashi Productions.
     *
     * Following Katō's death in 2009, Shunpei Maruyama was named the new company president. The studio also had a
     * subsidiary animation studio Karaku, but Actas merged it with the main company in July 2017.
     *
     * In September 2017, Bandai Visual has announced that it had acquired Actas.
     *
     * In August 2023, it was announced that former president and animation producer Shunpei Maruyama had died.
     *
     * ---
     *
     * They have worked on popular anime like "Girls & Panzer" and "Tsue to Tsurugi no Wistoria".
     */
    ACTAS = "Actas",

    /**
     * According to [Wikipedia](https://it.wikipedia.org)
     * in [this article](https://en.wikipedia.org/wiki/Anime_International_Company):
     *
     * Anime International Company, Inc. (Japanese: 株式会社アニメインターナショナルカンパニー, Hepburn: Kabushiki-gaisha Anime
     * Intānashonaru Kanpanī), often abbreviated as AIC, is a Japanese animation studio founded on June 15, 1982 and
     * located in Nerima, Tokyo, Japan. On December 10, 2015, AIC RIGHTS Company, Inc. was established through acompany
     * split, in which AIC Rights received the transfer of some of the copyrights owned by Anime International Company.
     *
     * AIC had eight sub-studios within itself, named: AIC ASTA (2003, formerly: AIC A.S.T.A.), AIC Build (2010),
     * AIC Classic (2010), AIC Digital (1997), AIC Frontier (June 2012), AIC PLUS+ (2006), AIC Spirits (2003) and AIC
     * Takarazuka (2006).
     *
     * ---
     *
     * According to [MyAnimeList](https://myanimelist.net/)
     * on [this page](https://myanimelist.net/anime/producer/48/AIC):
     *
     * AIC (Anime International Company, Inc.) is a Japanese animation studio based in Nerima, Tokyo, Japan. Kazushi
     * Nomura and Toru Miura established AIC on July 15, 1982, with Nomura serving as the studio's president until
     * leaving to found Another Push Pin Planning (APPP) on June 22, 1984. Following Nomura's departure, Miura assumed
     * the role as the studio's president. As a result, the studio began producing works as a prime contractor, riding
     * on the late 1980s OVA boom. The studio later expanded into game production (AIC Spirits) and the publishing
     * business (AIC Club). In 2003, the studio shuttered AIC Spirits and AIC Club and reorganized itself into three
     * sub-studios; AIC A.S.T.A. (now AIC ASTA), AIC Digital, and AIC Spirits. In February 2008, ACA-managed investment
     * fund MCP Synergy acquired a 95% stake in the studio, and a new Anime International Company, Inc. was established
     * through an incorporation-type demerger in May of the same year. In September 2010, Oizumi Corporation made AIC
     * into a wholly-owned subsidiary of the company. In March of the following year, the studio became a wholly-owned
     * subsidiary of Aplix Corporation. In January 2014, Aplix IP Holdings (now Aplix Corporation) announced its exit
     * from its multimedia entertainment business, and transferred all of its shares in the studio to Toru Miura.
     * In August 2015, the studio's animation production department was disbanded. The same year in December, Miura
     * appointed Yasutaka Omura as the company's new representative director, and also transferred its classic IPs to
     * AIC RIGHTS (AIC RIGHTS Co., Ltd.) through a corporation-separation procedure. In January 2020, Miura reassumed
     * the representative director position from Omura.
     *
     * The studio had several sub-studios within itself; in 2013, they consisted of: AIC ASTA, AIC Build, AIC Classic,
     * AIC Digital, AIC PLUS+, and AIC Frontier. In addition, the studio also had a background art, CG, photography,
     * finishing, and editing departments, as well as a recording and editing studio AIC Eastside Studio.
     *
     * ---
     *
     * This studio has worked on some popular titles including (but not limited to) "Date a Live", "Ore no Imouto ga
     * Konnani Kawaii Wake ga Nai", "Maken-Ki!", "Strike Witches 2"
     */
    AIC = "AIC",

    /**
     * According to [Wikipedia](https://it.wikipedia.org)
     * in [this article](https://en.wikipedia.org/wiki/Anime_International_Company):
     *
     * Anime International Company, Inc. (Japanese: 株式会社アニメインターナショナルカンパニー, Hepburn: Kabushiki-gaisha Anime
     * Intānashonaru Kanpanī), often abbreviated as AIC, is a Japanese animation studio founded on June 15, 1982 and
     * located in Nerima, Tokyo, Japan. On December 10, 2015, AIC RIGHTS Company, Inc. was established through acompany
     * split, in which AIC Rights received the transfer of some of the copyrights owned by Anime International Company.
     *
     * AIC had eight sub-studios within itself, named: AIC ASTA (2003, formerly: AIC A.S.T.A.), AIC Build (2010),
     * AIC Classic (2010), AIC Digital (1997), AIC Frontier (June 2012), AIC PLUS+ (2006), AIC Spirits (2003) and AIC
     * Takarazuka (2006).
     *
     * ---
     *
     * According to [MyAnimeList](https://myanimelist.net/)
     * on [this page](https://myanimelist.net/anime/producer/48/AIC):
     *
     * AIC (Anime International Company, Inc.) is a Japanese animation studio based in Nerima, Tokyo, Japan. Kazushi
     * Nomura and Toru Miura established AIC on July 15, 1982, with Nomura serving as the studio's president until
     * leaving to found Another Push Pin Planning (APPP) on June 22, 1984. Following Nomura's departure, Miura assumed
     * the role as the studio's president. As a result, the studio began producing works as a prime contractor, riding
     * on the late 1980s OVA boom. The studio later expanded into game production (AIC Spirits) and the publishing
     * business (AIC Club). In 2003, the studio shuttered AIC Spirits and AIC Club and reorganized itself into three
     * sub-studios; AIC A.S.T.A. (now AIC ASTA), AIC Digital, and AIC Spirits. In February 2008, ACA-managed investment
     * fund MCP Synergy acquired a 95% stake in the studio, and a new Anime International Company, Inc. was established
     * through an incorporation-type demerger in May of the same year. In September 2010, Oizumi Corporation made AIC
     * into a wholly-owned subsidiary of the company. In March of the following year, the studio became a wholly-owned
     * subsidiary of Aplix Corporation. In January 2014, Aplix IP Holdings (now Aplix Corporation) announced its exit
     * from its multimedia entertainment business, and transferred all of its shares in the studio to Toru Miura.
     * In August 2015, the studio's animation production department was disbanded. The same year in December, Miura
     * appointed Yasutaka Omura as the company's new representative director, and also transferred its classic IPs to
     * AIC RIGHTS (AIC RIGHTS Co., Ltd.) through a corporation-separation procedure. In January 2020, Miura reassumed
     * the representative director position from Omura.
     *
     * The studio had several sub-studios within itself; in 2013, they consisted of: AIC ASTA, AIC Build, AIC Classic,
     * AIC Digital, AIC PLUS+, and AIC Frontier. In addition, the studio also had a background art, CG, photography,
     * finishing, and editing departments, as well as a recording and editing studio AIC Eastside Studio.
     *
     * ---
     *
     * This studio has worked on some popular titles including (but not limited to) "Date a Live", "Ore no Imouto ga
     * Konnani Kawaii Wake ga Nai", "Maken-Ki!", "Strike Witches 2"
     */
    AIC_A_S_T_A = "AIC A.S.T.A.",

    /**
     * According to [Wikipedia](https://it.wikipedia.org)
     * in [this article](https://en.wikipedia.org/wiki/Anime_International_Company):
     *
     * Anime International Company, Inc. (Japanese: 株式会社アニメインターナショナルカンパニー, Hepburn: Kabushiki-gaisha Anime
     * Intānashonaru Kanpanī), often abbreviated as AIC, is a Japanese animation studio founded on June 15, 1982 and
     * located in Nerima, Tokyo, Japan. On December 10, 2015, AIC RIGHTS Company, Inc. was established through acompany
     * split, in which AIC Rights received the transfer of some of the copyrights owned by Anime International Company.
     *
     * AIC had eight sub-studios within itself, named: AIC ASTA (2003, formerly: AIC A.S.T.A.), AIC Build (2010),
     * AIC Classic (2010), AIC Digital (1997), AIC Frontier (June 2012), AIC PLUS+ (2006), AIC Spirits (2003) and AIC
     * Takarazuka (2006).
     *
     * ---
     *
     * According to [MyAnimeList](https://myanimelist.net/)
     * on [this page](https://myanimelist.net/anime/producer/48/AIC):
     *
     * AIC (Anime International Company, Inc.) is a Japanese animation studio based in Nerima, Tokyo, Japan. Kazushi
     * Nomura and Toru Miura established AIC on July 15, 1982, with Nomura serving as the studio's president until
     * leaving to found Another Push Pin Planning (APPP) on June 22, 1984. Following Nomura's departure, Miura assumed
     * the role as the studio's president. As a result, the studio began producing works as a prime contractor, riding
     * on the late 1980s OVA boom. The studio later expanded into game production (AIC Spirits) and the publishing
     * business (AIC Club). In 2003, the studio shuttered AIC Spirits and AIC Club and reorganized itself into three
     * sub-studios; AIC A.S.T.A. (now AIC ASTA), AIC Digital, and AIC Spirits. In February 2008, ACA-managed investment
     * fund MCP Synergy acquired a 95% stake in the studio, and a new Anime International Company, Inc. was established
     * through an incorporation-type demerger in May of the same year. In September 2010, Oizumi Corporation made AIC
     * into a wholly-owned subsidiary of the company. In March of the following year, the studio became a wholly-owned
     * subsidiary of Aplix Corporation. In January 2014, Aplix IP Holdings (now Aplix Corporation) announced its exit
     * from its multimedia entertainment business, and transferred all of its shares in the studio to Toru Miura.
     * In August 2015, the studio's animation production department was disbanded. The same year in December, Miura
     * appointed Yasutaka Omura as the company's new representative director, and also transferred its classic IPs to
     * AIC RIGHTS (AIC RIGHTS Co., Ltd.) through a corporation-separation procedure. In January 2020, Miura reassumed
     * the representative director position from Omura.
     *
     * The studio had several sub-studios within itself; in 2013, they consisted of: AIC ASTA, AIC Build, AIC Classic,
     * AIC Digital, AIC PLUS+, and AIC Frontier. In addition, the studio also had a background art, CG, photography,
     * finishing, and editing departments, as well as a recording and editing studio AIC Eastside Studio.
     *
     * ---
     *
     * This studio has worked on some popular titles including (but not limited to) "Date a Live", "Ore no Imouto ga
     * Konnani Kawaii Wake ga Nai", "Maken-Ki!", "Strike Witches 2"
     */
    AIC_BUILD = "AIC Build",

    /**
     * According to [Wikipedia](https://it.wikipedia.org)
     * in [this article](https://en.wikipedia.org/wiki/Anime_International_Company):
     *
     * Anime International Company, Inc. (Japanese: 株式会社アニメインターナショナルカンパニー, Hepburn: Kabushiki-gaisha Anime
     * Intānashonaru Kanpanī), often abbreviated as AIC, is a Japanese animation studio founded on June 15, 1982 and
     * located in Nerima, Tokyo, Japan. On December 10, 2015, AIC RIGHTS Company, Inc. was established through acompany
     * split, in which AIC Rights received the transfer of some of the copyrights owned by Anime International Company.
     *
     * AIC had eight sub-studios within itself, named: AIC ASTA (2003, formerly: AIC A.S.T.A.), AIC Build (2010),
     * AIC Classic (2010), AIC Digital (1997), AIC Frontier (June 2012), AIC PLUS+ (2006), AIC Spirits (2003) and AIC
     * Takarazuka (2006).
     *
     * ---
     *
     * According to [MyAnimeList](https://myanimelist.net/)
     * on [this page](https://myanimelist.net/anime/producer/48/AIC):
     *
     * AIC (Anime International Company, Inc.) is a Japanese animation studio based in Nerima, Tokyo, Japan. Kazushi
     * Nomura and Toru Miura established AIC on July 15, 1982, with Nomura serving as the studio's president until
     * leaving to found Another Push Pin Planning (APPP) on June 22, 1984. Following Nomura's departure, Miura assumed
     * the role as the studio's president. As a result, the studio began producing works as a prime contractor, riding
     * on the late 1980s OVA boom. The studio later expanded into game production (AIC Spirits) and the publishing
     * business (AIC Club). In 2003, the studio shuttered AIC Spirits and AIC Club and reorganized itself into three
     * sub-studios; AIC A.S.T.A. (now AIC ASTA), AIC Digital, and AIC Spirits. In February 2008, ACA-managed investment
     * fund MCP Synergy acquired a 95% stake in the studio, and a new Anime International Company, Inc. was established
     * through an incorporation-type demerger in May of the same year. In September 2010, Oizumi Corporation made AIC
     * into a wholly-owned subsidiary of the company. In March of the following year, the studio became a wholly-owned
     * subsidiary of Aplix Corporation. In January 2014, Aplix IP Holdings (now Aplix Corporation) announced its exit
     * from its multimedia entertainment business, and transferred all of its shares in the studio to Toru Miura.
     * In August 2015, the studio's animation production department was disbanded. The same year in December, Miura
     * appointed Yasutaka Omura as the company's new representative director, and also transferred its classic IPs to
     * AIC RIGHTS (AIC RIGHTS Co., Ltd.) through a corporation-separation procedure. In January 2020, Miura reassumed
     * the representative director position from Omura.
     *
     * The studio had several sub-studios within itself; in 2013, they consisted of: AIC ASTA, AIC Build, AIC Classic,
     * AIC Digital, AIC PLUS+, and AIC Frontier. In addition, the studio also had a background art, CG, photography,
     * finishing, and editing departments, as well as a recording and editing studio AIC Eastside Studio.
     *
     * ---
     *
     * This studio has worked on some popular titles including (but not limited to) "Date a Live", "Ore no Imouto ga
     * Konnani Kawaii Wake ga Nai", "Maken-Ki!", "Strike Witches 2"
     */
    AIC_CLASSIC = "AIC Classic",

    /**
     * According to [Wikipedia](https://it.wikipedia.org)
     * in [this article](https://en.wikipedia.org/wiki/Anime_International_Company):
     *
     * Anime International Company, Inc. (Japanese: 株式会社アニメインターナショナルカンパニー, Hepburn: Kabushiki-gaisha Anime
     * Intānashonaru Kanpanī), often abbreviated as AIC, is a Japanese animation studio founded on June 15, 1982 and
     * located in Nerima, Tokyo, Japan. On December 10, 2015, AIC RIGHTS Company, Inc. was established through acompany
     * split, in which AIC Rights received the transfer of some of the copyrights owned by Anime International Company.
     *
     * AIC had eight sub-studios within itself, named: AIC ASTA (2003, formerly: AIC A.S.T.A.), AIC Build (2010),
     * AIC Classic (2010), AIC Digital (1997), AIC Frontier (June 2012), AIC PLUS+ (2006), AIC Spirits (2003) and AIC
     * Takarazuka (2006).
     *
     * ---
     *
     * According to [MyAnimeList](https://myanimelist.net/)
     * on [this page](https://myanimelist.net/anime/producer/48/AIC):
     *
     * AIC (Anime International Company, Inc.) is a Japanese animation studio based in Nerima, Tokyo, Japan. Kazushi
     * Nomura and Toru Miura established AIC on July 15, 1982, with Nomura serving as the studio's president until
     * leaving to found Another Push Pin Planning (APPP) on June 22, 1984. Following Nomura's departure, Miura assumed
     * the role as the studio's president. As a result, the studio began producing works as a prime contractor, riding
     * on the late 1980s OVA boom. The studio later expanded into game production (AIC Spirits) and the publishing
     * business (AIC Club). In 2003, the studio shuttered AIC Spirits and AIC Club and reorganized itself into three
     * sub-studios; AIC A.S.T.A. (now AIC ASTA), AIC Digital, and AIC Spirits. In February 2008, ACA-managed investment
     * fund MCP Synergy acquired a 95% stake in the studio, and a new Anime International Company, Inc. was established
     * through an incorporation-type demerger in May of the same year. In September 2010, Oizumi Corporation made AIC
     * into a wholly-owned subsidiary of the company. In March of the following year, the studio became a wholly-owned
     * subsidiary of Aplix Corporation. In January 2014, Aplix IP Holdings (now Aplix Corporation) announced its exit
     * from its multimedia entertainment business, and transferred all of its shares in the studio to Toru Miura.
     * In August 2015, the studio's animation production department was disbanded. The same year in December, Miura
     * appointed Yasutaka Omura as the company's new representative director, and also transferred its classic IPs to
     * AIC RIGHTS (AIC RIGHTS Co., Ltd.) through a corporation-separation procedure. In January 2020, Miura reassumed
     * the representative director position from Omura.
     *
     * The studio had several sub-studios within itself; in 2013, they consisted of: AIC ASTA, AIC Build, AIC Classic,
     * AIC Digital, AIC PLUS+, and AIC Frontier. In addition, the studio also had a background art, CG, photography,
     * finishing, and editing departments, as well as a recording and editing studio AIC Eastside Studio.
     *
     * ---
     *
     * This studio has worked on some popular titles including (but not limited to) "Date a Live", "Ore no Imouto ga
     * Konnani Kawaii Wake ga Nai", "Maken-Ki!", "Strike Witches 2"
     */
    AIC_FRONTIER = "AIC Frontier",

    /**
     * According to [Wikipedia](https://it.wikipedia.org)
     * in [this article](https://en.wikipedia.org/wiki/Anime_International_Company):
     *
     * Anime International Company, Inc. (Japanese: 株式会社アニメインターナショナルカンパニー, Hepburn: Kabushiki-gaisha Anime
     * Intānashonaru Kanpanī), often abbreviated as AIC, is a Japanese animation studio founded on June 15, 1982 and
     * located in Nerima, Tokyo, Japan. On December 10, 2015, AIC RIGHTS Company, Inc. was established through acompany
     * split, in which AIC Rights received the transfer of some of the copyrights owned by Anime International Company.
     *
     * AIC had eight sub-studios within itself, named: AIC ASTA (2003, formerly: AIC A.S.T.A.), AIC Build (2010),
     * AIC Classic (2010), AIC Digital (1997), AIC Frontier (June 2012), AIC PLUS+ (2006), AIC Spirits (2003) and AIC
     * Takarazuka (2006).
     *
     * ---
     *
     * According to [MyAnimeList](https://myanimelist.net/)
     * on [this page](https://myanimelist.net/anime/producer/48/AIC):
     *
     * AIC (Anime International Company, Inc.) is a Japanese animation studio based in Nerima, Tokyo, Japan. Kazushi
     * Nomura and Toru Miura established AIC on July 15, 1982, with Nomura serving as the studio's president until
     * leaving to found Another Push Pin Planning (APPP) on June 22, 1984. Following Nomura's departure, Miura assumed
     * the role as the studio's president. As a result, the studio began producing works as a prime contractor, riding
     * on the late 1980s OVA boom. The studio later expanded into game production (AIC Spirits) and the publishing
     * business (AIC Club). In 2003, the studio shuttered AIC Spirits and AIC Club and reorganized itself into three
     * sub-studios; AIC A.S.T.A. (now AIC ASTA), AIC Digital, and AIC Spirits. In February 2008, ACA-managed investment
     * fund MCP Synergy acquired a 95% stake in the studio, and a new Anime International Company, Inc. was established
     * through an incorporation-type demerger in May of the same year. In September 2010, Oizumi Corporation made AIC
     * into a wholly-owned subsidiary of the company. In March of the following year, the studio became a wholly-owned
     * subsidiary of Aplix Corporation. In January 2014, Aplix IP Holdings (now Aplix Corporation) announced its exit
     * from its multimedia entertainment business, and transferred all of its shares in the studio to Toru Miura.
     * In August 2015, the studio's animation production department was disbanded. The same year in December, Miura
     * appointed Yasutaka Omura as the company's new representative director, and also transferred its classic IPs to
     * AIC RIGHTS (AIC RIGHTS Co., Ltd.) through a corporation-separation procedure. In January 2020, Miura reassumed
     * the representative director position from Omura.
     *
     * The studio had several sub-studios within itself; in 2013, they consisted of: AIC ASTA, AIC Build, AIC Classic,
     * AIC Digital, AIC PLUS+, and AIC Frontier. In addition, the studio also had a background art, CG, photography,
     * finishing, and editing departments, as well as a recording and editing studio AIC Eastside Studio.
     *
     * ---
     *
     * This studio has worked on some popular titles including (but not limited to) "Date a Live", "Ore no Imouto ga
     * Konnani Kawaii Wake ga Nai", "Maken-Ki!", "Strike Witches 2"
     */
    AIC_PLUS = "AIC Plus+",

    /**
     * According to [Wikipedia](https://it.wikipedia.org)
     * in [this article](https://en.wikipedia.org/wiki/Anime_International_Company):
     *
     * Anime International Company, Inc. (Japanese: 株式会社アニメインターナショナルカンパニー, Hepburn: Kabushiki-gaisha Anime
     * Intānashonaru Kanpanī), often abbreviated as AIC, is a Japanese animation studio founded on June 15, 1982 and
     * located in Nerima, Tokyo, Japan. On December 10, 2015, AIC RIGHTS Company, Inc. was established through acompany
     * split, in which AIC Rights received the transfer of some of the copyrights owned by Anime International Company.
     *
     * AIC had eight sub-studios within itself, named: AIC ASTA (2003, formerly: AIC A.S.T.A.), AIC Build (2010),
     * AIC Classic (2010), AIC Digital (1997), AIC Frontier (June 2012), AIC PLUS+ (2006), AIC Spirits (2003) and AIC
     * Takarazuka (2006).
     *
     * ---
     *
     * According to [MyAnimeList](https://myanimelist.net/)
     * on [this page](https://myanimelist.net/anime/producer/48/AIC):
     *
     * AIC (Anime International Company, Inc.) is a Japanese animation studio based in Nerima, Tokyo, Japan. Kazushi
     * Nomura and Toru Miura established AIC on July 15, 1982, with Nomura serving as the studio's president until
     * leaving to found Another Push Pin Planning (APPP) on June 22, 1984. Following Nomura's departure, Miura assumed
     * the role as the studio's president. As a result, the studio began producing works as a prime contractor, riding
     * on the late 1980s OVA boom. The studio later expanded into game production (AIC Spirits) and the publishing
     * business (AIC Club). In 2003, the studio shuttered AIC Spirits and AIC Club and reorganized itself into three
     * sub-studios; AIC A.S.T.A. (now AIC ASTA), AIC Digital, and AIC Spirits. In February 2008, ACA-managed investment
     * fund MCP Synergy acquired a 95% stake in the studio, and a new Anime International Company, Inc. was established
     * through an incorporation-type demerger in May of the same year. In September 2010, Oizumi Corporation made AIC
     * into a wholly-owned subsidiary of the company. In March of the following year, the studio became a wholly-owned
     * subsidiary of Aplix Corporation. In January 2014, Aplix IP Holdings (now Aplix Corporation) announced its exit
     * from its multimedia entertainment business, and transferred all of its shares in the studio to Toru Miura.
     * In August 2015, the studio's animation production department was disbanded. The same year in December, Miura
     * appointed Yasutaka Omura as the company's new representative director, and also transferred its classic IPs to
     * AIC RIGHTS (AIC RIGHTS Co., Ltd.) through a corporation-separation procedure. In January 2020, Miura reassumed
     * the representative director position from Omura.
     *
     * The studio had several sub-studios within itself; in 2013, they consisted of: AIC ASTA, AIC Build, AIC Classic,
     * AIC Digital, AIC PLUS+, and AIC Frontier. In addition, the studio also had a background art, CG, photography,
     * finishing, and editing departments, as well as a recording and editing studio AIC Eastside Studio.
     *
     * ---
     *
     * This studio has worked on some popular titles including (but not limited to) "Date a Live", "Ore no Imouto ga
     * Konnani Kawaii Wake ga Nai", "Maken-Ki!", "Strike Witches 2"
     */
    AIC_SPIRITS = "AIC Spirits",

    /**
     * According to [Wikipedia](https://it.wikipedia.org)
     * in [this article](https://en.wikipedia.org/wiki/Ajia-do_Animation_Works):
     *
     * Ajia-do Co., Ltd. (Japanese: 株式会社亜細亜堂, Hepburn: Kabushiki-gaisha Ajiadō) is a Japanese animation studio
     * established on October 4, 1978. Its name can be translated as "Hall of Asia."
     *
     * The studio was founded in 1978 by the noted animators Tsutomu Shibayama, Osamu Kobayashi and Michishiro Yamada,
     * former members of the animation studio A Production, under the corporate title Yugen-kaisha Ajiadō
     * (有限会社亜細亜堂). The name Ajiadō is a penname used by Tsutomu Shibayama and Osamu Kobayashi.
     *
     * In 1985, it formally became a kabushiki gaisha (business corporation). In 1987, it produced its first series, the
     * OVA "Twilight Q" (トワイライトQ, Towairaito Q). It established the company Dap International Kabushiki-gaisha
     * (ダップインターナショナル株式会社, Dappu Intānashonaru Kabushiki-gaisha) in 1990.
     *
     * At the same time, they established a joint venture company, Japan Taps (ジャパンタップス, Japan Tappusu), with the
     * toy company Takara. They undertook the production of anime such as "Miracle Girls" and also engaged in
     * subcontracting for other anime productions sponsored by the company (later dissolved). In 1998, the studio
     * established a digital animation division to produce its digital animation.
     *
     * In 2005, the studio produced "Zettai Shōnen", which was directed by Tomomi Mochizuki and premiered on NHK BS2. In
     * 2007, it produced "Emma – A Victorian Romance: Second Act", the second season of "Emma – A Victorian Romance".
     *
     * ---
     *
     * They have worked on titles like "Isekai Maou to Shoukan Shoujo no Dorei Majutsu", "Bokura no Nanokakan Sensou"
     * and 
     */
    AJIA_DO = "Ajia-Do",
    AKATSUKI = "Akatsuki",
    ALBACROW = "Albacrow",
    AN_DERCEN = "An DerCen",
    ANIMA = "Anima",
    ANIMA_CO = "Anima&Co.",
    ANIMATE_FILM = "animate Film",
    ANIMATION_DO = "Animation Do",
    ANKAMA_ANIMATIONS = "Ankama Animations",
    ANPRO = "Anpro",
    APPP = "APPP",
    AQUA_ARIS = "AQUA ARIS",
    ARECT = "ARECT",
    ARK = "Ark",
    ARMS = "Arms",
    ARTLAND = "Artland",
    ARTMIC = "Artmic",
    ARVO_ANIMATION = "Arvo Animation",
    ASAHI_PRODUCTION = "Asahi Production",
    ASATSU_DK = "Asatsu DK",
    ASCENSION = "Ascension",
    ASHI_PRODUCTION = "Ashi Production",
    ASK_ANIMATION_STUDIO = "ASK Animation Studio",
    ASREAD = "Asread",
    ATELIERPONTDARC = "AtelierPontdarc",
    AVACO_CREATIVE_STUDIOS = "Avaco Creative Studios",
    AXSIZ = "AXsiZ",
    B_CMAY_PICTURES = "B.CMAY PICTURES",
    B_T = "B&T",
    BAKKEN_RECORD = "Bakken Record",
    BANDAI_NAMCO_PICTURES = "Bandai Namco Pictures",
    BARNUM_STUDIO = "Barnum Studio",
    BEE_MEDIA = "Bee Media",
    BEE_TRAIN = "Bee Train",
    BESTACK = "BeSTACK",
    BIBURY_ANIMATION_CG = "Bibury Animation CG",
    BIBURY_ANIMATION_STUDIOS = "Bibury Animation Studios",
    BIGFIREBIRD_ANIMATION = "BigFireBird Animation",
    BLADE = "Blade",
    BLOOMZ = "BloomZ",
    BONES = "Bones",
    BOOKONG_CULTURE = "BooKong Culture",
    BOUNCY = "Bouncy",
    BRAINS_BASE = "Brain's Base",
    BRIDGE = "Bridge",
    BRIO_ANIMATION = "Brio Animation",
    BUEMON = "Buemon",
    BUG_FILMS = "BUG FILMS",
    C_STATION = "C-Station",
    C2C = "C2C",
    CG_YEAR = "CG Year",
    CGCG_STUDIO = "CGCG Studio",
    CHAOS_PROJECT = "Chaos Project",
    CHENGDU_COCO_CARTOON = "Chengdu Coco Cartoon",
    CHILDRENS_PLAYGROUND_ENTERTAINMENT = "Children's Playground Entertainment",
    CLAP = "CLAP",
    CLOUD_HEARTS = "Cloud Hearts",
    CLOVERWORKS = "CloverWorks",
    CMC_MEDIA = "CMC Media",
    COCKTAIL_MEDIA = "Cocktail Media",
    COLORED_PENCIL_ANIMATION_DESIGN = "Colored-Pencil Animation Design",
    COMIX_WAVE_FILMS = "CoMix Wave Films",
    COMPTOWN = "CompTown",
    CONNECT = "Connect",
    CRAFTAR_STUDIOS = "Craftar Studios",
    CREATORS_IN_PACK = "Creators in Pack",
    CYGAMESPICTURES = "CygamesPictures",
    DANDELION_ANIMATION_STUDIO = "DandeLion Animation Studio",
    DAUME = "Daume",
    DAVID_PRODUCTION = "David Production",
    DIGITAL_NETWORK_ANIMATION = "Digital Network Animation",
    DIOMEDEA = "Diomedea",
    DJINN_POWER = "Djinn Power",
    DLE = "DLE",
    DMM_PICTURES = "DMM pictures",
    DMM_FUTUREWORKS = "DMM.futureworks",
    DOGA_KOBO = "Doga Kobo",
    DOMERICA = "domerica",
    DONGWOO_A_E = "Dongwoo A&E",
    DR_MOVIE = "DR Movie",
    DRAWIZ = "DRAWIZ",
    DRIVE = "Drive",
    DROP = "drop",
    DWANGO = "Dwango",
    DYNAMO_PICTURES = "Dynamo Pictures",
    E_G_FILMS = "E&G Films",
    E_H_PRODUCTION = "E&H Production",
    EAST_FISH_STUDIO = "East Fish Studio",
    EGG_FIRM = "Egg Firm",
    EIKEN = "Eiken",
    EKACHI_EPILKA = "EKACHI EPILKA",
    ELIAS = "Elias",
    EMON = "Emon",
    EMT_SQUARED = "EMT Squared",
    ENCOURAGE_FILMS = "Encourage Films",
    ENGI = "ENGI",
    ENISHIYA = "Enishiya",
    EOTA = "EOTA",
    ETHER_KITTEN = "Ether Kitten",
    EVG = "evg",
    EZOLA = "Ezόla",
    FANWORKS = "Fanworks",
    FEEL = "feel.",
    FELIX_FILM = "Felix Film",
    FIFTH_AVENUE = "Fifth Avenue",
    FLAGSHIP_LINE = "FLAGSHIP LINE",
    FLAT_STUDIO = "Flat Studio",
    FREDERATOR_STUDIOS = "Frederator Studios",
    FRONT_LINE = "Front Line",
    FRONTIER_WORKS = "Frontier Works",
    FUGAKU = "Fugaku",
    FUJI_TV = "Fuji TV",
    G_ANGLE = "G-angle",
    G_G_ENTERTAINMENT = "G&G Entertainment",
    GAINA = "Gaina",
    GAINAX = "Gainax",
    GAINAX_KYOTO = "Gainax Kyoto",
    GALLOP = "Gallop",
    GARDEN_CULTURE = "Garden Culture",
    GATHERING = "Gathering",
    GEEK_TOYS = "GEEK TOYS",
    GEKKOU = "Gekkou",
    GEMBA = "GEMBA",
    GENO_STUDIO = "Geno Studio",
    GIFTANIMATION = "GIFTanimation",
    GIGA_PRODUCTION = "Giga Production",
    GINGA_YA = "Ginga Ya",
    GOHANDS = "GoHands",
    GONZO = "Gonzo",
    GOSAY_STUDIO = "Gosay Studio",
    GRAPHINICA = "Graphinica",
    GRAVITY_WELL = "Gravity Well",
    GREEN_MONSTER_TEAM = "Green Monster Team",
    GRIZZLY = "GRIZZLY",
    GROUP_TAC = "Group TAC",
    GUTON_ANIMATION_STUDIO = "Guton Animation Studio",
    HAL_FILM_MAKER = "Hal Film Maker",
    HAOLINERS_ANIMATION_LEAGUE = "Haoliners Animation League",
    HAYABUSA_FILM = "Hayabusa Film",
    HMCH = "HMCH",
    HOODS_DRIFTERS_STUDIO = "Hoods Drifters Studio",
    HOODS_ENTERTAINMENT = "Hoods Entertainment",
    HORNETS = "HORNETS",
    HOTLINE = "Hotline",
    HOTZIPANG = "HOTZIPANG",
    HUAMEI_ANIMATION = "HuaMei Animation",
    ILCA = "ILCA",
    IMAGICA_LAB = "Imagica Lab.",
    IMAGIN = "Imagin",
    IMAGINEER = "Imagineer",
    INDIVISION = "Indivision",
    ISSEN = "Issen",
    IXTL = "ixtl",
    J_C_STAFF = "J.C.Staff",
    JAPAN_TAPS = "Japan Taps",
    JAPAN_VISTEC = "Japan Vistec",
    JINNIS_ANIMATION_STUDIOS = "Jinnis Animation Studios",
    JUMONDO = "Jumondo",
    KACHIDOKI_STUDIO = "Kachidoki Studio",
    KACHIGARASU = "Kachigarasu",
    KAMIKAZE_DOUGA = "Kamikaze Douga",
    KARAKU = "Karaku",
    KAZAMI_GAKUEN_KOUSHIKI_DOUGA_BU = "Kazami Gakuen Koushiki Douga-bu",
    KHARA = "Khara",
    KIGUMI = "Kigumi",
    KINEMA_CITRUS = "Kinema Citrus",
    KINO_PRODUCTION = "Kino Production",
    KJJ_ANIMATION = "KJJ Animation",
    KOKUSAI_EIGASHA = "Kokusai Eigasha",
    KUNGFUFROG_ANIMATION = "Kungfufrog Animation",
    KYOTO_ANIMATION = "Kyoto Animation",
    KYOTOMA = "Kyotoma",
    LANDQ_STUDIOS = "LandQ studios",
    LAPIN_TRACK = "Lapin Track",
    LARX_ENTERTAINMENT = "Larx Entertainment",
    LAY_DUCE = "Lay-duce",
    LERCHE = "Lerche",
    LESPRIT = "Lesprit",
    LIBER = "Liber",
    LICO = "LICO",
    LIDE = "Lide",
    LIDENFILMS = "LIDENFILMS",
    LIDENFILMS_KYOTO_STUDIO = "LIDENFILMS Kyoto Studio",
    LIFE_WORK = "Life Work",
    LIGHT_CHASER_ANIMATION_STUDIOS = "Light Chaser Animation Studios",
    LILIX = "Lilix",
    LINGSANWU_ANIMATION = "Lingsanwu Animation",
    LIVE2D_CREATIVE_STUDIO = "Live2D Creative Studio",
    LMD = "LMD",
    M_S_C = "M.S.C",
    MADHOUSE = "Madhouse",
    MAGIA_DORAGLIER = "Magia Doraglier",
    MAGIC_BUS = "Magic Bus",
    MAHO_FILM = "Maho Film",
    MAKARIA = "Makaria",
    MANAA_ANIMATION = "Manaa Animation",
    MANGLOBE = "Manglobe",
    MAPPA = "MAPPA",
    MARVY_JACK = "Marvy Jack",
    MARZA_ANIMATION_PLANET = "Marza Animation Planet",
    MASTER_LIGHTS = "MASTER LIGHTS",
    MIHOYOANIME = "miHoYoAnime",
    MILI_PICTURES = "Mili Pictures",
    MILLEPENSEE = "Millepensee",
    MINAMI_MACHI_BUGYOUSHO = "Minami Machi Bugyousho",
    MIPPEI_EIGEKI_KIRYUUKAN = "Mippei Eigeki Kiryuukan",
    MONOFILMO = "monofilmo",
    MUA_FILM = "Mua Film",
    MUSHI_PRODUCTION = "Mushi Production",
    NAKAMURA_PRODUCTION = "Nakamura Production",
    NAMU_ANIMATION = "Namu Animation",
    NAZ = "NAZ",
    NETFLIX_ANIMATION = "Netflix Animation",
    NEXUS = "Nexus",
    NICE_BOAT_ANIMATION = "Nice Boat Animation",
    NIHON_AD_SYSTEMS = "Nihon Ad Systems",
    NIPPON_ANIMATION = "Nippon Animation",
    NOMAD = "Nomad",
    NUT = "Nut",
    OFFICE_DCI = "Office DCI",
    OFFICE_NOBU = "Office Nobu",
    OKURUTO_NOBORU = "Okuruto Noboru",
    OLM = "OLM",
    OLM_DIGITAL = "OLM Digital",
    ORANGE = "Orange",
    ORDET = "Ordet",
    OXYBOT = "Oxybot",
    OZ = "Oz",
    P_A_WORKS = "P.A. Works",
    P_I_C_S = "P.I.C.S.",
    PALM_STUDIO = "Palm Studio",
    PANDA_TOWER_STUDIO = "Panda Tower Studio",
    PAPER_PLANE_ANIMATION_STUDIO_ANIME = "Paper Plane Animation Studio Anime",
    PASSIONE = "Passione",
    PASTEL = "Pastel",
    PB_ANIMATION_CO_LIMITED = "Pb Animation Co. Ltd.",
    PHANTOM = "PHANTOM",
    PICTURE_MAGIC = "Picture Magic",
    PIERROT_FILMS = "Pierrot Films",
    PIERROT_PLUS = "Pierrot Plus",
    PINE_JAM = "Pine Jam",
    PLANET = "Planet",
    PLATINUM_VISION = "Platinum Vision",
    PLUM = "Plum",
    POLYGON_PICTURES = "Polygon Pictures",
    POWERHOUSE_ANIMATION_STUDIOS = "Powerhouse Animation Studios",
    PRA = "PRA",
    PRIMASTEA = "Primastea",
    PRIMETIME = "PrimeTime",
    PRODUCTION_H = "Production +h.",
    PRODUCTION_DOA = "production doA",
    PRODUCTION_GOODBOOK = "Production GoodBook",
    PRODUCTION_I_G = "Production I.G",
    PRODUCTION_IMS = "Production IMS",
    PRODUCTION_REED = "Production Reed",
    PROJECT_51_PRODUCTIONS = "Project 51 Productions",
    PROJECT_NO_9 = "Project No.9",
    PUBLIC_AND_BASIC = "Public & Basic",
    PURPLE_COW_STUDIO_JAPAN = "Purple Cow Studio Japan",
    QUAD = "Quad",
    QUALIA_ANIMATION = "Qualia Animation",
    QUBIC_PICTURES = "Qubic Pictures",
    RABBIT_GATE = "Rabbit Gate",
    RADIX = "Radix",
    RED_DOG_CULTURE_HOUSE = "Red Dog Culture House",
    REMIC = "Remic",
    REVOROOT = "Revoroot",
    RISING_FORCE = "Rising Force",
    ROCKWELL_EYES = "Rockwell Eyes",
    ROLL2 = "ROLL2",
    RUO_HONG_CULTURE = "Ruo Hong Culture",
    SABER_WORKS = "Saber Works",
    SAETTA = "Saetta",
    SAMSARA_ANIMATION_STUDIO = "Samsara Animation Studio",
    SANZIGEN = "SANZIGEN",
    SATELIGHT = "Satelight",
    SCIENCE_SARU = "Science SARU",
    SCOOTER_FILMS = "Scooter Films",
    SEVEN = "Seven",
    SEVEN_ARCS = "Seven Arcs",
    SEVEN_ARCS_PICTURES = "Seven Arcs Pictures",
    SEVEN_STONE_ENTERTAINMENT = "Seven Stone Entertainment",
    SHAFT = "Shaft",
    SHANGHAI_FOCH_FILM_CULTURE_INVESTMENT = "Shanghai Foch Film Culture Investment",
    SHANKAR_ANIMATION = "Shankar Animation",
    SHAREFUN_STUDIO = "Sharefun Studio",
    SHIN_EI_ANIMATION = "Shin-Ei Animation",
    SHINKUUKAN = "Shinkuukan",
    SHIROGUMI = "Shirogumi",
    SHUKA = "Shuka",
    SIGNAL_MD = "Signal.MD",
    SILVER = "Silver",
    SILVER_LINK = "Silver Link.",
    SOLA_DIGITAL_ARTS = "Sola Digital Arts",
    SOTSU = "Sotsu",
    SPACE_NEKO_COMPANY = "Space Neko Company",
    SPARKLY_KEY_ANIMATION_STUDIO = "Sparkly Key Animation Studio",
    SPRITE_ANIMATION_STUDIOS = "Sprite Animation Studios",
    STAPLE_ENTERTAINMENT = "Staple Entertainment",
    STEVE_N_STEVEN = "Steve N'Steven",
    STINGRAY = "Stingray",
    STUDIO_3HZ = "Studio 3Hz",
    STUDIO_4_C = "Studio 4°C",
    STUDIO_A_CAT = "Studio A-CAT",
    STUDIO_ANIMAL = "Studio Animal",
    STUDIO_BIND = "Studio Bind",
    STUDIO_BLANC = "Studio Blanc",
    STUDIO_CHIZU = "Studio Chizu",
    STUDIO_COLORIDO = "Studio Colorido",
    STUDIO_COMET = "Studio Comet",
    STUDIO_DAISY = "Studio Daisy",
    STUDIO_DEEN = "Studio Deen",
    STUDIO_DURIAN = "Studio DURIAN",
    STUDIO_ELLE = "Studio elle",
    STUDIO_FANTASIA = "Studio Fantasia",
    STUDIO_FLAD = "Studio Flad",
    STUDIO_FLAG = "Studio Flag",
    STUDIO_GHIBLI = "Studio Ghibli",
    STUDIO_GOKUMI = "Studio Gokumi",
    STUDIO_HIBARI = "Studio Hibari",
    STUDIO_HOKIBOSHI = "Studio Hokiboshi",
    STUDIO_JEMI = "Studio Jemi",
    STUDIO_JUNIO = "Studio Junio",
    STUDIO_KAFKA = "Studio Kafka",
    STUDIO_KAI = "Studio Kai",
    STUDIO_KIKAN = "Studio Kikan",
    STUDIO_LAN = "Studio LAN",
    STUDIO_LINGS = "Studio Lings",
    STUDIO_LIVE = "Studio Live",
    STUDIO_M2 = "Studio M2",
    STUDIO_MASSKET = "Studio Massket",
    STUDIO_MATRIX = "Studio Matrix",
    STUDIO_MAUSU = "Studio Mausu",
    STUDIO_MIR = "Studio Mir",
    STUDIO_MOE = "Studio Moe",
    STUDIO_MOTHER = "studio MOTHER",
    STUDIO_N = "Studio N",
    STUDIO_NANAHOSHI = "Studio Nanahoshi",
    STUDIO_PALETTE = "Studio Palette",
    STUDIO_PIERROT = "Studio Pierrot",
    STUDIO_POLON = "Studio Polon",
    STUDIO_PONOC = "Studio Ponoc",
    STUDIO_PPURI = "Studio Ppuri",
    STUDIO_PUYUKAI = "Studio PuYUKAI",
    STUDIO_RIKKA = "Studio Rikka",
    STUDIO_SIGNPOST = "Studio Signpost",
    STUDIO_VOLN = "Studio VOLN",
    STUDIO_CUCURI = "Studio! Cucuri",
    SUBLIMATION = "Sublimation",
    SUCCESS_CORPORATION = "Success Corp.",
    SUISEISHA = "Suiseisha",
    SUNRISE = "Sunrise",
    SUNRISE_BEYOND = "Sunrise Beyond",
    SYNERGYSP = "SynergySP",
    TAMA_PRODUCTION = "Tama Production",
    TATSUNOKO_PRODUCTION = "Tatsunoko Production",
    TEAM_ONEONE = "Team OneOne",
    TEAM_TILLDAWN = "Team TillDawn",
    TEAM_YAMAHITSUJI = "Team Yamahitsuji",
    TEAM_YOKKYUFUMAN = "Team YokkyuFuman",
    TEAMKG = "teamKG",
    TEAR_STUDIO = "Tear Studio",
    TEDDY = "Teddy",
    TELE_CARTOON_JAPAN = "Tele-Cartoon Japan",
    TELECOM_ANIMATION_FILM = "Telecom Animation Film",
    TENCENT_ANIMATION_AND_COMICS = "Tencent Animation & Comics",
    TENCENT_PENGUIN_PICTURES = "Tencent Penguin Pictures",
    TEZUKA_PRODUCTIONS = "Tezuka Productions",
    THE_ANSWER_STUDIO = "The Answer Studio",
    THINK_CORPORATION = "Think Corporation",
    THUNDRAY = "Thundray",
    THYMOS_MEDIA = "Thymos Media",
    TMS_ENTERTAINMENT = "TMS Entertainment",
    TNK = "TNK",
    TOEI_ANIMATION = "Toei Animation",
    TOHO_ANIMATION = "TOHO animation",
    TOHO_INTERACTIVE_ANIMATION = "Toho Interactive Animation",
    TOKYO_KIDS = "Tokyo Kids",
    TOKYO_MOVIE_SHINSHA = "Tokyo Movie Shinsha",
    TOMASON = "Tomason",
    TOMOVIES = "Tomovies",
    TOPCRAFT = "Topcraft",
    TRANS_ARTS = "Trans Arts",
    TRI_SLASH = "Tri-Slash",
    TRIANGLE_STAFF = "Triangle Staff",
    TRIF_STUDIO = "TriF Studio",
    TRIGGER = "Trigger",
    TRINET_ENTERTAINMENT = "Trinet Entertainment",
    TROYCA = "TROYCA",
    TSUCHIDA_PRODUCTIONS = "Tsuchida Productions",
    TSUMUGI_AKITA_ANIMATION_LAB = "Tsumugi Akita Animation Lab",
    TWILIGHT_STUDIO = "Twilight Studio",
    TWIN_ENGINE = "Twin Engine",
    TYO_ANIMATIONS = "TYO Animations",
    TYPHOON_GRAPHICS = "Typhoon Graphics",
    UFOTABLE = "ufotable",
    UNEND = "Unend",
    URBAN_PRODUCT = "Urban Product",
    UWAN_PICTURES = "UWAN Pictures",
    VEGA_ENTERTAINMENT = "Vega Entertainment",
    VENET = "Venet",
    VISUAL_FLIGHT = "Visual Flight",
    VOIL = "Voil",
    W_TOON_STUDIO = "W-Toon Studio",
    WAO_WORLD = "WAO World",
    WAWAYU_ANIMATION = "Wawayu Animation",
    WHITE_FOX = "White Fox",
    WINDY_STUDIO = "Windy Studio",
    WIT_STUDIO = "Wit Studio",
    WOLFSBANE = "Wolfsbane",
    XEBEC = "Xebec",
    XFLAG = "XFLAG",
    XIAOYING_FEIYANG_PICTURES = "Xiaoying Feiyang Pictures",
    YAOYOROZU = "Yaoyorozu",
    YOKOHAMA_ANIMATION_LAB = "Yokohama Animation Lab",
    YOSTAR_PICTURES = "Yostar Pictures",
    YUMETA_COMPANY = "Yumeta Company",
    ZERO_G = "Zero-G",
    ZERO_G_ROOM = "Zero-G Room",
    ZEXCS = "Zexcs"
}