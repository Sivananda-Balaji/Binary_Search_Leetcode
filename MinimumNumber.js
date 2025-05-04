//153. Find Minimum in Rotated Sorted Array

var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[left] <= nums[mid]) {
      if (nums[mid] <= nums[right]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] <= nums[right]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  }
  return nums[left];
};

const nums = [3, 4, 5, 1, 2];

const result = findMin(nums);

console.log(result);
