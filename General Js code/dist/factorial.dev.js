"use strict";

function factorialNum(n) {
  var result = [0, 1];

  for (var i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result;
}

console.log(factorialNum(20));