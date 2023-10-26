export const twoSum = function (nums, target) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];
    if (x in hashMap) {
      return [i, hashMap[x]];
    }
    if (!(nums[i] in hashMap)) {
      hashMap[nums[i]] = i;
    }
  }
};
