// Private data and helper functions
const holidays = [
  {
    name: "New Year's Day",
    date: (year: any) => new Date(year, 0, 1),
    type: "public",
    country: "global",
  },
  {
    name: "Christmas Day",
    date: (year: any) => new Date(year, 11, 25),
    type: "religious",
    country: "global",
  },
  {
    name: "Valentine's Day",
    date: (year: any) => new Date(year, 1, 14),
    type: "observance",
    country: "global",
  },
  {
    name: "Independence Day",
    date: (year: any) => new Date(year, 6, 4),
    type: "public",
    country: "US",
  },
  {
    name: "Halloween",
    date: (year: any) => new Date(year, 9, 31),
    type: "observance",
    country: "US",
  },
  {
    name: "Boxing Day",
    date: (year: any) => new Date(year, 11, 26),
    type: "public",
    country: "UK, Canada",
  },
  {
    name: "Canada Day",
    date: (year: any) => new Date(year, 6, 1),
    type: "public",
    country: "Canada",
  },
  {
    name: "Australia Day",
    date: (year: any) => new Date(year, 0, 26),
    type: "public",
    country: "Australia",
  },
  {
    name: "Victoria Day",
    date: (year: any) => {
      const d = new Date(year, 4, 25);
      while (d.getDay() !== 1) {
        d.setDate(d.getDate() - 1);
      }
      return d;
    },
    type: "public",
    country: "Canada",
  },
  {
    name: "Remembrance Day",
    date: (year: any) => new Date(year, 10, 11),
    type: "public",
    country: "Canada, UK",
  },
  {
    name: "St. Patrick's Day",
    date: (year: any) => new Date(year, 2, 17),
    type: "observance",
    country: "Ireland",
  },
  {
    name: "Bastille Day",
    date: (year: any) => new Date(year, 6, 14),
    type: "public",
    country: "France",
  },
  {
    name: "Cinco de Mayo",
    date: (year: any) => new Date(year, 4, 5),
    type: "public",
    country: "Mexico",
  },
  {
    name: "Groundhog Day",
    date: (year: any) => new Date(year, 1, 2),
    type: "observance",
    country: "US",
  },
];

const movableHolidays: any = [
  {
    name: "Easter Sunday",
    calculate: (year: any) => {
      // Easter calculation algorithm (Meeus/Jones/Butcher algorithm)
      const a = year % 19;
      const b = Math.floor(year / 100);
      const c = year % 100;
      const d = Math.floor(b / 4);
      const e = b % 4;
      const f = Math.floor((b + 8) / 25);
      const g = Math.floor((b - f + 1) / 3);
      const h = (19 * a + b - d - g + 15) % 30;
      const i = Math.floor(c / 4);
      const k = c % 4;
      const l = (32 + 2 * e + 2 * i - h - k) % 7;
      const m = Math.floor((a + 11 * h + 22 * l) / 451);
      const month = Math.floor((h + l - 7 * m + 114) / 31) - 1;
      const day = ((h + l - 7 * m + 114) % 31) + 1;
      return new Date(year, month, day);
    },
    type: "religious",
    country: "global",
  },
  {
    name: "Ash Wednesday",
    calculate: (year: any) => {
      const easterSunday = movableHolidays
        .find((h: any) => h.name === "Easter Sunday")
        .calculate(year);
      return addDays(easterSunday, -46);
    },
    type: "religious",
    country: "global",
  },
  {
    name: "Palm Sunday",
    calculate: (year: any) => {
      const easterSunday = movableHolidays
        .find((h: any) => h.name === "Easter Sunday")
        .calculate(year);
      return addDays(easterSunday, -7);
    },
    type: "religious",
    country: "global",
  },
  {
    name: "Pentecost",
    calculate: (year: any) => {
      const easterSunday = movableHolidays
        .find((h: any) => h.name === "Easter Sunday")
        .calculate(year);
      return addDays(easterSunday, 49);
    },
    type: "religious",
    country: "global",
  },
  {
    name: "Ascension Day",
    calculate: (year: any) => {
      const easterSunday = movableHolidays
        .find((h: any) => h.name === "Easter Sunday")
        .calculate(year);
      return addDays(easterSunday, 39);
    },
    type: "religious",
    country: "global",
  },
  {
    name: "Mother's Day",
    calculate: (year: any) => {
      const may = new Date(year, 4, 1);
      const firstSunday = new Date(may.setDate(1 + ((7 - may.getDay()) % 7)));
      const secondSunday = new Date(
        firstSunday.setDate(firstSunday.getDate() + 7)
      );
      return secondSunday;
    },
    type: "observance",
    country: "global",
  },
  {
    name: "Father's Day",
    calculate: (year: any) => {
      const june = new Date(year, 5, 1);
      const firstSunday = new Date(june.setDate(1 + ((7 - june.getDay()) % 7)));
      const thirdSunday = new Date(
        firstSunday.setDate(firstSunday.getDate() + 14)
      );
      return thirdSunday;
    },
    type: "observance",
    country: "global",
  },
  {
    name: "Thanksgiving",
    calculate: (year: any) => {
      const d = new Date(year, 10, 1);
      while (d.getDay() !== 4) {
        d.setDate(d.getDate() + 1);
      }
      d.setDate(d.getDate() + 21);
      return d;
    },
    type: "public",
    country: "US",
  },
  {
    name: "Labor Day",
    calculate: (year: any) => {
      const d = new Date(year, 8, 1);
      while (d.getDay() !== 1) {
        d.setDate(d.getDate() + 1);
      }
      return d;
    },
    type: "public",
    country: "US",
  },
  {
    name: "Memorial Day",
    calculate: (year: any) => {
      const d = new Date(year, 4, 31);
      while (d.getDay() !== 1) {
        d.setDate(d.getDate() - 1);
      }
      return d;
    },
    type: "public",
    country: "US",
  },
  {
    name: "Veterans Day",
    calculate: (year: any) => new Date(year, 10, 11),
    type: "public",
    country: "US",
  },
  {
    name: "Martin Luther King Jr. Day",
    calculate: (year: any) => {
      const d = new Date(year, 0, 1);
      while (d.getDay() !== 1) {
        d.setDate(d.getDate() + 1);
      }
      d.setDate(d.getDate() + 14);
      return d;
    },
    type: "public",
    country: "US",
  },
  {
    name: "Good Friday",
    calculate: (year: any) => {
      const easterSunday = movableHolidays
        .find((h: any) => h.name === "Easter Sunday")
        .calculate(year);
      return addDays(easterSunday, -2);
    },
    type: "religious",
    country: "global",
  },
];

