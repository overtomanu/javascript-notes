const prices = [10.99, 5.99, 3.99, 6.59,10,9,8,4,5,3];
let i=1;
console.log('prices filtered and mapped :>> ', prices.filter(price=>+price>5).map(price=>{return {objno:i++,thePrice:price};}));

function findMax(...numbers){
    let max=-Infinity;
    let min=+Infinity;
    for (let number of numbers){
        //console.log('number being iterated :>> ', number);
        if( +number > max) {
            max=number;
        }
        if(+number < min) {
            min=number;
        }
    }
    return [min,max];
}

let result = findMax(...prices)
console.log('findMax(...prices) result:>> ', result);
let [minNumber,maxNumber] =  result;
console.log('minNumber, maxNumber :>> ', minNumber, maxNumber);

let listWithoutDuplicates = [];
function addToList(element){
    let found = false;
    listWithoutDuplicates.forEach(x=>{
        if(x === element){
            found=true;
        }
    })
    if(!found){
        listWithoutDuplicates.push(element);
    }
}

addToList(1);
addToList(1);
addToList(2);
addToList("testStr1");
addToList("testStr1");

console.log('listWithoutDuplicates :>> ', listWithoutDuplicates);