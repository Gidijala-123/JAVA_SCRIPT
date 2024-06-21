let fruits = ['apple','banana','grapes','mango','papaya','apple','mango','apple'];
let nums = [1,2,3,4,5,6,7,8,9,1,4,6,9];

let fltr = nums.filter((each) => each % 2 == 0);
console.log("fltr :",fltr);

let sum = nums.filter(each => each%2==0).reduce((acc,cval) => acc+cval);
console.log("sum :",sum);

let evenNum=0;
let red1=nums.filter(x=>{
   if(x%2==0){
     evenNum=evenNum+x;
   }
})
console.log("evenNum :",evenNum)

// To print unique numbers
// let uniqueVals = fruits.map((each)=>  each).filter((curr,idx,arr)=>arr.indexOf(curr) === idx)
// console.log(uniqueVals);
let lst=[];
for(let i = 0;i<=fruits.length-1;i++){
   lst.includes(fruits[i]) ? '': lst.push(fruits[i]);
}
console.log(lst)

console.log(...nums);


let stop = 0;
let timeOut = setInterval(function(){
   stop= stop+1;
},1000);

// if(stop === 2){
//    clearInterval(timeOut)
// }
