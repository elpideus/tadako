#!/usr/bin/env node

// TODO: Finish documentation
// TODO: Refactor code to reorganize
/**
 * CLI for interacting with the Tadako application to search, select, and play anime episodes.
 *
 * This script provides a user-friendly interface for navigating anime search results and playing anime episodes.
 */

import Tadako from "./src/Tadako";
import {AudioLanguage, Genre, ItalianGenreMapping, Sorting} from "./src/enums";
import {exec, execSync, spawn} from "node:child_process";
import * as readline from "readline";
import * as path from "node:path";
import Downloader from "./src/utilities/Downloader";
import * as os from "node:os";
import {MediaTypeMapping} from "./src/enums/MediaType";
import {SortingMapping} from "./src/enums/Sorting";
import {ItalianStatusMapping, StatusMapping} from "./src/enums/Status";
import DateParser from "./src/utilities/DateParser";
import type Episode from "./src/Episode.ts";
import {doesNotMatch} from "node:assert";
import fs from "fs";

const shortFlagMap = {
    h: "help",
    v: "version",
    e: "episode",
    l: "language",
    c: "category",
    t: "threads",
    o: "out-dir",
    f: "filename",
};

/**
 * Parses command-line arguments into a key-value options object.
 *
 * @param {string[]} args - Array of command-line arguments.
 * @param {Object} shortFlagsMapping - Mapping of short flags to long option names.
 * @returns {Object} Parsed options as key-value pairs.
 */
const parseArgs = (args: string[], shortFlagsMapping: { [key: string]: string } = shortFlagMap): {} => {
    const options: { [key: string]: any } = {};
    let currentFlag = null;

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg.startsWith("--")) {
            currentFlag = arg.slice(2);
            options[currentFlag] = true;
        } else if (arg.startsWith("-")) {
            if (args.length < 1) continue;
            const shortFlag = arg.slice(1);
            const longFlag = shortFlagsMapping[shortFlag];
            if (longFlag) {
                currentFlag = longFlag;
                options[longFlag] = true;
            } else console.warn(`Unknown short flag: -${shortFlag}`); // TODO: Fix this not working properly
        } else if (currentFlag) {
            options[currentFlag] = arg;
            currentFlag = null;
        }
    }

    return options;
};

const loadHelpFile = async (): Promise<{commands: Record<string, string>; flags: Record<string, {info: string; example?: string; short?: string}>}> => {
    try {
        const data = fs.readFileSync(path.join(__dirname, "help.json"), "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error loading help file:", error);
        process.exit(1);
    }
};

/**
 * ANSI escape sequences for rendering selected and unselected options.
 */
const selectedCharacter = "\x1b[32m●\x1b[0m";
const unselectedCharacter = " ";
const selectedText = (text: string) => { return `\x1b[32m${text}\x1b[0m` }

/**
 * Main CLI function to parse arguments, search for anime, and play selected episodes.
 */
