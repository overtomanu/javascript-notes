/* This is code is failed attempt, fails for first example */
/* need to consider all possible longest common subsequences */

/*
Difficulty: Hard
leetcode: 72. Edit Distance
Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character
 

Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

*/


/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    //get longest common subsequence indexes
    //for each pair of index in common subsequnce, include maximum difference from previous index
    
    //calculate indexes from word1 and word2 which are part of longest common subsequence

    //no need to swap, done just for testing
    let temp=word1;
    word1=word2;
    word2=temp;
    
    let m=word1.length,
        n=word2.length,
        curdp=new Array(n+1),
        prevdp=new Array(n+1).fill([]);
    curdp[0]=[];
    
    for(let i=0;i<m;i++){
        //console.log("prevdp:",prevdp);
        for(let j=0;j<n;j++){
            if(word1[i]===word2[j]){
                curdp[j+1]=prevdp[j].slice();
                curdp[j+1].push([i,j]);
            }else{
                if(curdp[j].length>prevdp[j+1].length){
                    curdp[j+1]=curdp[j].slice();
                }else{
                    curdp[j+1]=prevdp[j+1].slice();
                }
            }
        }
        //console.log("curdp:",curdp);
        let temp=prevdp;
        prevdp=curdp;
        curdp=prevdp;
    }
    //array of pair of matching indexes from word1 and word2 which ultimately form longest common subsequence
    let commonIdxArr=prevdp[n];
    
    console.log("common indexes:",commonIdxArr);
    
    let clen=commonIdxArr.length;
    
    if(clen===0){
        return Math.max(m,n);
    }
    
    let result=0;
    
    commonIdxArr.unshift([-1,-1]);
    commonIdxArr.push([m,n]);
    
    //loop through the common indexes and figure out the minimum number of operations
    //no of operations required is difference between current common index pair and previous pair
    //we have to also loop through find if there is any other occurence of current common character before next common index pair
    //this has to be done as i am not considering all longest common subsequence
    //fg: for "intention", "execution" you have to first consider first e and then second e in "execution"

    for(let i=1;i<=clen;i++){
        let curMinNoOps=Number.MAX_SAFE_INTEGER,
            curandNextMinops=Number.MAX_SAFE_INTEGER;
        
        let i1=commonIdxArr[i][0];
        
        while(i1!==-1){
            let i2=commonIdxArr[i][1];
            while(i2!==-1){
                console.log("i1,i2:",i1,i2);
                let noOfOps=Math.max(i1-commonIdxArr[i-1][0],
                        i2-commonIdxArr[i-1][1])-1;
                console.log("noOfOps,curMinNoOps,result:",noOfOps,curMinNoOps,result);
                let curAndNextOps=noOfOps+Math.max(commonIdxArr[i][0]-i1,
                        commonIdxArr[i-1][1]-i2)-1;
                if(curandNextMinops>curAndNextOps){
                    curandNextMinops=curAndNextOps;
                    curMinNoOps=noOfOps;
                    commonIdxArr[i][0]=i1;
                    commonIdxArr[i][1]=i2;
                }
                let nextIdx=word2.substring(i2+1,commonIdxArr[i+1][1]).indexOf(word2[commonIdxArr[i][1]]);
                if(nextIdx===-1){
                    i2=-1;
                }else{
                    i2+=nextIdx+1;
                }
            }
            console.log("checking in substring:",word1.substring(i1+1,commonIdxArr[i+1][0]));
            console.log("for : ",word1[commonIdxArr[i][0]]);
            let nextIdx=word1.substring(i1+1,commonIdxArr[i+1][0]).indexOf(word1[commonIdxArr[i][0]]);
            if(nextIdx===-1){
                i1=-1;
            }else{
                i1+=nextIdx+1;
            }
        }
        result+=curMinNoOps;
    }
    console.log("final common indexes:",commonIdxArr);
    result+=Math.max(m-commonIdxArr[clen][0],n-commonIdxArr[clen][1])-1;
    return result;
};

console.log('*******minDistance("intention","execution") :>> ', minDistance("intention","execution"));
console.log('minDistance("horse","ros") :>> ', minDistance("horse","ros"));