var smallestDivisor = function(nums, t) {
    if (nums.length > t){
        return -1
    }
    let l=1
    let h=Math.max(...nums)
   
    while (h>=l){
        let mid=Math.floor((l+h)/2)
        let sum=0
        for (let i of nums){
            sum+=Math.ceil(i/mid)
            if (sum>t) break
        }
        if (sum<=t){   
            h=mid-1
        }
        else{
            l=mid+1
        }
    }
    return l
}

/////////////////////////////////////
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, t) {
    if (nums.length > t){
        return -1
    }

    let l=1
    let h=Math.max(...nums)
   
    while (h>=l){
        let mid=Math.floor((l+h)/2)
        let s=sumBy(nums,mid)
        if (s<=t){   
            h=mid-1
        }
        else{
            l=mid+1
        }
    }
    return l
}

function sumBy(nums,mid){
    let sum=0
    for (let i of nums){
        sum+=Math.ceil(i/mid)
    }
    return sum
}
