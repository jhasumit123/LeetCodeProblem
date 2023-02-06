/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
    var hashmap = new Map();
    for (var i = 0; i < nums.length; i++) {
        hashmap.set(nums[i], i);
    }
    for (var i = 0; i < nums.length; i++) {
        var firstNum = nums[i];
        var re = target - firstNum;
        if (hashmap.has(re)) {
            var ind = hashmap.get(re);
            if (ind !== i) {
                return [i, ind];
            }
        }
    }
}