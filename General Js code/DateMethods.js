// Date.now()
// It returns current time in milliseconds
const currentTime = Date.now();
console.log(currentTime); //1708776694881

// date.getDate()
// A number is returned that represents day of the month
const date = new Date();
const currentDay = date.getDate();
console.log(currentDay); //24

// Date.getYear()
// It is used to determine the current year.
// It returns a number that represents the year
const date2 = new Date();
const currentYear = date.getFullYear();
console.log(currentYear); //2024

// Date.toLocaleString()
// It returns a string representing current time and date in local time zone
// As optional arguments, it accepts locales, options, and timezone
const normalDate = new Date();
const localDateString = date.toLocaleDateString();
// Example
const localeOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  minute: "numeric",
  second: "numeric",
};
// Date in english format
const localDateString2 = date.toLocaleString("en-us", localeOptions);
console.log(localDateString); //24/2/2024

// Date.parse()
// It convert date into milliseconds.
// Result is a number that represents millisecond version of date
const milliSecondVersion = Date.parse("January 10,2024");
console.log(milliSecondVersion); //1704825000000
