/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    let idxArr=new Array(k);
    let elementsArr = new Array(n);
    let result=new Array();
    for(let i=0;i<k;i++){
        idxArr[i]=i;
    }
    for(let i=0;i<n;i++){
        elementsArr[i]=i+1;
    }
    console.log("initial value:",idxArr);
    do{
        let resrow=new Array(k);
        for(let i=0;i<k;i++){
            resrow[i]=elementsArr[idxArr[i]];
        }
        console.log("pushing:",resrow);
        result.push(resrow);
    }while(getNextCombination(idxArr,n,k)!==null)
    return result;
};

function getNextCombination(idxArr,n,k){
    console.log("idxArr: ",idxArr);
    let curIdx=k-1;
    while(true){
        idxArr[curIdx]++;
        if(idxArr[curIdx]<=(n-(k-curIdx))){
            let fwdIdx=curIdx+1;
            while(fwdIdx<=k-1){
               idxArr[fwdIdx]=idxArr[curIdx]+(fwdIdx-curIdx);
               fwdIdx++;
            }
            return idxArr;
        }else{
            if(curIdx-1<0){
                return null;
            }
            curIdx--;
        }
    }
}

console.log('combine(5,2) :>> ', combine(5,2));