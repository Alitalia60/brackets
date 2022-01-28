// module.exports = function check(str, bracketsConfig) {
function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  let open = false;
  let bracketCounter = {};

  console.log("str=", str);
  console.log("config=", bracketsConfig);
  bracketsConfig.forEach((config) => {
    bracketCounter[config[0]] = 0;
  });

  // console.log("bracketCounter=", bracketCounter);

  for (let index = 0; index < str.length; index++) {
    // console.log("===", str[index]);

    let checkingSymbol = str[index];

    if (kindOfOpening(checkingSymbol, bracketsConfig) >= 0) {
      console.log("   + plus");
      bracketCounter[checkingSymbol]++;
    } else {
      // not opening brackets
      console.log("   - minus");
      let openingSymbol = getByClosing(checkingSymbol, bracketsConfig);
      bracketCounter[openingSymbol]--;
      if (bracketCounter[openingSymbol] < 0) {
        console.log("error <0");
        return false;
      }
    }
    
    // if (bracketCounter[checkingSymbol] < 0) {
      //   console.log("error <0");
      //   return false;
      // } else if (
        //   isTheSameBracket(checkingSymbol, bracketsConfig) &&
        //   Math.floor(bracketCounter[checkingSymbol] / 2) !=
        //     bracketCounter[checkingSymbol] / 2
        // ) {
          //   console.log("error /= 2");
          //   return false;
          // }
        }
        for (const key in bracketCounter) {
          if (isTheSameBracket(key, bracketsConfig)) {
            if (Math.floor(bracketCounter[key] / 2) !=  bracketCounter[key] / 2) {
        console.log("error not odd");
        return false
      }
    }
  }
  console.log("OK");
  return true;
}

function kindOfOpening(symbolOfQueue, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
    const element = bracketsConfig[i];
    if (symbolOfQueue == element[0]) {
      if (element[0] == element[1]) {
        return 0;
      } else {
        return 1;
      }
    } else {
      return -1;
    }
  }
}

function getByClosing(symbolOfQueue, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
    const element = bracketsConfig[i];
    if (symbolOfQueue == element[1]) {
      return element[0];
    }
  }
}

function isTheSameBracket(symbolOfQueue, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
    const element = bracketsConfig[i];
    if (symbolOfQueue == element[1] && symbolOfQueue == element[0]) {
      return true;
    }
  }
}

const config1 = [["(", ")"]];
const config2 = [
  ["(", ")"],
  ["[", "]"],
];
const config3 = [
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
];
const config4 = [["|", "|"]];
const config5 = [
  ["(", ")"],
  ["|", "|"],
];
const config6 = [
  ["1", "2"],
  ["3", "4"],
  ["5", "6"],
  ["7", "7"],
  ["8", "8"],
];
const config7 = [
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
  ["|", "|"],
];

// check("())(", config7);
// check("())(", config1);
// check('([{}])', config3)
// check('[(])', config2)
// check('||', config4)
check('|()|', config5)
