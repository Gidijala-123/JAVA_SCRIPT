function main() {
  const wordsList = ["babble", "area", "bob"];
  const myString = "b";
  let arr = [];
  wordsList.map((each) => {
    if (each.startsWith(myString) || each.endsWith(myString)) {
      arr.push(each.toUpperCase());
    } else {
      arr.push(each);
    }
  });
  console.log(arr);
}
main();
