import Anime from "./src/Anime.ts";

Anime.get("https://www.animeworld.so/play/oreimo-2.6Qcj6/F0bzL").then(r => {
    console.log(r.downloadURL);
});