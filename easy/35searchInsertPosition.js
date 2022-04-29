/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    var low = 0;
    var high = nums.length;
    var p;

    if(target < nums[0]) return 0;
    if(target > nums[nums.length-1]) return nums.length-1;
    
    while(low !== high) {
        p = Math.floor((low + high) / 2);   

        if(nums[p] > target) {
            high = p-1;
        } else if(nums[p] < target) {
            low = p+1;
        } else {
            return p;
        }
    }
    return low;
};

console.log(searchInsert([1,3], 2))
module.exports = searchInsert;