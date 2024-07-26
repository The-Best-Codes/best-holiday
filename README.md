[![npm version](https://img.shields.io/npm/v/best-holiday.svg)](https://www.npmjs.com/package/best-holiday)
[![npm downloads](https://img.shields.io/npm/dm/best-holiday.svg)](https://www.npmjs.com/package/best-holiday)
[![npm license](https://img.shields.io/npm/l/best-holiday.svg)](https://www.npmjs.com/package/best-holiday)

## `best-holiday`

Holidays and JavaScript; now Customizable and Effortless

<img src="https://github.com/The-Best-Codes/best-holiday/blob/main/.image/Best-Holiday-Logo.png?raw=true" alt="logo" for="cover" />

## About

Best-Holiday aims to make it easier for developers to interact with holidays in their applications. Best-Holiday can be used via the npm package or through the CDN for browser use.

The list of holidays can be found in [src/index.ts](https://github.com/The-Best-Codes/best-holiday/blob/main/src/index.ts). Holidays have four attributes:

- `name`: Name of the holiday
- `date`: Date of the holiday
- `country`: Country where the holiday is
- `type`: Type of the holiday

## Installation

Installing Best-Holiday is simple.

**npm**
In your project directory, run:

```bash
npm install best-holiday
```

**yarn**
In your project directory, run:

```bash
yarn add best-holiday
```

If you want to use Best-Holiday in the browser environment, include this script tag in your HTML document:

```html
<script src="https://cdn.jsdelivr.net/npm/best-holiday@latest/dist/browser/best-holiday.min.js"></script>
```

## Usage

The Best-Holiday package currently exports six main functions:

- `getHolidaysForDays`: Returns an array of holidays for a given date
- `getHolidaysInRange`: Returns an array of holidays for a given range
- `searchHolidays`: Returns an array of holidays for a given search query
- `getEasterRelatedHoliday`: Returns the Easter related holiday
- `addHoliday`: Adds a new holiday
- `removeHoliday`: Removes a holiday

For more detailed information about usage, refer to the [Wiki](https://github.com/The-Best-Codes/best-holiday/wiki).

## License

[GPL-3.0-or-later](https://github.com/The-Best-Codes/best-holiday/blob/main/LICENSE)

## Contributors

- [The-Best-Codes](https://github.com/The-Best-Codes)

---

&copy; 2024 [The-Best-Codes](https://github.com/The-Best-Codes)
