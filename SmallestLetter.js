//744. Find Smallest Letter Greater Than Target

var nextGreatestLetter = function (letters, target) {
  let left = 0,
    right = letters.length - 1,
    ans = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (letters[mid] > target && letters[mid] !== target) {
      ans = letters[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans === -1 ? letters[0] : ans;
};

const letters = ["c", "f", "j"],
  target = "a";

const result = nextGreatestLetter(letters, target);

console.log(result);
