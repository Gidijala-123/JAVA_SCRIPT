function main() {
  const wordsList = ["Sword", "Myth", "Patient", "Rhythm"];
  const vowelsList = ["a", "e", "i", "o", "u"];

  const result = wordsList.filter((fltr) => {
    for (const eachVowel of vowelsList) {
      if (fltr.indexOf(eachVowel) != -1) {
        return true;
      }
    }
    return false;
  });
  console.log(result);
}
main();

