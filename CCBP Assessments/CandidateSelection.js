function main() {
  const candidatesList = [
    { name: "Priya", points: [76, 98, 88, 84] },
    { name: "Sri", points: [0, 45, 88, 87] },
    { name: "Nami", points: [91, 85, 82, 907] },
  ];
  const arr = [];
  candidatesList.map((each) =>
    each.points.every((evy) => evy > 75) ? arr.push(each.name) : ""
  );
  console.log(arr);
}
main();
