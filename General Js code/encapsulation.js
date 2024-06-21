class userDetails {
  constructor(name, age, phno) {
    this.name = name;
    this.age = age;
    this.phno = phno;
  }
}

class employeeDetails extends userDetails {
  #password;
  constructor(name, age, phno, password) {
    super(name, age, phno);
    this.#password = password;
  }
  getPassword() {
    return this.#password;
  }
  setPassword() {
    this.#password = password;
  }
}

const staffDetails = new employeeDetails("Bhargava", 25, 900909090, "gbr@123");
console.log(staffDetails);
console.log(staffDetails.getPassword());
