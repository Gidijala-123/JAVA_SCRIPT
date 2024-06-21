/* // // // const arr = [1, 2, 3, 4, 5, 6];
// // const stdDetails = [{
// //    name: "priya",
// //    points: [78, 75, 88, 90]
// // }, {
// //    name: "sri",
// //    points: [23, 88, 66, 90]
// // }, {
// //    name: "nami",
// //    points: [77, 87, 94, 88]
// // }]
// // const arr = []
// // const results = stdDetails.map((each)=>each.points.every((evy)=>evy >=75)?arr.push(each.name):'')
// const word1 = 'ate'
// const word2 = 'eatt'
// const anagrams = word1.split('').sort().join("") === word2.split('').sort().join("")
// console.log(anagrams)
const data = [1,"abc",2,'bca',3,'eee']
const dataType = data.map((each)=>typeof(each) === "number" ? each*each:typeof(each))
console.log(dataType)
//  */
// const wordsList = ['Sword', 'Myth', 'Patient', 'Rhythm'];
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// const result = wordsList.filter((flt) => vowels.some((sm) => flt.includes(sm)))
// console.log(result);

// const arr = [1, 2, 3, 5, 2, 3, 1, 5, 6, 7, 8];
// const countObj = arr.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {});
// const res = [{"jakjlj":"kljljlkjl"},{"kljljlj":"kljkljlj"}]
// console.log(countObj);
// const dataType = data.map((each) => typeof (each) === "number" ? each * each : typeof (each))

const crypto = require("crypto");
const message = "hello bhargava";
const secretKey = "abc@123";
const encryptedText = crypto.createCipher("aes-256-gcm", secretKey);
console.log(encryptedText);

