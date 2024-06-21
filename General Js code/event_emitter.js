const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("greet", (name) => {
  console.log(`Hello ${name}..!`);
});
myEmitter.on("place", (place) => {
  console.log(`Im from ${place}`);
});

myEmitter.emit("greet", "Bhargava");
myEmitter.emit("place", "Chennai");
