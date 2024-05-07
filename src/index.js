// date-utility.js

const dateUtility = {
    // Parse a date string into a Date object
    parseDate: function(dateString) {
      return new Date(dateString);
    },
  
    // Format a Date object into a string
    formatDate: function(date, format = 'yyyy-MM-dd') {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
  
      return format
        .replace('yyyy', year)
        .replace('MM', month)
        .replace('dd', day);
    },
  
    // Compare two Date objects
    compareDates: function(date1, date2) {
      return date1.getTime() === date2.getTime();
    },
  
    // Add days to a Date object
    addDays: function(date, days) {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }
  };
  
  module.exports = dateUtility;
  