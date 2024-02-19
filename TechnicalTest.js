const findLongestPrefix = (arr) => {
  if (arr.length > 200) return "array length > 200";

  if (arr.every(isLengthIndex)) return "value length > 200";

  if (!arr.length) return "";

  const newArr = arr.map(toLower);

  for (let i = 0; i < newArr[0].length; i++) {
    const char = newArr[0][i];
    for (let j = 1; j < newArr.length; j++) {
      if (i >= newArr[j].length || newArr[j][i] !== char) {
        return newArr[0].substring(0, i);
      }
    }
  }
  return newArr[0];
};

const isLengthIndex = (arr) => arr.length > 200;
const toLower = (arr) => arr.toLowerCase();

const strs1 = ["flower", "flow", "flight"];
const strs2 = ["dog", "racecar", "car"];

console.log("Example 1:");
console.log("Input: strs = ", strs1);
console.log("Output:", findLongestPrefix(strs1));

console.log("Example 2:");
console.log("Input: strs = ", strs2);
console.log("Output:", findLongestPrefix(strs2));
console.log("Explanation: There is no common prefix among the input strings.");
