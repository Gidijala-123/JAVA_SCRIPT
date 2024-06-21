let givenString = 'b'
let arr = ['abc','bbb','cab','pipe','bat']
let printableArr = []
const result = arr.map(each =>{
   each.startsWith(givenString) || each.endsWith(givenString) ? printableArr.push(each.toUpperCase()) : printableArr.push(each.toLowerCase())
})
console.log(printableArr)
