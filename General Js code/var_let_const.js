var vname = "this is var";
function vfun(){
   vname = "var inside function";
   console.log(vname);
   var age = 25
   console.log(age)
}
vfun();
console.log(vname);
// console.log(age);
console.log();

let lname = "this is let";
function lfun(){
   lname = "let inside function";
   console.log(lname);
   let age = 25
   console.log(age)
}
lfun();
console.log(lname);
// console.log(age);
console.log();


const cname = "this is const";
function cfun(){
   const cname = "const inside function";
   console.log(cname);
   const age = 25
   console.log(age)
}
cfun();
console.log(cname);
// console.log(age);
