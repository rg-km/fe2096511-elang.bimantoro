const Stack = require("./stack");

function IsValidParentheses(s) {
  // TODO: answer here
  const stack = [];
  const characters = { ")": "(", "}": "{", "]": "[" };
  for (const char of s) {
    if (!characters[char]) {
      stack.push(char);
    } else if (stack.pop() !== characters[char]) {
      return false;
    }
  }
  return stack.length == 0 && s!=="" ? true : false;
}

module.exports = {
  IsValidParentheses,
};
