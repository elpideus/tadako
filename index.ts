import Tadako from "./src/Tadako";

Tadako.search("violet").then(r => r.results[0].init().then(r => {
    r.episodes[0].getDownloadURL().then(e => console.log(e));
}));