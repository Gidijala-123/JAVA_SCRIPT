"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var arr = [1, "gbr", 10, {
  points: 33
}, 44, true];
var empArr = [];
var result = arr.map(function (each) {
  typeof each === "number" ? empArr.push(each * 2) : empArr.push(_typeof(each));
});
console.log(empArr);