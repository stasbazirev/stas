# Date Utility

Date Utility is a simple JavaScript library for working with dates, including parsing, formatting, comparing, and manipulating dates.

## Installation

You can install the Date Utility via npm:

```
npm install date-utility
```

## Usage

```javascript
const dateUtility = require('date-utility');

// Parse a date string into a Date object
const parsedDate = dateUtility.parseDate('2024-05-07');
console.log(parsedDate); // Output: Mon May 07 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

// Format a Date object into a string
const formattedDate = dateUtility.formatDate(new Date(), 'MM/dd/yyyy');
console.log(formattedDate); // Output: 05/07/2024

// Compare two Date objects
const date1 = new Date('2024-05-07');
const date2 = new Date('2024-05-07');
const isEqual = dateUtility.compareDates(date1, date2);
console.log(isEqual); // Output: true

// Add days to a Date object
const originalDate = new Date('2024-05-07');
const newDate = dateUtility.addDays(originalDate, 3);
console.log(newDate); // Output: Thu May 10 2024 00:00:00 GMT+0000 (Coordinated Universal Time)
```

## API

### `parseDate(dateString: string): Date`

Parses a date string into a Date object.

### `formatDate(date: Date, format: string): string`

Formats a Date object into a string using the specified format. The default format is 'yyyy-MM-dd'.

### `compareDates(date1: Date, date2: Date): boolean`

Compares two Date objects and returns true if they are equal, false otherwise.

### `addDays(date: Date, days: number): Date`

Adds the specified number of days to a Date object and returns a new Date object.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

