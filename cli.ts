#!/usr/bin/env node

import Tadako from "./src/Tadako";
import { AudioLanguage, Sorting } from "./src/enums";
import {exec, spawn} from "node:child_process";
import readline from "readline";

const parseArgs = (args: string[]) => {
    const options: { [key: string]: any } = {};
    let currentFlag = null;

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg.startsWith("--")) {
            currentFlag = arg.slice(2);
            options[currentFlag] = true;
        } else if (currentFlag) {
            options[currentFlag] = arg;
            currentFlag = null;
        }
    }

    return options;
};

const renderOptions = (options: string[], selectedIndex: number, visibleCount: number) => {
    const terminalHeight = process.stdout.rows;
    const startIndex = Math.max(0, selectedIndex - Math.floor(terminalHeight / 2));
    const visibleOptions = options.slice(startIndex, startIndex + visibleCount);

    console.clear();
    let output = '';
    for (let i = 0; i < visibleOptions.length; i++) {
        const actualIndex = startIndex + i;
        const prefix = actualIndex === selectedIndex ? "\x1b[32m●\x1b[0m" : " ";
        const optionText = actualIndex === selectedIndex ? `\x1b[32m${visibleOptions[i]}\x1b[0m` : visibleOptions[i];
        output += `${prefix} ${optionText}\n`;
    }
    process.stdout.write(output);
};

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
        const prefix = isSelected ? "\x1b[32m●\x1b[0m" : " ";
        output += `${prefix} ${isSelected ? `\x1b[32m${visibleEpisodes[i]}\x1b[0m` : visibleEpisodes[i]} `;
        if ((i + 1) % columns === 0) output += '\n';
    }
    process.stdout.write(output);
};

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

const runCLI = async () => {
    const args = process.argv.slice(2);
    const query = args[0];
    let command = args[1];

    let options = parseArgs(args.slice(2));

    if (!query) {
        console.log("Usage: tadako <anime-title> <command> [--episode <episode-number>] [--language <language>] [--other-options]");
        process.exit(1);
    }

    if (query && !command || command.startsWith("--")) {
        command = "watch";
        options = parseArgs(args.slice(1));
    }

    if (command === "watch") {
        const { results } = await Tadako.search(query, {
            genre: options.genre || null,
            season: options.season || null,
            year: options.year || null,
            type: options.type || null,
            studio: options.studio || null,
            language: options.language || AudioLanguage.ITALIAN,
            sort: options.sort || Sorting.OLDEST,
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
        if (!options.episode) {
            if (selectedAnime.episodes.length > 1) selectedEpisode = await selectEpisode(selectedAnime.episodes);
            else selectedEpisode = selectedAnime.episodes[0];
        } else selectedEpisode = selectedAnime.episodes[options.episode - 1];

        if (!selectedEpisode) {
            console.log(`Episode ${options.episode} not found for "${selectedAnime.title}"`);
            process.exit(1);
        }

        const downloadURL = await selectedEpisode.getDownloadURL();
        if (!downloadURL) {
            console.log(`No download URL found for episode ${options.episode}`);
            process.exit(1);
        }

        if (options.holdterm) {
            exec(`mpv "${downloadURL}"`, (err) => {
                if (err) {
                    console.error("Error executing MPV:", err);
                    return;
                }
            });
        } else {
            const mpvProcess = spawn('mpv', [downloadURL], {
                detached: true,
                stdio: 'ignore',
            });

            mpvProcess.unref();

            console.clear();
            console.log(`"${selectedAnime.title}" episode ${options.episode ?? 1} is now playing...`);
        }
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
