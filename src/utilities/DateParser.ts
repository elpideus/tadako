export default class DateParser {
    public static parseItalianDate = (dateStr: string): Date => {
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

        const [day, month, year] = dateStr.split(' ');

        const monthNumber = monthMap[month];

        const formattedDateStr = `${year}-${monthNumber.toString().padStart(2, '0')}-${day.padStart(2, '0')}`;

        return new Date(formattedDateStr);
    }
}
