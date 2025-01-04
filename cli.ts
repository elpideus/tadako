#!/usr/bin/env node

// TODO: Finish documentation
/**
 * CLI for interacting with the Tadako application to search, select, and play anime episodes.
 *
 * This script provides a user-friendly interface for navigating anime search results and playing anime episodes.
 */

import Tadako from "./src/Tadako";
import {AudioLanguage, ItalianGenreMapping, Sorting} from "./src/enums";
import {exec, execSync, spawn} from "node:child_process";
import readline from "readline";
import path from "node:path";
import Downloader from "./src/utilities/Downloader.ts";
import * as os from "node:os";
import {MediaTypeMapping} from "./src/enums/MediaType.ts";
import {SortingMapping} from "./src/enums/Sorting.ts";
import {ItalianStatusMapping, StatusMapping} from "./src/enums/Status.ts";

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
        } else if (arg.startsWith("-") && arg.length > 1) {
            const shortFlag = arg.slice(1);
            const longFlag = shortFlagsMapping[shortFlag];
            if (longFlag) {
                currentFlag = longFlag;
                options[longFlag] = true;
            } else {
                console.warn(`Unknown short flag: -${shortFlag}`);
            }
        } else if (currentFlag) {
            options[currentFlag] = arg;
            currentFlag = null;
        }
    }

    return options;
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
    let command = args[1];

    let options = parseArgs(args.slice(2));

    // If there is no query just show the correct usage
    if (!query) {
        console.log("Usage: tadako <anime-title> <command> [--episode <episode-number>] [--language <language>] [other options]");
        process.exit(1);
    }


    if (query === "--help" || query === "-h") {
        const commands = {
            watch: "Starts playing the selected anime via mpv",
            download: "Downloads the selected anime"
        };

        const flags: { [key: string]: { short?: string, info: string, example?: string } } = {
            "--help": { info: "Displays help regarding the program" },
            "--version": { info: "Displays the current version of the program" },
            "--episode": { info: "Defines the anime episode for the command", example: "--episode 6" },
            "--language": { info: "Defines the audio language for the anime", example: "--language jp" },
            "--genre": { info: "Defines the genre for the anime search filters", example: "--genre ecchi" },
            "--season": { info: "Defines the season for the anime search filters", example: "--season winter" },
            "--year": { info: "Defines the year for the anime search filters", example: "--year 2012" },
            "--category": { info: "Defines the category for the anime search filters", example: "--category anime" },
            "--status": { info: "Defines the season for the anime search filters", example: "--status finished" },
            "--studio": { info: "Defines the studio for the anime search filters", example: "--studio TNK" },
            "--dub": { info: "Defines the dubbing for the anime search filters", example: "--dub no" },
            "--sort": { info: "Defines the sorting for the anime search filters", example: "--sort oldest" },
            "--threads": { info: "Number of threads to use for download", example: "--threads 8" },
            "--out-dir": { info: "The directory where the file(s) will be downloaded", example: "--out-dir \"C:/Users/Your Name/Desktop\"" },
            "--filename": { info: "Name of the file containing the downloaded anime video (must contain extension)", example: "--filename \"High School DxD - Episode 6.mp4\"" }
        };

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


    if (query && !command || command.startsWith("--") || command.startsWith("-")) {
        command = "watch";
        options = parseArgs(args.slice(1));
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
            else if (key.name === 'return') rl.close();

            renderEpisodesInRows(episodes.map((episode: any, index: number) => `${index + 1}`), selectedIndex, columns);
        };

        renderEpisodesInRows(episodes.map((episode: any, index: number) => `${index + 1}`), selectedIndex, columns);

        // @ts-ignore
        rl.input?.on('keypress', handleKeyPress);

        return new Promise<any>((resolve) => rl.on('close', () => resolve(episodes[selectedIndex])));
    };


    const getSelected = async () => {

        const { results } = await Tadako.search(query, {
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
        });

        if (results.length === 0) {
            console.log(`No results found for "${query}"`);
            process.exit(1);
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

        await selectedAnime.data();

        let selectedEpisode;
        // @ts-ignore
        if (!options.episode) {
            if (selectedAnime.episodes.length > 1) selectedEpisode = await selectEpisode(selectedAnime.episodes);
            else selectedEpisode = selectedAnime.episodes[0];
            // @ts-ignore
        } else selectedEpisode = selectedAnime.episodes[options.episode - 1];

        if (!selectedEpisode) {
            // @ts-ignore
            console.log(`Episode ${options.episode} not found for "${selectedAnime.title}"`);
            process.exit(1);
        }

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
        const episodeNumber = selected.selectedAnime.episodes.indexOf(selected.selectedEpisode) + 1;
        // @ts-ignore
        console.log(`"${selected.selectedAnime.title}" episode ${episodeNumber} is now playing via ${options["mpv-dir"] ?? "mpv"}\`...`);

        // @ts-ignore
        if (options["hold-cli"]) {
            // @ts-ignore
            exec(`${options["mpv-dir"] ? path.join(options["mpv-dir"], "mpv") : "mpv"} "${selected.downloadURL}"`, (err) => {
                if (err) {
                    console.error("Error executing MPV:", err);
                    return;
                }
            });
        } else {
            // @ts-ignore
            const mpvProcess = spawn(options["mpv-dir"] ? path.join(options["mpv-dir"], "mpv") : "mpv", [selected.downloadURL], {
                detached: true,
                stdio: 'ignore',
            });

            mpvProcess.unref();
        }
    }


    else if (command === "download") {
        const selected = await getSelected();
        console.clear();

        // @ts-ignore
        new Downloader(selected.downloadURL, options.filename ?? null, options["out-dir"] ?? null).downloadFile(options.threads ?? Math.ceil(os.cpus().length / 2))
            .then(() => {
                console.log("File downloaded successfully.");
                process.exit();
            })
            .catch((err) => {
                console.error("Error downloading file:", err);
                process.exit();
            });
    } else {
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
