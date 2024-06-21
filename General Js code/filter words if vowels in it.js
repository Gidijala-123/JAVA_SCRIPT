const words = ["Sword", "Myth", "Patient", "Pink"]
const result = words.filter((flt) => ['a', 'e', 'i', 'o', 'u'].some(sm => flt.includes(sm)))
console.log(result);
