function main() {
  const myArray = [1, "David", 10, { points: 97 }, 25, "alphabet", true];
  let arr = [];
  myArray.map((each) => {
    if (typeof each === "number") {
      arr.push(each * 2);
    } else {
      arr.push(typeof each);
    }
  });
  console.log(arr);
}

main();
