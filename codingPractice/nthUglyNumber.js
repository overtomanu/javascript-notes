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
    let curUglyNumRank=start+1,
        currentNum=mem[start-1]+1;
    while(curUglyNumRank<=n){
        //console.log(mem);
        //console.log("checking: ",currentNum);
        if(mem.indexOf(currentNum/2)!=-1 ||
          mem.indexOf(currentNum/3)!=-1 ||
          mem.indexOf(currentNum/5)!=-1){
            mem.push(currentNum);
            curUglyNumRank++;
        }
        currentNum++;
    }
    return mem[n-1];
};

let start=new Date();
console.log(nthUglyNumber(750));
let end=new Date();
console.log('Time taken (ms) :>> ', Math.abs(end-start)); // 17388 ms

start=new Date();
console.log(nthUglyNumber(751));
end=new Date();
console.log('Time taken (ms) :>> ', Math.abs(end-start)); // 228 ms

//Time taken (ms) for 1000th ugly number :>>  130274
//Incremental time taken (ms) for 1001th ugly number :>> 2009
//1000th ugly number: 51200000
//1001th ugly number: 51840000
