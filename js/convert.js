// input:  converT stRing To tItle case
// output: Convert String To Title Case

var input = "converT stRing To tItle case";

var words = input.split(" ")

//console.log(words)

for (var i = 0; i < words.length; i++){
    // converT =>C(toUppercase) => slice (1)
  words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
}
var converted = words.join(" ")

console.log(converted);