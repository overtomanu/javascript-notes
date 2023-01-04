let moment = require('moment');

// reference https://momentjs.com/

let createdDate = moment(new Date()).utc().format();
let expirationDate = moment(createdDate).add(1, 'd');
console.log('createdDate :>> ', createdDate);
console.log('expirationDate :>> ', expirationDate);

// printing date in particular format
console.log('expirationDate.format("YYYY-MM-DD") :>> ', expirationDate.format("YYYY-MM-DD"));

// initializing date from a date string in particular format
console.log('moment("1950-01-01", "YYYY-MM-DD") :>> ', moment("1950-01-01", "YYYY-MM-DD"));