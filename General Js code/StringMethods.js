console.log("Hello".charAt(4)); //o
console.log("Hello".charCodeAt(4)); //111
console.log("Hello".concat(",", "world")); //Hello,world
console.log("Hello".startsWith("H")); //true
console.log("Hello".endsWith("o")); //true
console.log("Hello".includes("x")); //false
console.log("Hello".indexOf("l")); //2
console.log("Hello".lastIndexOf("l")); //3
console.log("Hello".match(/[A-Z]/g)); //['H']
console.log("Hello".padStart(6, "?")); //?Hello
console.log("Hello".padEnd(6, "?")); //Hello?
console.log("Hello".repeat(3)); //HelloHelloHello
console.log("Hello".replace("llo", "Y")); //HeY
console.log("Hello".search("e")); //1
console.log("Hello".slice(1, 3)); //el
console.log("Hello".split("")); //[ 'H', 'e', 'l', 'l', 'o' ]
console.log("Hello".substring(2, 4)); //ll
console.log("Hello".toLowerCase()); //hello
console.log("Hello".toUpperCase()); //HELLO
console.log(" Hello ".trim()); //Hello
console.log(" Hello".trimStart()); //Hello
console.log("Hello ".trimEnd()); //Hello
