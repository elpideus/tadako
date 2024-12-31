# Tadako - An unofficial AnimeWorld API

This is a library inspired by [MainKronos' AnimeWorld-API](https://github.com/MainKronos/AnimeWorld-API).
Tadako is still under development and as such expect changes and relatively frequent refactoring.

---

## Installation
This library depends on [axios](https://github.com/axios/axios) and [cheerio](https://github.com/cheeriojs/cheerio).\
We love and support [bun](https://bun.sh/) and as such the library is tailored to work perfectly with it.

Installation via bun:
```shell script
bun install tadako
```

Installation via npm:
```shell script
npm install tadako
```

---

## Usage

### Importing
You can import the library into your project and just start working with it.

```typescript
import Tadako from "tadako";
```

### Fetching
We tried to make the entire process of fetching data as straightforward as possible, while at the 
same time sending as few requests as possible to [AnimeWorld](https://animeworld.so).\
As such some data like the title or the poster are fetched directly from the search request, as shown below:

```typescript
Tadako.search("re:zero").then(data => {
    console.log(data.results[0].title)
});
```

However, as some data needs to be fetched from other locations, forcing us to make another request. That doesn't happen
automatically as it would send a lot of useless requests to the server. We can manually call an update with the
remaining data by using `.init()` or `.data()` on any `Anime` object. 

```typescript
Tadako.search("re:zero").then(data => {
    data.results[0].data().then(remainingResults => {
        console.log(remainingResults.episodes[0].getDownloadURL());
    })
});
```

We highly recommend working with asynchronous functions as it highly reduces nesting and verbosity.

```typescript
const main = async () => {
    const search = await Tadako.search("re:zero");
    const anime = await search.results[0].data();
    console.log(anime.episodes[0].getDownloadURL());
}

main();
```

### Filtering

All the filters usable on the official AnimeWorld website are also available here.

We tried to make filters as easy to use as possible. We went as far as to creating an
enumerator for all the available studios, so you don't even have to remember how they are called exactly, and you don't
even have to bother remembering the correct casing. We handle it all.

```typescript
import Tadako, {Studio} from "./index";

const main = async () => {
    const search = await Tadako.search("re:zero", {studio: Studio.WHITE_FOX});
    const animeList = search.results;
    animeList.forEach(anime => console.log(anime.title));
}

main();
```

Depending on your environment and the IDE/Text Editor you are using, intellisense will help you find the studio you are
searching for in seconds. In the screenshot below we are using [Jetbrains](https://www.jetbrains.com/)' 
[Webstorm](https://www.jetbrains.com/webstorm/).
![./assets/img/studio_intellisense_screenshot.png](assets/img/studio_intellisense_screenshot.png)

We are actively working on compiling small snippets of information for each and every studio and we also cite all the
sources that are helping us in doing so.
![studio_intellisense_jsdoc_description_screenshot.png](assets/img/studio_intellisense_jsdoc_description_screenshot.png)

---

## TODO:

These are things that we still need to implement in no specific order.

- Add support for different download servers
- Allow direct download of episodes using the library
- Allow streaming of anime using the library (inspired by [ani-cli](https://github.com/pystardust/ani-cli))
- Create documentation website
- Add descriptions to all the studios.