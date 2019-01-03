function partition (nums, start, end) {
    let pivot = nums[start];
    while (start < end) {
        while (start < end && pivot <= nums[end]) {
            end--;
        }
        nums[start] = nums[end];
        while (start < end && pivot >= nums[start]) {
            start++;
        }
        nums[end] = nums[start];
    }
    nums[start] = pivot;
    return start;
}


function helper(nums, start, end, k) {
    if (start === end) {
        return nums[start];
    }
    let position = partition(nums, start, end);
    if (position + 1 === k) {
        return nums[position];
    } else if (position + 1 < k) {
        return helper(nums, position + 1, end, k);
    } else {
        return helper(nums, start, position - 1, k);
    }
}

// the findKthLargest applied the Quick Select 
function findKthLargest1(nums, k) {
    if (nums === undefined || nums.length === 0) {
        return undefined;
    }
    return helper (nums, 0, nums.length - 1, nums.length + 1 - k);
};

function findKthLargest2(nums, k) {
    nums.sort((a, b) => b - a);
    let prev = nums[0];
    for (let i = 1; i < nums.length && k > 1; i++) {
        if (prev !== nums[i]) {
            k--;
        }
    }
    return prev;
}

module.exports = {
    findKthLargest1,
    findKthLargest2,
}