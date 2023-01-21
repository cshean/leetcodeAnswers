/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dict = {};
    for (let i = 0; i < nums.length; i++) {
       let difference = target - nums[i];
       if (difference in dict) {
           return [dict[difference], i]
       }
       dict[nums[i]] = i;
    }
};
