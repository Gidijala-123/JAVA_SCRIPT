// GROUP MULTIPLE CONSOLES
console.group("Songs Group");
console.log("Telugu");
console.log("Hindi");
console.log("English");
console.log("Tamil");
console.groupEnd();

// DISPLAY OBJECTS AS TABLE
var animals = [
  { animal: "Dog", name: "puppy", age: 12 },
  { animal: "Cat", name: "Meow", age: 10 },
  { animal: "Cow", name: "Nandi", age: 22 },
];
console.table(animals);

// LOG MULTIPLE ITEMS
const fruits = { name: "Apple", cost: 50, id: 12121 };
const person = { name: "Bhargava", age: 20, id: 23232 };
console.log({ fruits, person });
