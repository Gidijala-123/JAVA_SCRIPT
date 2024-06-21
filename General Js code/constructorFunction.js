// Using constructor
//function name should be capital
class User {
  constructor(name) {
    this.name = name;
    this.isAdmin = true;
  }
}
let user = new User("BhargavaG");
console.log(user.name);