const runCLI = async () => {
    const args = process.argv.slice(2);
    const query = args[0];
    if (query.length < 5 && !query.startsWith("-") && !query.startsWith("--")) {
        console.warn("The query should be longer than 4 characters.");
        return;
    }
    let command = args[1];

    let options = parseArgs(args.slice(2));

    if (!query) {
        console.log("Usage: tadako <anime-title> <command> [--episode <episode-number>] [--language <language>] [other options]");
        process.exit(1);
    }


    if (query === "--help" || query === "-h") {
        const {commands, flags} = await loadHelpFile();

        Object.keys(flags).forEach(longFlag => {
            // @ts-ignore
            const shortFlag = Object.keys(shortFlagMap).find(key => `--${shortFlagMap[key]}` === longFlag);
            if (shortFlag) flags[longFlag].short = `-${shortFlag}`;
        });

        const maxFlagLength = Math.max(
            ...Object.keys(flags).map(flag => flag.length),
            ...Object.values(flags).map(flag => flag.short?.length || 0)
        );
        const maxCommandLength = Math.max(...Object.keys(commands).map(command => command.length));

        const flagString = Object.keys(flags).map(longFlag => {
            const flag = flags[longFlag];
            const shortFlag = flag.short ? `, ${flag.short}` : '';
            const example = flag.example ? ` [Example: ${flag.example}]` : '';
            const paddedFlag = (longFlag + shortFlag).padEnd(maxFlagLength + 8);
            return `  ${paddedFlag}${flag.info}${example}`;
        }).join("\n");
        // @ts-ignore
        const commandString = Object.keys(commands).map(command => {return `  ${command.padEnd(maxCommandLength + 4)}${commands[command]}`}).join("\n");

        console.log(`Usage: tadako <anime-title> [<command>] [options]\n\nThe following commands are available:\n${commandString}\n\nThe following options are available:\n${flagString}`);
        process.exit();
    }


    if (query === "--version" || query === "-v") {
        const { version } = require('./package.json');
        console.log(`Tadako Version: ${version}`);
        process.exit();
    }


    if ((query && !command) || command.startsWith("--") || command.startsWith("-")) {
        const {commands, flags} = await loadHelpFile();
        if (!Object.keys(flags).includes(query)) {
            if (query.startsWith("--") || query.startsWith("-")) {
                console.log(`"${query}" is not a valid flag. Please consult "tadako --help" for usage information.`);
                process.exit();
            }
            command = "watch";
            options = parseArgs(args.slice(1));
        }
    }

    /**
     * Renders a list of options in the terminal with a selected index highlighted.
     *
     * @param {string[]} options - Array of options to display.
     * @param {number} selectedIndex - Index of the currently selected option.
     * @param {number} visibleCount - Number of options to display at once.
     */
    const renderOptions = (options: string[], selectedIndex: number, visibleCount: number) => {
        const terminalHeight = process.stdout.rows;
        const startIndex = Math.max(0, selectedIndex - Math.floor(terminalHeight / 2));
        const visibleOptions = options.slice(startIndex, startIndex + visibleCount);

        console.clear();
        let output = '';
        for (let i = 0; i < visibleOptions.length; i++) {
            const actualIndex = startIndex + i;
            const prefix = actualIndex === selectedIndex ? selectedCharacter : unselectedCharacter;
            const optionText = actualIndex === selectedIndex ? selectedText(visibleOptions[i]) : visibleOptions[i];
            output += `${prefix} ${optionText}\n`;
        }
        process.stdout.write(output);
    };

    /**
     * Prompts the user to select an option from a list via keyboard navigation.
     *
     * @param {string[]} options - Array of options to select from.
     * @returns {Promise<string>} The selected option.
     */
    const selectOption = async (options: string[]): Promise<string> => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: true
        });

        let selectedIndex = 0;
        const visibleCount = process.stdout.rows - 2;

        const handleKeyPress = (str: string, key: readline.Key) => {
            if (key.name === 'up') selectedIndex = (selectedIndex > 0) ? selectedIndex - 1 : options.length - 1;
            else if (key.name === 'down') selectedIndex = (selectedIndex < options.length - 1) ? selectedIndex + 1 : 0;
            else if (key.name === 'return') rl.close();

            renderOptions(options, selectedIndex, visibleCount);
        };

        renderOptions(options, selectedIndex, visibleCount);

        // @ts-ignore
        rl.input?.on('keypress', handleKeyPress);

        return new Promise<string>((resolve) => rl.on('close', () => resolve(options[selectedIndex])));
    };

    /**
     * Renders episodes in a grid layout with rows and columns, highlighting the selected index.
     *
     * @param {string[]} episodes - Array of episode names or numbers.
     * @param {number} selectedIndex - Index of the currently selected episode.
     * @param {number} [columns=10] - Number of columns to display per row.
     */
    const renderEpisodesInRows = (episodes: string[], selectedIndex: number, columns: number = 10) => {
        const terminalHeight = process.stdout.rows;
        const visibleRows = Math.max(1, terminalHeight - 2);
        const startRow = Math.max(0, Math.floor(selectedIndex / columns) - Math.floor(visibleRows / 2));
        const visibleEpisodes = episodes.slice(startRow * columns, (startRow + visibleRows) * columns);

        console.clear();
        let output = '';
        for (let i = 0; i < visibleEpisodes.length; i++) {
            const actualIndex = startRow * columns + i;
            const isSelected = actualIndex === selectedIndex;
            const prefix = isSelected ? selectedCharacter : unselectedCharacter;
            output += `${prefix} ${isSelected ? selectedText(visibleEpisodes[i]) : visibleEpisodes[i]} `;
            if ((i + 1) % columns === 0) output += '\n';
        }
        process.stdout.write(output);
    };

    let selectedEpisodeIndex = 0;

    /**
     * Prompts the user to select an episode from a grid layout via keyboard navigation.
     *
     * @param {any[]} episodes - Array of episode objects or identifiers.
     * @param {number} [columns=10] - Number of columns to display per row.
     * @returns {Promise<any>} The selected episode object.
     */
    const selectEpisode = async (episodes: any[], columns: number = 10): Promise<any> => {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: true
        });

        let selectedIndex = 0;
        const rows = Math.ceil(episodes.length / columns);

        const handleKeyPress = (str: string, key: readline.Key) => {
            const rowIndex = Math.floor(selectedIndex / columns);
            const colIndex = selectedIndex % columns;

            if (key.name === 'up') selectedIndex = rowIndex > 0 ? selectedIndex - columns : (rows - 1) * columns + colIndex;
            else if (key.name === 'down') selectedIndex = rowIndex < rows - 1 ? selectedIndex + columns : colIndex;
            else if (key.name === 'left') selectedIndex = colIndex > 0 ? selectedIndex - 1 : rowIndex * columns + (columns - 1);
            else if (key.name === 'right') selectedIndex = colIndex < columns - 1 && selectedIndex < episodes.length - 1 ? selectedIndex + 1 : rowIndex * columns;
            else if (key.name === 'return') {
                selectedEpisodeIndex = selectedIndex;
                rl.close();
            }

            renderEpisodesInRows(episodes.map((episode: any, index: number) => `${index + 1}`), selectedIndex, columns);
        };

        renderEpisodesInRows(episodes.map((episode: any, index: number) => `${index + 1}`), selectedIndex, columns);

        // @ts-ignore
        rl.input?.on('keypress', handleKeyPress);

        return new Promise<any>((resolve) => rl.on('close', () => resolve(episodes[selectedIndex])));
    };


    const getSelected = async () => {

        const searchOptions = {
            // @ts-ignore
            genre: options.genre ? (!Number.isNaN(Number(options.genre ?? "null"))) ? options.genre : ItalianGenreMapping[options.genre.toUpperCase()] : null,
            // @ts-ignore
            season: options.season || null,
            // @ts-ignore
            status: options.status ? (!Number.isNaN(Number(options.status ?? "null"))) ? options.status : (StatusMapping[options.status.toUpperCase()] ?? ItalianStatusMapping[options.status.toUpperCase()]) : null,
            // @ts-ignore
            year: options.year || null,
            // @ts-ignore
            type: options.type ? (!Number.isNaN(Number(options.type ?? "null"))) ? options.type : MediaTypeMapping[options.type.toUpperCase()] : null,
            // @ts-ignore
            studio: options.studio || null,
            // @ts-ignore
            language: options.language || AudioLanguage.ITALIAN,
            // @ts-ignore
            sort: options.sort ? (!Number.isNaN(Number(options.sort ?? "null"))) ? options.sort : SortingMapping[options.sort.toUpperCase()] : Sorting.OLDEST,
            // @ts-ignore
            dub: options.dub ? (!Number.isNaN(Number(options.dub ?? "null"))) ? options.dub : (["TRUE", "YES", "SI"].includes(options.dub.toUpperCase()) ? "1" : "0") : null,
        }

        let results = (await Tadako.search(query, searchOptions)).results;

        let languageIndex = 0;

        if (results.length === 0) {
            // @ts-ignore
            if (!options.language) {
                const languageValues = Object.values(AudioLanguage);
                while (languageIndex < languageValues.length) {
                    searchOptions.language = languageValues[languageIndex];
                    results = (await Tadako.search(query, searchOptions)).results;
                    if (results.length > 0) break;
                    languageIndex++;
                }
            }
            if (results.length === 0) {
                console.log(`No results found for "${query}" in any language.`);
                process.exit(1);
            }
        }

        let selectedAnime;
        if (results.length === 1) {
            selectedAnime = results[0];
        } else {
            const animeTitles = results.map((anime: any) => anime.title);
            const selectedAnimeTitle = await selectOption(animeTitles);
            selectedAnime = results.find((anime: any) => anime.title === selectedAnimeTitle);
        }

        if (!selectedAnime) {
            console.log("Selected anime not found.");
            process.exit(1);
        }

        console.clear();
        console.log("Loading episodes...");

        await selectedAnime.data();

        let selectedEpisode;
        // @ts-ignore
        if (options.all) selectedEpisode = selectedAnime.episodes[0];
        // @ts-ignore
        else if (!options.episode) {
            if (selectedAnime.episodes.length > 1) selectedEpisode = await selectEpisode(selectedAnime.episodes);
            else selectedEpisode = selectedAnime.episodes[0];
            // @ts-ignore
        } else selectedEpisode = selectedAnime.episodes[options.episode - 1];

        if (!selectedEpisode) {
            // @ts-ignore
            console.log(`Episode ${options.episode} not found for "${selectedAnime.title}"`);
            process.exit(1);
        }

        console.clear();
        console.log("Anime loading...");
        const downloadURL = await selectedEpisode.getDownloadURL();
        if (!downloadURL) {
            // @ts-ignore
            console.log(`No download URL found for episode ${options.episode}`);
            process.exit(1);
        }
        return {
            downloadURL: downloadURL,
            selectedAnime: selectedAnime,
            selectedEpisode: selectedEpisode
        };
    }


    if (command === "watch") {
        const selected = await getSelected();
        console.clear();
        const isMpvInstalled = (): boolean => {
            try {
                // @ts-ignore
                execSync(`${options["mpv-dir"] ? path.join(options["mpv-dir"], "mpv") : "mpv"} --version`, { stdio: "ignore" });
                return true;
            } catch {
                return false;
            }
        };
        if (!isMpvInstalled()) {
            // @ts-ignore
            if (options["mpv-dir"]) console.log("\nThe mpv location provided doesn't seem to be working.");
            else console.log("MPV is not installed or not working properly.");
            process.exit(1);
        }

        console.clear();

        const playEpisode = async (episodeURL: string, holdCLI: boolean = false, args: [] = []) => {
            if (holdCLI) {
                return new Promise<void>((resolve, reject) => {
                    // @ts-ignore
                    exec(`${options["mpv-dir"] ? path.join(options["mpv-dir"], "mpv") : "mpv"} "${episodeURL}" ${options.fullscreen ? "--fullscreen" : ""}`, (err) => {
                        if (err) {
                            console.error("Error executing MPV:", err);
                            reject(err);
                        } else {
                            resolve();
                        }
                    });
                });
            } else {
                const args = [episodeURL];
                // @ts-ignore
                if (options.fullscreen) args.push('--fullscreen');
                // @ts-ignore
                const mpvProcess = spawn(options["mpv-dir"] ? path.join(options["mpv-dir"], "mpv") : "mpv", args, { detached: true, stdio: 'ignore'});
                // @ts-ignore
                mpvProcess.unref();
            }
        };

        // @ts-ignore
        if (options["hold-cli"] || options.all) {
            // @ts-ignore
            if (options.all) {
                // @ts-ignore
                let currentEpisodeIndex = options.episode ? options.episode - 1 : 0;
                // @ts-ignore
                for (const episode of selected.selectedAnime.episodes.slice(options.episode ? options.episode - 1 : 0)) {
                    console.clear();
                    currentEpisodeIndex += 1;
                    // @ts-ignore
                    console.log(`"${selected.selectedAnime.title}" episode ${currentEpisodeIndex} is now playing via ${options["mpv-dir"] ?? "mpv"}\`...`);
                    console.log("Use CTRL + C to stop watching.");
                    const episodeURL = await episode.getDownloadURL();
                    if (episodeURL) await playEpisode(episodeURL, true);
                }
            } else {
                // @ts-ignore
                console.log(`"${selected.selectedAnime.title}" episode ${options.episode ?? selectedEpisodeIndex} is now playing via ${options["mpv-dir"] ?? "mpv"}\`...`)
                // @ts-ignore
                await playEpisode(selected.downloadURL, true);
            }
        } else {
            // @ts-ignore
            console.log(`"${selected.selectedAnime.title}" episode ${options.episode ?? selectedEpisodeIndex} is now playing via ${options["mpv-dir"] ?? "mpv"}\`...`)
            await playEpisode(selected.downloadURL);
        }
    }


    else if (command === "download") {

        const selected = await getSelected();
        console.clear();

        const downloadEpisode = (episodeURL: string, clearConsoleOnNewDownload: boolean = true) => {
            // @ts-ignore
            return new Downloader(episodeURL, options.filename ?? null, options["out-dir"] ?? null).downloadFile(options.threads ?? Math.ceil(os.cpus().length / 2), clearConsoleOnNewDownload);
        }

        // @ts-ignore
        if (options.all) {
            const startTime = Date.now();

            const selectedAnime = selected.selectedAnime;
            let episodes: Episode[] = selectedAnime.episodes;
            // @ts-ignore
            if (options.episode) episodes = selectedAnime.episodes.slice(options.episode - 1, selectedAnime.episodes.length - 1);
            let downloadOutput;
            for (const episode of episodes) {
                const downloadURL = await episode.getDownloadURL();
                if (downloadURL) {
                    downloadOutput = await downloadEpisode(downloadURL, false).then();
                    if (typeof downloadOutput === "string") console.log(downloadOutput);
                }
            }

            const endTime = Date.now();
            const totalSeconds = Math.ceil((endTime - startTime) / 1000);
            const humanReadableTime = DateParser.secondsToHumanTime(totalSeconds);

            if (typeof downloadOutput === "string") {
                console.clear();
                // @ts-ignore
                console.log(`Downloaded ${episodes.length} (${options.episode ?? 1} -> ${selectedAnime.episodes.length}) episodes of ${selectedAnime.title} in ${humanReadableTime}.`);
            }
            // @ts-ignore
            console.log(`Downloaded file(s) can be found in "${options["out-dir"] ?? path.join(os.homedir(), "Downloads")}"`)
        } else {
            const startTime = Date.now();

            const selectedAnime = selected.selectedAnime;
            let episode: Episode = selected.selectedEpisode;
            let downloadOutput;
            // @ts-ignore
            if (options.episode) episode = selectedAnime.episodes[parseInt(options.episode) - 1];
                const downloadURL = await episode.getDownloadURL();
                if (downloadURL) {
                    downloadOutput = await downloadEpisode(downloadURL, false);
                    if (typeof downloadOutput === "string") console.log(downloadOutput);
                }

            const endTime = Date.now();
            const totalSeconds = Math.ceil((endTime - startTime) / 1000);
            const humanReadableTime = DateParser.secondsToHumanTime(totalSeconds);

            if (typeof downloadOutput === "string") {
                console.clear();
                // @ts-ignore
                console.log(`Downloaded episode ${options.episode ?? selectedEpisodeIndex} of "${selectedAnime.title}" in ${humanReadableTime}.`);
            }
            // @ts-ignore
            console.log(`Downloaded file(s) can be found in "${options["out-dir"] ?? path.join(os.homedir(), "Downloads")}"`)
        }

        process.exit();
    } else if (command === "link") {
        const selected = await getSelected();
        const downloadURL = await selected.selectedEpisode.getDownloadURL();

        if (downloadURL) {
            console.clear();
            // @ts-ignore
            if (options.all) {
                const selectedAnime = selected.selectedAnime;
                let episodes: Episode[] = selectedAnime.episodes;
                // @ts-ignore
                if (options.episode) episodes = selectedAnime.episodes.slice(options.episode - 1, selectedAnime.episodes.length - 1);
                let episodeCounter = 1
                for (const episode of episodes) {
                    const downloadURL = await episode.getDownloadURL();
                    if (downloadURL) {
                        console.log(`"${selectedAnime.title}" episode ${episodeCounter} link:`);
                        console.log(downloadURL);
                        episodeCounter+=1;
                    }
                }
            } else {
                // @ts-ignore
                console.log(`"${selected.selectedAnime.title}" episode ${options.episode ?? selectedEpisodeIndex + 1} link:`);
                console.log(downloadURL);
            }
        } else console.log("No download URL found for the selected anime/episode.");
    }
    else if (command === "info") {
        console.clear();
        console.log("Loading anime...");

        // Reuse the existing search functionality to find the anime
        const searchOptions = {
            // @ts-ignore
            genre: options.genre ? (!Number.isNaN(Number(options.genre ?? "null"))) ? options.genre : ItalianGenreMapping[options.genre.toUpperCase()] : null,
            // @ts-ignore
            season: options.season || null,
            // @ts-ignore
            status: options.status ? (!Number.isNaN(Number(options.status ?? "null"))) ? options.status : (StatusMapping[options.status.toUpperCase()] ?? ItalianStatusMapping[options.status.toUpperCase()]) : null,
            // @ts-ignore
            year: options.year || null,
            // @ts-ignore
            type: options.type ? (!Number.isNaN(Number(options.type ?? "null"))) ? options.type : MediaTypeMapping[options.type.toUpperCase()] : null,
            // @ts-ignore
            studio: options.studio || null,
            // @ts-ignore
            language: options.language || AudioLanguage.ITALIAN,
            // @ts-ignore
            sort: options.sort ? (!Number.isNaN(Number(options.sort ?? "null"))) ? options.sort : SortingMapping[options.sort.toUpperCase()] : Sorting.OLDEST,
            // @ts-ignore
            dub: options.dub ? (!Number.isNaN(Number(options.dub ?? "null"))) ? options.dub : (["TRUE", "YES", "SI"].includes(options.dub.toUpperCase()) ? "1" : "0") : null,
        }

        let results = (await Tadako.search(query, searchOptions)).results;

        let languageIndex = 0;

        if (results.length === 0) {
            // @ts-ignore
            if (!options.language) {
                const languageValues = Object.values(AudioLanguage);
                while (languageIndex < languageValues.length) {
                    searchOptions.language = languageValues[languageIndex];
                    results = (await Tadako.search(query, searchOptions)).results;
                    if (results.length > 0) break;
                    languageIndex++;
                }
            }
            if (results.length === 0) {
                console.log(`No results found for "${query}" in any language.`);
                process.exit(1);
            }
        }

        let selectedAnime;
        if (results.length === 1) {
            selectedAnime = results[0];
        } else {
            const animeTitles = results.map((anime: any) => anime.title);
            const selectedAnimeTitle = await selectOption(animeTitles);
            selectedAnime = results.find((anime: any) => anime.title === selectedAnimeTitle);
        }

        if (!selectedAnime) {
            console.log("Selected anime not found.");
            process.exit(1);
        }

        // Load the full anime data
        await selectedAnime.data();

        console.clear();

        // Get category and status names
        const categoryName = selectedAnime.category !== null
            ? Object.keys(MediaTypeMapping).find(key => MediaTypeMapping[key] === selectedAnime.category) || "Unknown"
            : "Unknown";

        const statusName = selectedAnime.status !== null
            ? Object.keys(StatusMapping).find(key => StatusMapping[key] === selectedAnime.status) || "Unknown"
            : "Unknown";

        // Get genre names using Genre enum directly
        const genreNames = selectedAnime.genres && selectedAnime.genres.length > 0
            ? selectedAnime.genres.map(genreId => {
                // Find the genre name by its value
                return Object.keys(Genre).find(
                    // @ts-ignore
                    key => Genre[key] === genreId
                ) || "Unknown";
            }).join(', ')
            : "Unknown";

        // Format release date
        const releaseDate = selectedAnime.releaseDate
            ? selectedAnime.releaseDate.toLocaleDateString()
            : "Unknown";

        // Display anime information with proper terminal bold formatting
        console.log("\x1b[1m=== ANIME INFORMATION ===\x1b[0m");
        console.log(`\x1b[1mTitle:\x1b[0m ${selectedAnime.title.replace(" (ITA)", "")}`);

        if (selectedAnime.alternativeTitle) {
            if (selectedAnime.alternativeTitle !== selectedAnime.title)
                console.log(`\x1b[1mAlternative Title:\x1b[0m ${selectedAnime.alternativeTitle.replace(" (ITA)", "")}`);
        }

        console.log(`\x1b[1mEpisodes:\x1b[0m ${selectedAnime.episodes.length}`);

        if (selectedAnime.duration) {
            console.log(`\x1b[1mEpisode Duration:\x1b[0m ${selectedAnime.duration}`);
        }

        console.log("");

        if (selectedAnime.trailer) {
            console.log(`\x1b[1mTrailer:\x1b[0m ${selectedAnime.trailer}`);
            console.log("");
        }

        console.log(`\x1b[1mStatus:\x1b[0m ${statusName}`);
        console.log(`\x1b[1mType:\x1b[0m ${categoryName}`);
        console.log(`\x1b[1mRelease Date:\x1b[0m ${releaseDate}`);

        if (selectedAnime.studio) {
            console.log(`\x1b[1mStudio:\x1b[0m ${selectedAnime.studio}`);
        }

        if (selectedAnime.rating) {
            console.log(`\x1b[1mRating:\x1b[0m ${selectedAnime.rating}/10`);
        }

        if (selectedAnime.views) {
            console.log(`\x1b[1mAnime World Views:\x1b[0m ${selectedAnime.views.toLocaleString()}`);
        }

        console.log(`\x1b[1mGenres:\x1b[0m ${genreNames}`);

        console.log("");
        console.log(`\x1b[1mAnime Link:\x1b[0m ${selectedAnime.url}`);

        if (selectedAnime.AniListURL || selectedAnime.MyAnimeListURL) {
            console.log("");
            console.log("\x1b[1mExternal Links:\x1b[0m");
            if (selectedAnime.AniListURL) console.log(` - AniList: ${selectedAnime.AniListURL}`);
            if (selectedAnime.MyAnimeListURL) console.log(` - MyAnimeList: ${selectedAnime.MyAnimeListURL}`);
        }

        if (selectedAnime.shortDescription) {
            console.log("");
            console.log("\x1b[1mShort Description:\x1b[0m");
            console.log(selectedAnime.shortDescription);
        }
    }

    else {
        console.log("Invalid command or missing arguments");
        process.exit(1);
    }
};

if (require.main === module) {
    runCLI().catch((err) => {
        console.error("Error:", err);
        process.exit(1);
    });
}