function addDays(date: any, days: any) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function isSameDay(date1: any, date2: any) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

function getHolidaysForDay(date: Date, filters: any = {}) {
  const year = date.getFullYear();
  let allHolidays = [...holidays, ...movableHolidays];

  // Apply filters
  if (filters.types) {
    const typeFilter = Array.isArray(filters.types)
      ? filters.types
      : [filters.types];
    allHolidays = allHolidays.filter((h) => typeFilter.includes(h.type));
  }
  if (filters.countries) {
    const countryFilter = Array.isArray(filters.countries)
      ? filters.countries
      : [filters.countries];
    allHolidays = allHolidays.filter((h) => countryFilter.includes(h.country));
  }

  return allHolidays
    .filter((holiday) => {
      const holidayDate = holiday.calculate
        ? holiday.calculate(year)
        : typeof holiday.date === "function"
        ? holiday.date(year)
        : holiday.date;
      return isSameDay(holidayDate, date);
    })
    .map((holiday) => ({
      ...holiday,
      date: holiday.calculate
        ? holiday.calculate(year)
        : typeof holiday.date === "function"
        ? holiday.date(year)
        : holiday.date,
    }));
}

function getHolidaysInRange(startDate: Date, endDate: Date, filters = {}) {
  const result = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const holidaysForDay = getHolidaysForDay(currentDate, filters);
    if (holidaysForDay.length > 0) {
      result.push({
        date: new Date(currentDate),
        holidays: holidaysForDay,
      });
    }
    currentDate = addDays(currentDate, 1);
  }

  return result;
}

function searchHolidays(query: string, year: number, filters: any = {}) {
  const lowercaseQuery = query.toLowerCase();
  let allHolidays = [...holidays, ...movableHolidays];

  // Apply filters
  if (filters.types) {
    const typeFilter = Array.isArray(filters.types)
      ? filters.types
      : [filters.types];
    allHolidays = allHolidays.filter((h) => typeFilter.includes(h.type));
  }
  if (filters.countries) {
    const countryFilter = Array.isArray(filters.countries)
      ? filters.countries
      : [filters.countries];
    allHolidays = allHolidays.filter((h) => countryFilter.includes(h.country));
  }

  return allHolidays
    .filter(
      (holiday) =>
        holiday.name.toLowerCase().includes(lowercaseQuery) ||
        holiday.type.toLowerCase().includes(lowercaseQuery) ||
        holiday.country.toLowerCase().includes(lowercaseQuery)
    )
    .map((holiday) => ({
      ...holiday,
      date: holiday.calculate
        ? holiday.calculate(year)
        : typeof holiday.date === "function"
        ? holiday.date(year)
        : holiday.date,
    }));
}

function getEasterRelatedHoliday(year: number, offsetDays: number = 0) {
  const easterSunday = movableHolidays
    .find((h: any) => h.name === "Easter Sunday")
    .calculate(year);
  return addDays(easterSunday, offsetDays);
}

function addHoliday(holiday: any) {
  if (
    typeof holiday.date === "function" ||
    typeof holiday.calculate === "function"
  ) {
    holidays.push(holiday);
  } else {
    throw new Error("Holiday must have a date function or calculate function");
  }
}

function removeHoliday(holidayName: any) {
  const index = holidays.findIndex((h) => h.name === holidayName);
  if (index !== -1) {
    holidays.splice(index, 1);
  }
}

export {
  getHolidaysForDay,
  getHolidaysInRange,
  searchHolidays,
  getEasterRelatedHoliday,
  addHoliday,
  removeHoliday,
};
