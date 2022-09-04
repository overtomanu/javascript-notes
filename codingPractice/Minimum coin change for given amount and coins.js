/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    let n=coins.length,
        memo=new Map();
    
    if(amount===0){
        return 0;
    }
    
    function calcminchange(amount){
        let result=memo.get(amount);
        if(result!==undefined){
            return result;
        }
        let minchange=Number.MAX_VALUE;
        let doesChangeExist=false;
        //console.log("calculating for: ", amount);
        for(let i=0;i<n;i++){
            let curAmount=amount-coins[i];
            if(curAmount<0){
                continue;
            }
            
            if(curAmount>0){
                calcminchange(curAmount);
                let subsequentChange=memo.get(curAmount);
                if(subsequentChange!==-1){
                    doesChangeExist=true;
                    if(minchange>subsequentChange){
                        minchange=subsequentChange;
                    }
                }
            }
            if(curAmount===0){
                //doesChangeExist=true;
                memo.set(amount,1);
                //console.log("setting for amount:",amount,1);
                return;
            }
        }
        if(!doesChangeExist){
            memo.set(amount,-1);
            //console.log("setting for amount:",amount,-1);
        }else{
            memo.set(amount,1+minchange);
            //console.log("setting for amount:",amount,1+minchange);
        }
    }
    calcminchange(amount);
    return memo.get(amount);
};

console.log('coinChange([1,2,5],100) :>> ', coinChange([1,2,5],100));
