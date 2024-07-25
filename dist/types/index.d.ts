declare const BestHoliday: {
    getHolidaysForDay: (date: Date, filters?: any) => any[];
    getHolidaysInRange: (startDate: Date, endDate: Date, filters?: {}) => {
        date: Date;
        holidays: any[];
    }[];
    searchHolidays: (query: string, year: number, filters?: any) => any[];
    getEasterRelatedHoliday: (year: number, offsetDays?: number) => Date;
    addHoliday: (holiday: any) => void;
    removeHoliday: (holidayName: any) => void;
};
export default BestHoliday;
