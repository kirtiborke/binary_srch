var findLHS = function(nums) {
    const hashmap = {};
    let output = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (!hashmap[nums[i]]) hashmap[nums[i]] = 0;
        hashmap[nums[i]]++;
        
        const subsequences1 = hashmap[nums[i] - 1] ? hashmap[nums[i]] + hashmap[nums[i] - 1] : 0;
        const subsequences2 = hashmap[nums[i] + 1] ? hashmap[nums[i]] + hashmap[nums[i] + 1] : 0;
        output = Math.max(output, subsequences1, subsequences2);
    }
    
    return output;
};