/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums,k=nums.length) {
    let usedPositions = Array(nums.length).fill(false);
    let currentPermutation = Array();
    let result=new Array();
    getPermutations(nums,k,usedPositions,result,currentPermutation);
    return result;
};

function getPermutations(nums,k,usedPositions,result,currentPermutation){
    let n=nums.length;
    if(currentPermutation.length===k){
        result.push(currentPermutation.slice());
        return;
    }
    for(let i=0;i<n;i++){
        if(!usedPositions[i]){
            usedPositions[i]=true;
            currentPermutation.push(nums[i]);
            getPermutations(nums,k,usedPositions,result,currentPermutation);
            currentPermutation.pop();
            usedPositions[i]=false;
        }
    }
}

console.log(permute([1,2,3,4],3));