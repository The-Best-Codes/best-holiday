declare function getHolidaysForDay(date: Date, filters?: any): any[];
declare function getHolidaysInRange(startDate: Date, endDate: Date, filters?: {}): {
    date: Date;
    holidays: any[];
}[];
declare function searchHolidays(query: string, year: number, filters?: any): any[];
declare function getEasterRelatedHoliday(year: number, offsetDays?: number): Date;
declare function addHoliday(holiday: any): void;
declare function removeHoliday(holidayName: any): void;
export { getHolidaysForDay, getHolidaysInRange, searchHolidays, getEasterRelatedHoliday, addHoliday, removeHoliday, };
