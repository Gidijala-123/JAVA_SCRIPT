function main(callback_as_arg) {
  console.log("Main function..!");
  callback_as_arg();
}
// callback function
function callbackFunc() {
  console.log("Call back function executed");
}
// passing callback func as arugument in main func
main(callbackFunc);
// Output
// Main function..!
// Call back function executed
