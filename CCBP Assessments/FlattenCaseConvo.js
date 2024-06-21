function main() {
  const nestedArray = ["Inspector", ["ANKLE", ["HIKE"]], "pawn"];
  const depth = 2;
  let result = nestedArray
    .flat(depth)
    .map((each) =>
      each.length % 2 == 0 ? each.toLowerCase() : each.toUpperCase()
    );
  console.log(result);
}

main();
