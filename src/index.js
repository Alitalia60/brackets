module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for (let index = 0; index < str.length; index++) {
    let symbol = str[index];
    if (isOpening(symbol, bracketsConfig, stack)) {
      stack.push(symbol);
    } else {
      if (symbol != getClosing(stack.pop(), bracketsConfig)) {
        return false;
        break;
      }
    }
  }
  return stack.length == 0 ? true : false;
};

function isOpening(bracket, arrayOfConfig, stack) {
  let lastPushing = getClosing(stack[stack.length - 1], arrayOfConfig);
  if (lastPushing == bracket) return false;
  for (let i = 0; i < arrayOfConfig.length; i++) {
    const config = arrayOfConfig[i];
    if (config[0] == bracket) {
      return true;
    }
  }
  return false;
}

function getClosing(bracket, arrayOfConfig) {
  for (let i = 0; i < arrayOfConfig.length; i++) {
    const config = arrayOfConfig[i];
    if (config[0] == bracket) {
      return config[1];
    }
  }
  return undefined;
}
