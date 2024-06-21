// Implicit Type Conversion (Coercion)
let num1 = 10; // num is a number
let str1 = "20"; // str is a string
let result = num1 + str1; // JavaScript coerces num to a string and performs string concatenation
console.log(result); // Output will be "1020"

// Explicit Type Conversion
// Number to String:
let num2 = 10;
let str2 = String(num2);
console.log(str2); // Output will be "10"

// String to Number:
let str3 = "20";
let num3 = Number(str3);
console.log(num3); // Output will be 20

// String to Integer:
let str4 = "25";
let intNum = parseInt(str4);
console.log(intNum); // Output will be 25

// String to Float:
let str5 = "3.14";
let floatNum = parseFloat(str5);
console.log(floatNum); // Output will be 3.14

// Boolean to String:
let bool1 = true;
let boolStr = String(bool1);
console.log(boolStr); // Output will be "true"

// Number to Boolean:
let num = 0;
let bool = Boolean(num);
console.log(bool); // Output will be false
