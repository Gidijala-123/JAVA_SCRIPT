function outerFunction() {
  var name = "Bhargava";
  function innerFunction() {
    console.log(`Hello ${name}..!`);
  }
  return innerFunction();
}
outerFunction(); //Hello Bhargava..!
