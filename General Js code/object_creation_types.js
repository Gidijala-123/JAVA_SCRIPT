var obj1 = {
   name:"abc",
   age : 25
}
console.log(obj1)

function obj2(name2, age2){
   this.name2 = name2,
   this.age2 = age2,
   this.welcome =()=>{
      console.log(`I'm ${this.name2}, im ${this.age2} years old`);
   }
}
let object2 = new obj2("bhargava",25);
object2.welcome();


class obj3{
   constructor(name3,age3){
      this.name3 = name3,
      this.age3 = age3
   }
   greet = ()=>{
         console.log(`Hi ${this.name3} your age is ${this.age3}`);
      }
}
let object3 = new obj3("priya",22);
object3.greet();
