// MULTIPLE CONDITIONS
// Old Way
let y = 4;
if (y == 5 || y == 8 || y == 10 || y == 4) {
  console.log("Old way");
}
// New Way
if ([5, 8, 10, 4].includes(y)) {
  console.log("New way");
}

// USING OBJECTS INSTEAD OF IF_ELSE STATEMENTS
// Old Way
var elementColor = function (color) {
  if (color === "blue") {
    return "#00f";
  } else if (color === "black") {
    return "#000";
  } else if (color === "red") {
    return "#f00";
  } else if (color === "gray") {
    return "#999";
  } else if (color === "orange") {
    return "#ff6600";
  } else {
    return "#fff";
  }
};
console.log(elementColor());

// New Way
function obj(clr) {
  var colors = {
    blue: "#00f",
    black: "#000",
    red: "#f00",
    gray: "#999",
    orange: "#ff6600",
  };
  return console.log(colors[clr] || "#fff");
}
obj("blue");

// FILTER UNIQUE VALUES
const array = [0, 0, 1, 2, 3, 1, 5, 8, 2, 5];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);

// CONVERT TO BOOLEAN
const isTrue = !0;
const alsoFalse = !!0;
console.log(isTrue);
console.log(alsoFalse);

// CONVERT INT TO STRING
const vals = 5 + "";
console.log(vals);

// CONVERT STRING TO INT
let int = "15";
int = +int;
console.log(int);

// CONVERT FLOAT TO INT
const floatConvert = 20.5 | 0;
console.log(floatConvert);

// REMOVE LAST DIGIT
const removeLastDigit = (2024 / 10) | 0;
console.log(removeLastDigit);

// EVEN OR ODD WITHOUT MODULES DIVISION
let num = 3;
const result = (num & 1) === 0 ? "Even" : "Odd";
console.log(result);
