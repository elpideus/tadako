/**
 * Utility class for parsing dates.
 */
export default class DateParser {

    /**
     * Parses an Italian date string (e.g., "1 Gennaio 2024") into a JavaScript `Date` object.
     *
     * The date string should consist of three parts: day, month (in Italian), and year.
     * The month names are mapped from Italian to their corresponding numeric values (e.g., "Gennaio" -> 1, "Febbraio" -> 2, etc.).
     * If the date string is invalid or cannot be parsed, the method returns `null`.
     *
     * @param {string} dateStr - The Italian date string to parse. Expected format: "day month year" (e.g., "1 Gennaio 2024").
     * @returns {Date | null} - A JavaScript `Date` object representing the parsed date, or `null` if the string is invalid or cannot be parsed.
     */
    public static parseItalianDate = (dateStr: string): Date | null => {
        const monthMap: Record<string, number> = {
            "Gennaio": 1,
            "Febbraio": 2,
            "Marzo": 3,
            "Aprile": 4,
            "Maggio": 5,
            "Giugno": 6,
            "Luglio": 7,
            "Agosto": 8,
            "Settembre": 9,
            "Ottobre": 10,
            "Novembre": 11,
            "Dicembre": 12
        };

        if (!dateStr) return null;
        const parts = dateStr.trim().split(' ');
        if (parts.length !== 3) return null;

        const [dayStr, monthStr, yearStr] = parts;
        const day = parseInt(dayStr, 10);
        const month = monthMap[monthStr];
        const year = parseInt(yearStr, 10);

        if (!day || !month || !year) return null;
        return new Date(year, month - 1, day);
    };
}
