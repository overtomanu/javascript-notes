/*
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return the nth ugly number.
/*

/**
 * @param {number} n
 * @return {number}
 */

var mem=[1,2,3,4,5,6,8,9,10,12];

var nthUglyNumber = function(n) {
    let start=mem.length;
    if(start>n){
        return mem[n-1];
    }
    
    let factor2Index=0,factor3Index=0,factor5Index=0;
    
    let i=n-1;
    while(i>-1){
        let prevFactorNum=mem[i]/2,prevIndex;
        if((prevIndex=mem.indexOf(prevFactorNum))!=-1){
            factor2Index=prevIndex+1;
            break;
        }
        i--;
    }
    
    i=n-1;
    while(i>-1){
        let prevFactorNum=mem[i]/3,prevIndex;
        if((prevIndex=mem.indexOf(prevFactorNum))!=-1){
            factor3Index=prevIndex+1;
            break;
        }
        i--;
    }
    
    i=n-1;
    while(i>-1){
        let prevFactorNum=mem[i]/5,prevIndex;
        if((prevIndex=mem.indexOf(prevFactorNum))!=-1){
            factor5Index=prevIndex+1;
            break;
        }
        i--;
    }
    
    let curUglyNumRank=start+1;
    while(curUglyNumRank<=n){
        //console.log("factor2Index,factor3Index,factor5Index:",factor2Index,factor3Index,factor5Index)
        let numF2=2*mem[factor2Index],
            numF3=3*mem[factor3Index],
            numF5=5*mem[factor5Index];
        let curUglyNum=Math.min(numF2,numF3,numF5);
        //console.log("curUglyNum:",curUglyNum);
        //console.log("numF2,numF3,numF5:",numF2,numF3,numF5)
        if(curUglyNum===numF2){
            factor2Index++;
        }
        if(curUglyNum===numF3){
            factor3Index++;
        }
        if(curUglyNum===numF5){
            factor5Index++;
        }
        mem.push(curUglyNum);
        curUglyNumRank++;
    }
    return mem[n-1];
};

let start=new Date();
console.log(nthUglyNumber(750));
let end=new Date();
console.log('Time taken (ms) :>> ', Math.abs(end-start)); // 2ms

start=new Date();
console.log(nthUglyNumber(751));
end=new Date();
console.log('Time taken (ms) :>> ', Math.abs(end-start)); // 1ms
