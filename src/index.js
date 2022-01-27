// module.exports = function check(str, bracketsConfig) {
function check(str, bracketsConfig) {
  // your solution

  // let openingBrackets=[]
  // let closingBrackets=[]
  let pairCounter = {};

  bracketsConfig.forEach((config) => {
    
    openBracketCounter[config[0]] = 0;
    closeBracketCounter[config[1]] = 0;
  });

  for (let index = 0; index < str.length; index++) {
    if (openBracketCounter[str[index]]) {
      openBracketCounter[str[index]]++;
    }
    if (openBracketCounter[str[index]] < 0) {
      console.log("error on index = ", index);
    }
    if (closeBracketCounter[str[index]]) {
      closeBracketCounter[str[index]]++;
    }
  }
}

// check('()', [['(', ')']])
const str = "()";
const config = [["(", ")"]];

check(str, config);
