export default class DateParser {
    public static parseItalianDate = (dateStr: string): Date | null => {
        const monthMap: Record<string, number> = {
            'Gennaio': 1,
            'Febbraio': 2,
            'Marzo': 3,
            'Aprile': 4,
            'Maggio': 5,
            'Giugno': 6,
            'Luglio': 7,
            'Agosto': 8,
            'Settembre': 9,
            'Ottobre': 10,
            'Novembre': 11,
            'Dicembre': 12
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
