//1351. Count Negative Numbers in a Sorted Matrix

var countNegatives = function (grid) {
  let ans = 0;
  const isArrayNegative = (nums) => {
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] >= 0) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  };
  for (let i = 0; i < grid.length; i++) {
    const index = isArrayNegative(grid[i]);
    if (index >= 0) {
      ans += grid[i].length - index;
    }
  }
  return ans;
};

const grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];

const result = countNegatives(grid);

console.log(result);
