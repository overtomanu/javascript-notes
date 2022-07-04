//"use strict"; //doesn't work in nodejs, TODO: figure out why
//javascript basics from
//introduction to javascript for developers by Java Brains, Koushik kothagal
//javascript course by maximillian schwarzmuller
//sololearn

//either run js file directly with node
//OR
//open index.html in browser and run

//console.clear();  //not working when run from terminal using node js

console.log("javascriptBasics START");
console.log("Hello world");

console.log(`
can declare variables twice in the same scope using var keyword
------------------------------
var name1="Max";
console.log('name1 :>> ', name1);
var name1="Manvoo";
console.log('name1 :>> ', name1);
`);

var name1="Max";
console.log('name1 :>> ', name1);
var name1="Manvoo";
console.log('name1 :>> ', name1);

var num1=1;
var str1="Hello";
var str2="world";
var str3=str1+" "+str2;
var str4=str1+num1;
var x="50";
var y="100";

console.log(`
var num1=1;
var str1="Hello";
var str2="world";
var str3=str1+" "+str2;
var str4=str1+num1;
var x="50";
var y="100";
x+y with x="50" and y="100":>> `, x+y);
console.log('4+"5" :>> ', 4+"5");
console.log('4+ +"5" :>> ', 4+ +"5");
console.log('3 * "4" :>> ', 3 * "4");
console.log('4/"4" :>> ', 4/"4");

console.log('+x + +y :>> ', +x + +y);
console.log('parseInt(x)+parseInt(y) :>> ', parseInt(x)+parseInt(y));

var x="10.5 test";
var y="11.7 string2";
console.log(`
var x="10.5 test";
var y="11.7 string2";
parseFloat(x)+parseFloat(y) :>> `, parseFloat(x)+parseFloat(y));

console.log('+x + +y :>> ', +x + +y);
var x="10.5";
var y="11.7 ";
console.log(`
var x="10.5";
var y="11.7 ";
+x + +y :>> `, +x + +y);

console.log(`
//Javascript String is immutable
//String is a primitive type in javascript
//primitive types are copied by value on assignment to variables
------------------------
let string753 = "AAaaBB";
let string853 = string753;
//replace returns new string, and does not modify existing string
let replacedString = string753.replaceAll("A", "C");
console.log('string753 :>> ', string753);
console.log('string853 :>> ', string853);
console.log('replacedString :>> ', replacedString);
`);
//Javascript String is immutable
//String is a primitive type in javascript
//primitive types are copied by value on assignment to variables
//string is dynamically transformed to pseudo object when you access properties like length
let string753 = "AAaaBB";
let string853 = string753;
//replace returns new string, and does not modify existing string
let replacedString = string753.replaceAll("A", "C");
console.log('string753 :>> ', string753);
console.log('string853 :>> ', string853);
console.log('replacedString :>> ', replacedString);

var x=50;
var y=100;
console.log(`var x=50;
var y=100;
x+y with x=50 and y=100:>> `, x+y);
console.log("x.toString()+y.toString() :>> ", x.toString()+y.toString());

console.log('3 * 4 :>> ', 3 * 4);
console.log('3 ** 4 :>> ', 3 ** 4);
console.log('4/4 :>> ', 4/4);
console.log('10 % 7 :>> ', 10 % 7);
console.log('Infinity :>> ', Infinity);
console.log('999999 > Infinity :>> ', 999999 > Infinity);
console.log('5/0 :>> ', 5/0);
console.log('Number.isFinite(10) :>> ', Number.isFinite(10));
console.log('Number.isFinite(Infinity) :>> ', Number.isFinite(Infinity));
console.log('Number.isFinite(-Infinity) :>> ', Number.isFinite(-Infinity));

console.log(`
Numbers in javascript
--------------------
every number in javascript is a floating point number. It doesn't have separate special type 
for integers.
javascript internally stores number in binary ( base 2 ) format. so some fractions/decimals cannot be represented perfectly.
console.log('0.2+0.4 :>> ', 0.2+0.4);  // 0.6000000000000001
console.log('0.2+0.4 === 0.6 :>> ', 0.2+0.4 === 0.6);;  // false
console.log('20.2 :>> ', 20.2);
console.log('20.2.toFixed(20) :>> ', 20.2.toFixed(20)); //show unrounded value from binary system
console.log('(0.2+0.4).toFixed(2) === 0.6.toFixed(2) :>> ', (0.2+0.4).toFixed(2) === 0.6.toFixed(2));
console.log('Number.MAX_VALUE :>> ', Number.MAX_VALUE);
console.log('Number.MAX_SAFE_INTEGER :>> ', Number.MAX_SAFE_INTEGER);
//using bigint to represent very large number
//append "n" at the end of number to indicate that this is bigint
//doesnt support decimals, only support intergers which can be large
console.log('900713543537456349573984593458n :>> ', 900713543537456349573984593458n);
//cannot mix bigint and normal numbers
console.log('10n-4n :>> ', 10n-4n);
console.log('10n-BigInt(5) :>> ', 10n-BigInt(5));
//10n-4 will give TypeError
console.log('parseInt(10n)-4 :>> ', parseInt(10n)-4);
console.log('5n/2n :>> ', 5n/2n);
`);
console.log('0.2+0.4 :>> ', 0.2+0.4);  // 0.6000000000000001
console.log('0.2+0.4 === 0.6 :>> ', 0.2+0.4 === 0.6);;  // false
console.log('20.2 :>> ', 20.2);
console.log('20.2.toFixed(20) :>> ', 20.2.toFixed(20)); //show unrounded value from binary system
console.log('(0.2+0.4).toFixed(2) === 0.6.toFixed(2) :>> ', (0.2+0.4).toFixed(2) === 0.6.toFixed(2));
console.log('Number.MAX_VALUE :>> ', Number.MAX_VALUE);
console.log('Number.MAX_SAFE_INTEGER :>> ', Number.MAX_SAFE_INTEGER);
//using bigint to represent very large number
//append "n" at the end of number to indicate that this is bigint
//doesnt support decimals, only support intergers which can be large
console.log('900713543537456349573984593458n :>> ', 900713543537456349573984593458n);
//cannot mix bigint and normal numbers
console.log('10n-4n :>> ', 10n-4n);
console.log('10n-BigInt(5) :>> ', 10n-BigInt(5));
//10n-4 will give TypeError
console.log('parseInt(10n)-4 :>> ', parseInt(10n)-4);
console.log('5n/2n :>> ', 5n/2n);
console.log('Number.isNaN(5/0) :>> ', Number.isNaN(5/0));

var a;
console.log("var a value is:"+a);
console.log("str2 value is:"+str2);
console.log("str3 value is:"+str3);
console.log("str4 value is:"+str4);
console.log("num1 value is:"+num1);
console.log("num1+7="+(num1+7));
console.log("num1+7 (no brackets)="+num1+7);
console.log('+num1+7 :>> ', +num1+7);
var b=true;
console.log("b:"+b);
b=a;
console.log("b:"+b);
b=null;
console.log("b:"+b);
b=undefined;
console.log("b:"+b);
console.log("typeof null: ",typeof null);
console.log("typeof undefined: ",typeof undefined);
console.log("typeof str4: ",typeof str4);
console.log('typeof NaN :>> ', typeof NaN);
console.log('typeof true :>> ', typeof true);
console.log('typeof [1,2,3] :>> ', typeof [1,2,3]);
console.log('typeof {"key1":"value1"} :>> ', typeof {"key1":"value1"});
console.log('typeof (typeof {"key1":"value1"}) :>> ', typeof (typeof {"key1":"value1"}));
a=10;
b="10";
console.log('a=10;b="10"');
console.log('a==b :>>', a==b);
console.log('a===b :>>', a===b);
a++;
console.log('a==b after a++:>> ', a==b);

console.log(`
convert truthy or falsy value to actual boolean value using double bang operator
------------------------------
! operator coerces any value to boolean and another bang(!) negates it,
resulting in real boolean counterpart value for truthy or falsy values of the data type
console.log('!!"" :>> ', !!"");
console.log('!!1 :>> ', !!1);
`);

console.log('!!"" :>> ', !!"");
console.log('!!1 :>> ', !!1);

//assigning default value to variables using OR condition
console.log(`
assigning default value to variables using OR condition
------------------------------
|| and && generate NO booleans, they just treat the values before and after them as conditions (which therefore need to yield boolean values and are coerced to booleans if required).

let someInput="";
let inputOrDefault = someInput||"Max"
console.log('inputOrDefault :>> ', inputOrDefault);
`);
let someInput="";
let inputOrDefault = someInput||"Max"
console.log('inputOrDefault :>> ', inputOrDefault);

console.log(`
assigning second value based on whether first value is falsy or truthy
------------------------------
if first value is falsy value then assign falsy value else assign second value
let secondValue = "Max" && "Manu";
console.log('secondValue :>> ', secondValue,"\n");
let isLoggedIn = false;
let firstVal = isLoggedIn && "Manu"
console.log('firstVal :>> ', firstVal,"\n");
`);
let secondValue = "Max" && "Manu";
console.log('secondValue :>> ', secondValue,"\n");
let isLoggedIn = false;
let firstVal = isLoggedIn && "Manu"
console.log('firstVal :>> ', firstVal,"\n");

// variables declared with const keyword cannot have their values changed later
const defaultResult = 5;
//susbstituting variable value inside string
//The ${expression} is a placeholder, and can include any expression, 
//which will get evaluated and inserted into the template literal.
let a2 = 8;
let b2 = 34;
let msg = `let a2 = 8;
let b2 = 34;
\`The sum is \${a2+b2}\` evaluated :>> The sum is ${a2+b2}`;
console.log(msg);
console.log("const defaultResult = 5;`(${defaultResult} + 10) * 3 / 2 - 1` = ",`(${defaultResult} + 10) * 3 / 2 - 1`);

//math shorthand operators
//variables declared using let keyword are block scoped
//i.e, if they are declared inside functions, then they are available only inside that function
let inputNumber=7;
let result;
result=18+inputNumber;
result-=5;
result*=2;
result/=10;
//can have newlines in string literals when back tick is used
console.log(`
let inputNumber=7;
let result;
result=18+inputNumber;
result-=5;
result*=2;
result/=10;
result :>> `, result);
console.log("test new line in string literal using \\ \
in new line");

if(-37){ console.log("-37 if entered"); }
if(0){ console.log("0 if entered"); } else {console.log("0 if not entered");}
if(73){ console.log("73 if entered"); }
if("false"){ console.log("string \"false\" is true"); } else { };
if(""){  } else { console.log("empty string is false"); };
if(undefined){  } else { console.log("undefined is false"); };
if(null){  } else { console.log("null is false"); };

console.log(`
switch case statement for range of number
`);

for(let val1=500;val1<2501;val1+=1000){
    console.log('entering switch case with val1 :>> ', val1);
    switch (true) {
        case (0 <= val1 &&  val1 < 1000): 
            console.log('val1 is between 0 and 1000 :>> ');
        break;

        case (1000 <= val1 &&  val1 < 2000):
            console.log("val1 is between 1000 and 2000");
        break;

        case (val1 >= 2000):
            console.log("val1 is greater than 2000");
        break;
    }
}

var myObj={};
console.log('myObj (empty object) :>> ', myObj);
myObj.prop="hello";
myObj.obj2={"1":"one"};
//doing this assignment without declaring obj2 results in an error
myObj.obj2.prop="hello2";
console.log('myObj :>> ', myObj);
console.log('myObj.obj2.prop. :>> ', myObj.obj2.prop);
console.log('myObj["obj2"]["prop"] :>> ', myObj["obj2"]["prop"]);
//accessing by property name stored in variable
var nestedObjName="obj2";
myObj.nestedObjName="testValue755";
console.log("accessing by property name stored in variable");
console.log('myObj[nestedObjName] :>> ', myObj[nestedObjName]);
console.log('myObj["nestedObjName"] :>> ', myObj["nestedObjName"]);
//access by specifying property name in runtime, same as above but retrieves string value instead of object
var propertyname="prop";
console.log('myObj.obj2[propertyname] :>> ', myObj.obj2[propertyname]);
console.log(`
bracket notation is useful when property name has spaces
--------------
myobj543 = {"first name":"Manvoo bhat",1.5:"hello"};
Note: 
    - negative numbers as property name is not allowed, for eg: cant use -1.5 above
    - object with number keys get printed in sorted order in console log
`);
myobj543 = {"first name":"Manvoo bhat",1.5:"hello"};
console.log('myobj543["first name"] :>> ', myobj543["first name"]);
console.log('myobj543[1.5] :>> ', myobj543[1.5]);
console.log(`
let obj985 = {2:"there",1:"hi"};
let obj984 = {"222test":"there","111test":"Hi"};
`);
let obj985 = {2:"there",1:"hi"};
let obj984 = {"222test":"there","111test":"Hi"};
console.log('properties printed in sorted order - obj985 :>> ', obj985);
console.log('obj984 :>> ', obj984);

//access using myObj.obj2.1 is an error
//this is because javascript identifiers cannot start with number
console.log('myObj.obj2["1"] :>> ', myObj.obj2["1"]);
//object variables are equal if they refer to same object in the memory
var myobj2=myObj;
console.log('var myobj2=myObj;\nmyObj===myobj2 :>> ', myObj===myobj2);
console.log('myObj==myobj2 :>> ', myObj==myobj2);
myObj.prop=undefined;
console.log('myObj after prop set to undefined:>> ', myObj);
myObj.prop="hello";
delete myObj.prop;
console.log('myObj after deleting property :>> ', myObj);

console.log(`
check if property exists in object
-----------------
let movie = {title:"The Batman",info:{rating:4,releaseDate:"03 March 2022"}};
if("info" in movie){ // or check if movie.info === undefined
    console.log("info property exists in movie object");
}
if(!("name" in movie)){
    console.log("name property does not exist in movie object");
}
`);

let movie = {title:"The Batman",info:{rating:4,releaseDate:"03 March 2022"}};
if("info" in movie){ // or check if movie.info === undefined
    console.log("info property exists in movie object");
}
if(!("name" in movie)){
    console.log("name property does not exist in movie object");
}

console.log(`
"this" keyword usage
--------------------
movie.getUppercaseReleaseDate = function(){
    return this.info.releaseDate.toUpperCase();
}
console.log('movie.getUppercaseReleaseDate() :>> ', movie.getUppercaseReleaseDate());
`);

movie.getUppercaseReleaseDate = function(){
    return this.info.releaseDate.toUpperCase();
}
console.log('movie.getUppercaseReleaseDate() :>> ', movie.getUppercaseReleaseDate());

console.log(`
"this" keyword binding
----------------------
//arrow functions have "this" object bound to surrounding object in which they are declared
let team ={
    teamName: "Blue Rockets",
    people:["Max","Manuel"],
    getTeamMembers(){
    //OR
    //getTeamMembers : function(){
        this.people.forEach(p => {
            console.log('p+" - "+this.teamName :>> ', p+" - "+this.teamName);
        })
    }
}
team.getTeamMembers();

//functions defined with function keyword have "this" object bound to global context, because these
//are callback functions executed/triggered by browser or nodejs due to the usage of foreach function.
team ={
    teamName: "Blue Rockets",
    people:["Max","Manuel"],
    getTeamMembers() { 
    //OR
    //getTeamMembers : function(){
        this.people.forEach(function(p) {
            console.log('p+" - "+this.teamName :>> ', p+" - "+this.teamName);
        })
    }
}
team.getTeamMembers();

//should not use arrow functions to define member functions of object, because "this" object 
//will be bound to the global object where this function is being declared
team ={
    teamName: "Blue Rockets",
    people:["Max","Manuel"],
    getTeamMembers: () => { 
        console.log('this.people :>> ', this.people);
        console.log('this.teamName :>> ', this.teamName);
    }
}
team.getTeamMembers();
`);

//arrow functions have "this" object bound to surrounding object in which they are declared
let team ={
    teamName: "Blue Rockets",
    people:["Max","Manuel"],
    getTeamMembers(){
    //OR
    //getTeamMembers : function(){
        this.people.forEach(p => {
            console.log('p+" - "+this.teamName :>> ', p+" - "+this.teamName);
        })
    }
}
team.getTeamMembers();

//functions defined with function keyword have "this" object bound to global context, because these
//are callback functions executed/triggered by browser or nodejs due to the usage of foreach function.
team ={
    teamName: "Blue Rockets",
    people:["Max","Manuel"],
    getTeamMembers() { 
    //OR
    //getTeamMembers : function(){
        this.people.forEach(function(p) {
            console.log('p+" - "+this.teamName :>> ', p+" - "+this.teamName);
        })
    }
}
team.getTeamMembers();

//should not use arrow functions to define member functions of object, because "this" object 
//will be bound to the global object where this function is being declared
team ={
    teamName: "Blue Rockets",
    people:["Max","Manuel"],
    getTeamMembers: () => { 
        console.log('this.people :>> ', this.people);
        console.log('this.teamName :>> ', this.teamName);
    }
}
team.getTeamMembers();

console.log(`
creating new object in ES6 shorthand form from variables having same name as object property
-----------
let height2 = 7;
let health = 100;
let athlete = {
    height2, // height: height,
    health // health: health
};
console.log(athlete.height2);
`);

let height2 = 7;
let health = 100;
let athlete = {
    height2, // height: height,
    health // health: health
};
console.log(athlete.height2);

console.log(`
When creating an object by using duplicate property names, the last property will 
overwrite the prior ones of the same name.
-----------
var a = {x: 1, x: 2, x: 3, x: 4};
console.log(a.x); // 4
`);

var a = {x: 1, x: 2, x: 3, x: 4};
console.log(a.x); // 4

console.log(`
Using computed property names during object initialization
This is using the square bracket notation []
let prop = 'name';
let id = '1234';
let mobile = '08923';
let user_1234 = "t12312";
let user = {
  [prop]: 'Jack',\n  `+
  "[`user_${id}`]: `${mobile}`"+
`\n};
console.log(user.name); // Jack
console.log(user.user_1234); // 08923
`);
let prop = 'name';
let id = '1234';
let mobile = '08923';
let user_1234 = "t12312";
let user = {
  [prop]: 'Jack',
  [`user_${id}`]: `${mobile}`
};

console.log(user.name); // Jack
console.log(user.user_1234); // 08923

console.log(`
using increment operator and other functions in property names of a object
var i3 = 0;
var param = 'size';
var a3 = {
  ['foo' + ++i3]: i3,
  ['foo' + ++i3]: i3,
  ['foo' + ++i3]: i3,
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};
console.log(a3.foo1); // 1
console.log(a3.foo2); // 2
console.log(a3.foo3); // 3
console.log(a3.mobileSize); //4
`);

var i3 = 0;
var param = 'size';
var a3 = {
  ['foo' + ++i3]: i3,
  ['foo' + ++i3]: i3,
  ['foo' + ++i3]: i3,
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};
console.log(a3.foo1); // 1
console.log(a3.foo2); // 2
console.log(a3.foo3); // 3
console.log(a3.mobileSize); //4

console.log(`
------------------------------------
Object.assign() method allows us to combine multiple sources into one target to create a single new object.
Object.assign() is also useful for creating a duplicate of an existing object.
Every parameter after the first will be used as sources for the target. There are no limitations on the 
number of source parameters. However, order is important because properties in the second parameter will be 
overridden by properties of the same name in third parameter, and so on.
let person3 = {
    name: 'Jack',
    age: 18,
    sex: 'male'
};
let student = {
    name: 'Bob',
    age: 20,
    xp: '2'
};
let newStudent = Object.assign({}, person3, student);
console.log('newStudent :>> ', newStudent);
//duplicating object
//nested objects are still copied as reference. 
//If you really want to copy whole object with it's nested objects and methods, 
//one of approaches is using Lodash library "clone", "cloneDeep" methods
let newPerson = Object.assign({}, person3);
console.log('newPerson :>> ', newPerson);
//assign and override single or more properties`+
"console.log(`Object.assign({}, person3, {name: 'Bob'}) :>> `, Object.assign({}, person3, {name: 'Bob'}));"
);
let person3 = {
    name: 'Jack',
    age: 18,
    sex: 'male'
};
let student = {
    name: 'Bob',
    age: 20,
    xp: '2'
};
let newStudent = Object.assign({}, person3, student);
console.log('newStudent :>> ', newStudent);
//duplicating object
//nested objects are still copied as reference. 
//If you really want to copy whole object with it's nested objects and methods, 
//one of approaches is using Lodash library "clone", "cloneDeep" methods
let newPerson = Object.assign({}, person3);
console.log('newPerson :>> ', newPerson);
//assign and override single or more properties
console.log(`Object.assign({}, person3, {name: 'Bob'}) :>> `, Object.assign({}, person3, {name: 'Bob'}));

console.log(`
--------------------
object destructuring
--------------------
let obj3 = {h:100, s: true};
let {h, s} = obj3;
console.log('h :>> ', h);
console.log('s :>> ', s);
`);
let obj3 = {h:100, s: true};
let {h, s} = obj3;
console.log('h :>> ', h);
console.log('s :>> ', s);

console.log(`
destructuring object without variable declaration
------------------------------------
let a4, b4;
({a4, b4} = {a4: 'Hello ', b4: 'Jack'});
console.log('a4+b4 :>> ', a4+b4);
`);

let a4, b4;
({a4, b4} = {a4: 'Hello ', b4: 'Jack'});
console.log('a4+b4 :>> ', a4+b4);

console.log(`
destructuring object with variable declaration
------------------------------------
let {a5, b5} = {a5: 'Hello ', b5: 'Jack'};
console.log('a5+b5 :>> ', a5+b5);
`);

let {a5, b5} = {a5: 'Hello ', b5: 'Jack'};
console.log('a5+b5 :>> ', a5+b5);

console.log(`
var o = {h: 42, s: true};
var {h: foo, s: bar} = o;
//console.log(h); // Error
console.log('foo :>> ', foo); // 42
`);
var o = {h: 42, s: true};
var {h: foo, s: bar} = o;
//console.log(h); // Error
console.log('foo :>> ', foo); // 42


console.log(`
assigning default value to variables if they dont exist as object property
------------------------------------
var obj5 = {identifier: 42, name: "Jack"};
let {identifier = 10, age = 20} = obj5;
console.log('identifier :>> ', identifier); // 42
console.log('age :>> ', age); // 20
`);
var obj5 = {identifier: 42, name: "Jack"};
let {identifier = 10, age = 20} = obj5;
console.log('identifier :>> ', identifier); // 42
console.log('age :>> ', age); // 20

console.log(`
ES6 Rest Parameters
-------------------
The ...nums parameter is called a rest parameter.
It takes all the "extra" arguments passed to the function.
The three dots (...) are called the Spread operator.
Only the last parameter of a function may be marked as a rest parameter. 
If there are no extra arguments, the rest parameter will simply be an empty array,
the rest parameter will never be undefined.

function containsAll(arr, ...nums) {
    for (let num of nums) {
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}
let x2 = [2, 4, 6, 7];
console.log(containsAll(x2, 2, 4, 7));
console.log(containsAll(x2, 6, 4, 9));
`);
//
function containsAll(arr, ...nums) {
    for (let num of nums) {
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}
let x2 = [2, 4, 6, 7];
console.log(containsAll(x2, 2, 4, 7));
console.log(containsAll(x2, 6, 4, 9));

console.log(`
Spread operator
------------------
used as alternative for functions "apply()" method, to pass elements of array as parameters
during function invocation
const myFunction2 = (w, x, y, z) => {
    console.log('inside myFunction2: w + x + y + z :>> ', w + x + y + z);
};
let args2 = [1, 2, 3];
myFunction2(...args2, 4);
`);

const myFunction2 = (w, x, y, z) => {
    console.log('inside myFunction2: w + x + y + z :>> ', w + x + y + z);
};
let args2 = [1, 2, 3];
myFunction2(...args2, 4);

console.log(`
practical example of using spread operator to pass arguments to function
-------
var dateFields = [1970, 0, 1];  // 1 Jan 1970
var date1 = new Date(...dateFields);
console.log('date1 :>> ', date1);

Math.min doesn't take array as param, but using spread operator you can find minimum number in array
------------------
const numArray = [5.5,6.7,3,4,99];
console.log('Math.min(...prices) :>> ', Math.min(...numArray));
`);

var dateFields = [1970, 0, 1];  // 1 Jan 1970
var date1 = new Date(...dateFields);
console.log('date1 :>> ', date1);
//Math.min doesn't take array as param, but using spread operator you can find minimum number in array
const numArray = [5.5,6.7,3,4,99];
console.log('Math.min(...prices) :>> ', Math.min(...numArray));

console.log(`
Spread in object literals
------------------------------
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };
const clonedObj = { ...obj1 }; // { foo: "bar", x: 42 }
const mergedObj = { ...obj1, ...obj2 }; // { foo: "baz", x: 42, y: 5 }
console.log('clonedObj :>> ', clonedObj);
console.log('mergedObj :>> ', mergedObj);
`);
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };
const clonedObj = { ...obj1 }; // { foo: "bar", x: 42 }
const mergedObj = { ...obj1, ...obj2 }; // { foo: "baz", x: 42, y: 5 }
console.log('clonedObj :>> ', clonedObj);
console.log('mergedObj :>> ', mergedObj);
//TypeError: Found non-callable @@iterator
//console.log('...obj1 :>> ', ...obj1);

console.log(`
Spread operator does not work as expected for while spreading variable no of objects in function
------------------------------
const obj6 = { foo: 'bar', x: 42 };
const obj4 = { foo: 'baz', y: 5 };
const merge = (...objects) => ({ ...objects });

let mergedObj2 = merge (obj6, obj4);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } }
console.log('mergedObj2 :>> ', mergedObj2);

let mergedobj3 = merge ({}, obj6, obj4);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5 } }
console.log('mergedobj3 :>> ', mergedobj3);
`);
const obj6 = { foo: 'bar', x: 42 };
const obj4 = { foo: 'baz', y: 5 };
const merge = (...objects) => ({ ...objects });

let mergedObj2 = merge (obj6, obj4);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } }
console.log('mergedObj2 :>> ', mergedObj2);

let mergedobj3 = merge ({}, obj6, obj4);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5 } }
console.log('mergedobj3 :>> ', mergedobj3);

//Nullish coalescing operator (??)
console.log(`
Nullish coalescing operator (??)
--------------------------------
The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand 
when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
This can be seen as a special case of the logical OR (||) operator, which returns the right-hand side operand 
if the left operand is any falsy value, not only null or undefined.
--------------------------------
console.log('null ?? "default string" :>> ', null ?? "default string");
console.log('0 ?? 42 :>> ', 0 ?? 42);
// OR logical operator is different, here the first operand is coerced into boolean value
console.log('null || "default string" :>> ', null ||  "default string");
console.log('0 || 42 :>> ', 0 || 42);
`);

console.log('null ?? "default string" :>> ', null ?? "default string");
console.log('0 ?? 42 :>> ', 0 ?? 42);
// OR logical operator is different, here the first operand is coerced into boolean value
console.log('null || "default string" :>> ', null ||  "default string");
console.log('0 || 42 :>> ', 0 || 42);

//Conditional (ternary) operator
console.log(`
Conditional (ternary) operator
------------------------------
The conditional (ternary) operator takes three operands: a condition followed by a question mark (?), then 
an expression to execute and return value if the condition is truthy followed by a colon (:), and finally 
the expression to execute and return value if the condition is falsy.
------------------------------
let greeting = person571 => {
    let name = person571 ? person571.name : 'stranger'`+"\n\t"+
    "return `Howdy, ${name}`"+`
}

let greeting2 = ({personName}) => {
    let name = personName ? personName : 'stranger'
    `+"return `Howdy, ${name}, your age is ${personAge}`"+`
}

console.log(greeting({name: 'Alice'}));  // "Howdy, Alice"
console.log(greeting2({personName: 'Alice',personAge:45}));  // "Howdy, Alice"
console.log(greeting(null));             // "Howdy, stranger"
`);

let greeting = person571 => {
    let name = person571 ? person571.name : 'stranger'
    return `Howdy, ${name}`
}
//declaring function with object property syntax
let greeting2 = ({personName, personAge}) => {
    let name = personName ? personName : 'stranger'
    return `Howdy, ${name}, your age is ${personAge}`;
}

console.log(greeting({name: 'Alice'}));  // "Howdy, Alice"
console.log(greeting2({personName: 'Alice',personAge:45}));  // "Howdy, Alice"
console.log(greeting(null));             // "Howdy, stranger"

//elvis operator
console.log(`
elvis operator
--------------
Syntax
------
obj.val?.prop
obj.val?.[expr]
obj.arr?.[index]
obj.func?.(args)

const adventurer = {
name: 'Alice',
    cat: {
        name: 'Dinah'
    },
    getCatName: function(){
        return this.cat.name;
    }
};
    
//dog name and method don't exist, use elvis operator to avoid exception
console.log('adventurer.dog?.name :>> ', adventurer.dog?.name); // expected output: undefined
console.log('adventurer.getDogName?.() :>> ', adventurer.getDogName?.()); // expected output: undefined

console.log('adventurer.cat?.name :>> ', adventurer.cat?.name); // expected output: Dinah
console.log('adventurer.getCatName?.() :>> ', adventurer.getCatName?.()); // expected output: Dinah
`);
const adventurer = {
name: 'Alice',
    cat: {
        name: 'Dinah'
    },
    getCatName: function(){
        return this.cat.name;
    }
};

//dog name and method don't exist, use elvis operator to avoid exception
console.log('adventurer.dog?.name :>> ', adventurer.dog?.name); // expected output: undefined
console.log('adventurer.getDogName?.() :>> ', adventurer.getDogName?.()); // expected output: undefined

console.log('adventurer.cat?.name :>> ', adventurer.cat?.name); // expected output: Dinah
console.log('adventurer.getCatName?.() :>> ', adventurer.getCatName?.()); // expected output: Dinah


//array operations
console.log("\narray operations\n------------------");
var arr = [1,2,3,4,5];
console.log('arr :>> ', arr);
console.log('arr.length :>> ', arr.length);
let arr37 = new Array(8);
let arr38 = new Array(5,6,7);
let arr39 = Array(2,3,4);
console.log(`
Creating empty array of given length
------------------------
let arr37 = new Array(8);
let arr38 = new Array(5,6,7);
let arr39 = Array(2,3,4);
`);
console.log('arr37 :>> ', arr37);
console.log('arr37.length :>> ', arr37.length);
console.log('arr38 :>> ', arr38);
console.log('arr38.length :>> ', arr38.length);
console.log('arr39 :>> ', arr39);
console.log('[3,5,7,1,3,4].indexOf(1) :>> ', [3,5,7,1,3,4].indexOf(1));
console.log('[3,5,7,1,3,4].indexOf(1.5) :>> ', [3,5,7,1,3,4].indexOf(1.5));
console.log('[3,5,7,1,3,4].includes(7) :>> ', [3,5,7,1,3,4].includes(7));
console.log('[3,5,7,1,3,4].indexOf(7) !== -1 :>> ', [3,5,7,1,3,4].indexOf(7) !== -1);
//lastIndexOf method
console.log('[3,5,7,1,3,4].lastIndexOf(3) :>> ', [3,5,7,1,3,4].lastIndexOf(3));

console.log(`
find and findIndex method for searching objects in array
------------------------------
const personData = [{name:"Max"},{name:"Manu"},{name:"Manvoo"},{name:"Manuel"}];
const manuel = personData.find((person,idx,persons)=>{
    return person.name === "Manuel";
});
console.log('manuel :>> ', manuel);
manuel.name="Anna";
console.log('manuel,personData :>> ', manuel,personData);
const manvooIndex = personData.findIndex((person,idx,persons)=>{
    return person.name === "Manvoo";
});
console.log('manvooIndex :>> ', manvooIndex);

`);

const personData = [{name:"Max"},{name:"Manu"},{name:"Manvoo"},{name:"Manuel"}];
const manuel = personData.find((person,idx,persons)=>{
    return person.name === "Manuel";
});
console.log('manuel :>> ', manuel);
manuel.name="Anna";
console.log('manuel,personData :>> ', manuel,personData);
const manvooIndex = personData.findIndex((person,idx,persons)=>{
    return person.name === "Manvoo";
});
console.log('manvooIndex :>> ', manvooIndex);

console.log('typeof arr :>> ', typeof arr);
arr[5]='6';
console.log('arr after assigning 6th element :>> ', arr);
console.log('arr[10] :>> ', arr[10]);
arr[10]='array 101';
console.log('arr after directly assigning 10th element :>> ', arr);
delete arr[10];
console.log('arr after deleting 10th element :>> ', arr);
console.log('arr[10] value after delete:>> ', arr[10]);
console.log('arr[8] :>> ', arr[8]);
console.log('arr.length :>> ', arr.length);
console.log('arr["1"] :>> ', arr["1"]);
arr["testprop1"]="testvalue1";
console.log('arr :>> ', arr);
console.log('arr.length :>> ', arr.length);
console.log(`
Array destructuring
-------------------
let arr3 = ['1', '2', '3'];
let [one, two, three] = arr;
console.log('one :>> ', one);
console.log('two :>> ', two);
console.log('three :>> ', three);

using spread operator inside destructured array
--------------
const nameData = ['Max', 'Schwarz', 'Mr', 30];
const [ firstName, lastName, ...otherInformation ] = nameData;
console.log('firstName, lastName, otherInformation :>> ', firstName, lastName, otherInformation);
`);
let arr3 = ['1', '2', '3'];
let [one, two, three] = arr;
console.log('one :>> ', one);
console.log('two :>> ', two);
console.log('three :>> ', three);

const nameData = ['Max', 'Schwarz', 'Mr', 30];
// const firstName = nameData[0];
// const lastName = nameData[1];
const [ firstName, lastName, ...otherInformation ] = nameData;
console.log('firstName, lastName, otherInformation :>> ', firstName, lastName, otherInformation);

console.log(`
let a6 = () => {
    return [1, 3, 2];
};
let [one2, , two2] = a6();
console.log('one2 :>> ', one2);
console.log('two2 :>> ', two2);

`);

let a6 = () => {
    return [1, 3, 2];
};
let [one2, , two2] = a6();
console.log('one2 :>> ', one2);
console.log('two2 :>> ', two2);

console.log(`
let a8, b8, c8 = 4, d8 = 8;

[a8, b8 = 6] = [2];
console.log("a8:",a8); // 2
console.log("b8:",b8); // 6
-------
swapping two numbers
[c8, d8] = [d8, c8];
console.log("c8:",c8); // 8
console.log("d8:",d8); // 4
`);

let a8, b8, c8 = 4, d8 = 8;

[a8, b8 = 6] = [2];
console.log("a8:",a8); // 2
console.log("b8:",b8); // 6

//swapping two numbers
[c8, d8] = [d8, c8];
console.log("c8:",c8); // 8
console.log("d8:",d8); // 4

console.log(`
Initializing multi-dimensional array
-----------------
let defValue = 'foo'; // by default
let myGrid = [...Array(6)].map(()=>Array(6).fill(defValue));

console.log('myGrid :>> ', myGrid);
`);

let defValue = 'foo'; // by default
let myGrid = [...Array(6)].map(()=>Array(6).fill(defValue));

console.log('myGrid :>> ', myGrid);

console.log(`
using array as stack
--------------------
`);

let stack=new Array(10);
stack.push("element1");
stack.push(["element2"]);
stack.push(101);

while((stackElem=stack.pop())!==undefined){
    console.log("popped element:",stackElem);
}

console.log("\n------------------");

//implicit arg "arguments" inside javascript function
//arguments is an object which contains all args passed to the function
function sum(){
    var sum=0;
    console.log('function arguments are :>> ', arguments);
    for(var i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}
console.log('sum(1,2,3,4,5) :>> ', sum(1,2,3,4,5));

console.log(`
defaulting value for parameters in function
Default value expressions are evaluated at function call time from left to right. 
This also means that default expressions can use the values of previously-filled parameters.
-----------
function test(a, b = 3, c = 42) {
  return a + b + c;
}
console.log(test(5));
`);
function test(a, b = 3, c = 42) {
    return a + b + c;
}
console.log(test(5));

console.log(`
ES6 equivalent
const test2 = (a, b = 3, c = b+42) => a + b + c;
console.log(test2(8));
`);
const test2 = (a, b = 3, c = b+42) => a + b + c;
console.log(test2(8));

//array splice method
console.log(`
array splice method
------------------
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
This method is available only on arrays and not on iterables and array-like(eg: NodeList) objects

//Remove 0 (zero) elements before index 2, and insert "drum"
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum')
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed
console.log('removed :>> ', removed);

//Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"
let myFish2 = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed2 = myFish2.splice(2, 0, 'drum', 'guitar')
// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed
console.log('removed2 :>> ', removed2);

//Remove 1 element at index 3
let myFish3 = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed3 = myFish3.splice(3, 1)
// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]
console.log('removed3 :>> ', removed3);

//Remove 1 element at index 2, and insert "trumpet"
let myFish4 = ['angel', 'clown', 'drum', 'sturgeon']
let removed4 = myFish4.splice(2, 1, 'trumpet')
// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]
console.log('removed4 :>> ', removed4);

//Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
let myFish5 = ['angel', 'clown', 'trumpet', 'sturgeon']
let removed5 = myFish5.splice(0, 2, 'parrot', 'anemone', 'blue')
// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]
console.log('removed5 :>> ', removed5);

//Remove 2 elements, starting from index 2
let myFish6 = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
let removed6 = myFish6.splice(2, 2)
// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]
console.log('removed6 :>> ', removed6);

//Remove 1 element from index -2
let myFish7 = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed7 = myFish7.splice(-2, 1)
// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]
console.log('removed7 :>> ', removed7);

//Remove all elements, starting from index 2
let myFish8 = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed8 = myFish8.splice(2)
// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]
console.log('removed8 :>> ', removed8);
`);

//Remove 0 (zero) elements before index 2, and insert "drum"
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum')
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed
console.log('removed :>> ', removed);

//Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"
let myFish2 = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed2 = myFish2.splice(2, 0, 'drum', 'guitar')
// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed
console.log('removed2 :>> ', removed2);

//Remove 1 element at index 3
let myFish3 = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed3 = myFish3.splice(3, 1)
// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]
console.log('removed3 :>> ', removed3);

//Remove 1 element at index 2, and insert "trumpet"
let myFish4 = ['angel', 'clown', 'drum', 'sturgeon']
let removed4 = myFish4.splice(2, 1, 'trumpet')
// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]
console.log('removed4 :>> ', removed4);

//Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
let myFish5 = ['angel', 'clown', 'trumpet', 'sturgeon']
let removed5 = myFish5.splice(0, 2, 'parrot', 'anemone', 'blue')
// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]
console.log('removed5 :>> ', removed5);

//Remove 2 elements, starting from index 2
let myFish6 = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
let removed6 = myFish6.splice(2, 2)
// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]
console.log('removed6 :>> ', removed6);

//Remove 1 element from index -2
let myFish7 = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed7 = myFish7.splice(-2, 1)
// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]
console.log('removed7 :>> ', removed7);

//Remove all elements, starting from index 2
let myFish8 = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed8 = myFish8.splice(2)
// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]
console.log('removed8 :>> ', removed8);

console.log(`
array slice method
------------------
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start 
to end (end not included) where start and end represent the index of items in that array. The original array 
will not be modified.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
`);
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log('animals.slice(2) :>> ', animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log('animals.slice(2, 4) :>> ', animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log('animals.slice(1, 5) :>> ', animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log('animals.slice(-2) :>> ', animals.slice(-2));
//negative integer means index from end of array in reverse direction
// expected output: Array ["duck", "elephant"]

console.log('animals.slice(2, -1) :>> ', animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log('animals.slice() :>> ', animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

var myArray = [10,20,"Hello",{}]
console.log('\nmyArray.push(10) length is returned :>> ', myArray.push(10));
console.log('myArray after push :>> ', myArray);
console.log('myArray.pop() :>> ', myArray.pop());
console.log('myArray.pop() :>> ', myArray.pop());
console.log('myArray.shift() :>> ', myArray.shift());
console.log('myArray after shift (remove from the array beginning) :>> ', myArray);
console.log('myArray.unshift(11) (length is returned):>> ', myArray.unshift(11));
console.log('myArray after unshift(insert at the array beginning) :>> ', myArray);
console.log('index of hello :>> ', myArray.flatMap(
    (x,index)=>{ return x==="Hello" ? index: null;}).filter(x=>x!=null));

console.log(`
foreach usage:
--------------
myArray.forEach((x,index,inputArr)=>
    console.log('visiting element :>> ', x,' at index ',index,' of array ',inputArr));

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

prices.forEach((price, idx, prices) => {
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
    taxAdjustedPrices.push(priceObj);
});
console.log('taxAdjustedPrices :>> ', taxAdjustedPrices);
`);
myArray.forEach((x,index,inputArr)=>
    console.log('visiting element :>> ', x,' at index ',index,' of array ',inputArr));

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

prices.forEach((price, idx, prices) => {
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
    taxAdjustedPrices.push(priceObj);
});
console.log('taxAdjustedPrices :>> ', taxAdjustedPrices);

console.log(`
map method
-----------
const taxAdjustedPricesMapped = prices.map((price, idx, prices) => {
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
    return priceObj;
});
  
console.log('prices, taxAdjustedPricesMapped :>> ', prices, taxAdjustedPricesMapped);
`);

//map method
const taxAdjustedPricesMapped = prices.map((price, idx, prices) => {
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
    return priceObj;
});
  
console.log('prices, taxAdjustedPricesMapped :>> ', prices, taxAdjustedPricesMapped);

console.log(`
sort and reverse method
-----------------------
const sortedPrices = prices.sort((a, b) => {
    if (a > b) {
      return -1;
    } else if (a === b) {
      return 0;
    } else {
      return 1;
    }
  });

console.log('sortedPrices :>> ', sortedPrices);
console.log('sortedPrices.reverse() :>> ', sortedPrices.reverse());
`);

//sort and reverse method
const sortedPrices = prices.sort((a, b) => {
    if (a > b) {
      return -1;
    } else if (a === b) {
      return 0;
    } else {
      return 1;
    }
  });

console.log('sortedPrices :>> ', sortedPrices);
console.log('sortedPrices.reverse() :>> ', sortedPrices.reverse(),"\n");

console.log(`
filter method
-------------
const filteredArray = sortedPrices.filter((price,index,prices)=>{
    return price > 6;
});
console.log('filteredArray :>> ', filteredArray);

const filteredArray2 = sortedPrices.filter(price => price>6);
console.log('filteredArray2 :>> ', filteredArray2);
`);

const filteredArray = sortedPrices.filter((price,index,prices)=>{
    return price > 6;
});
console.log('filteredArray :>> ', filteredArray);

const filteredArray2 = sortedPrices.filter(price => price>6);
console.log('filteredArray2 :>> ', filteredArray2);

console.log(`
array reduce method
-------------------
const sumByReduce = sortedPrices.reduce((previousValue,currentValue,currentIndex,prices)=>{`+"\n\
    console.log(`sumByReduce: adding ${previousValue} and ${currentValue} , index:${currentIndex}`);"+`
    return previousValue+currentValue;
});
console.log('sumByReduce :>> ', sumByReduce);

const sumByReduceWithInitialValue = sortedPrices.reduce((previousValue,currentValue,currentIndex,prices)=>{`+"\n\
    console.log(`sumByReduceWithInitialValue: adding ${previousValue} and ${currentValue} , index:${currentIndex}`);"+`
    return previousValue+currentValue;
},0);
console.log('sumByReduceWithInitialValue :>> ', sumByReduceWithInitialValue);
`);

const sumByReduce = sortedPrices.reduce((previousValue,currentValue,currentIndex,prices)=>{
    console.log(`sumByReduce: adding ${previousValue} and ${currentValue} , index:${currentIndex}`);
    return previousValue+currentValue;
});
console.log('sumByReduce :>> ', sumByReduce);

const sumByReduceWithInitialValue = sortedPrices.reduce((previousValue,currentValue,currentIndex,prices)=>{
    console.log(`sumByReduceWithInitialValue: adding ${previousValue} and ${currentValue} , index:${currentIndex}`);
    return previousValue+currentValue;
},0);
console.log('sumByReduceWithInitialValue :>> ', sumByReduceWithInitialValue);

console.log(`
String split and join method to convert to and from array
----------------------------
const data = 'new york;10.99;2000';

const transformedData = data.split(';');
transformedData[1] = +transformedData[1];
console.log('transformedData :>> ', transformedData);

const nameFragements = ['Max', 'Schwarz'];
let joinedName = nameFragements.join('');
console.log('joinedName :>> ', joinedName);
joinedName = nameFragments.join();
console.log('joinedName :>> ', joinedName);
`);

const data = 'new york;10.99;2000';

const transformedData = data.split(';');
transformedData[1] = +transformedData[1];
console.log('transformedData :>> ', transformedData);

const nameFragments = ['Max', 'Schwarz'];
let joinedName = nameFragments.join('');
console.log('joinedName :>> ', joinedName);
joinedName = nameFragments.join();
console.log('joinedName :>> ', joinedName);

//declaring new array object
console.log(`
declaring new array object
--------------------------
console.log('Array("test",1,{k1:"v1",k2:"v2"}) :>> ', Array("test",1,{k1:"v1",k2:"v2"}));
console.log('Array.of(9,7,5) :>> ', Array.of(9,7,5));
console.log('Array.from("Hi!") :>> ', Array.from("Hi!"));
var courses = new Array("HTML", "CSS", "JS"); 
console.log('courses :>> ', courses);
courses[1] = "C++";
console.log('courses[1] = "C++"');
console.log('courses :>> ', courses);

`);
console.log('Array("test",1,{k1:"v1",k2:"v2"}) :>> ', Array("test",1,{k1:"v1",k2:"v2"}));
console.log('Array.of(9,7,5) :>> ', Array.of(9,7,5));
console.log('Array.from("Hi!") :>> ', Array.from("Hi!"));
var courses = new Array("HTML", "CSS", "JS"); 
console.log('courses :>> ', courses);
courses[1] = "C++";
console.log('courses[1] = "C++"');
console.log('courses :>> ', courses);

console.log(`
var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var courses = c1.concat(c2);
console.log('courses :>> ', courses);
`);

var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var courses = c1.concat(c2);
console.log('courses :>> ', courses);

var arrObj2 = new Array(0);
console.log('var arrObj2 = new Array(0)');
console.log('arrObj2 :>> ', arrObj2);
arrObj2[0]="firstValue";
console.log('arrObj2[0]="firstValue"');
console.log('arrObj2 :>> ', arrObj2);

//associative arrays, (objects)
console.log(`
associative arrays, (objects)
-------------------
`);

console.log('myObj :>> ', myObj);
console.log('Object.keys(myObj) :>> ', Object.keys(myObj));
console.log('myObj["nestedObjName"] :>> ', myObj["nestedObjName"]);

console.log(`
string primitive type has wrapper "string" object which has length
other primitive types like boolean, number, symbol also have wrapper objects
------------------------
`);
console.log('"Hello world".length :>> ', "Hello world".length);

console.log(`
Functions in javascript
-----------------------
`);

function sayHello(name){
    console.log("hello "+name);
}
sayHello("overtomanu");
sayHello();
sayHello("arg1","arg2");

function returnSayHello(name,timeOfDay){
    return "hello "+name+", time of day is "+timeOfDay;
}
console.log('returnSayHello("overtomanu","midnight") :>> ', returnSayHello("overtomanu","midnight"));

function noReturnValue(){
    console.log("function noReturnValue executed");
}

console.log('noReturnValue() :>> ', noReturnValue());

function noReturnValue2(){
    console.log("function noReturnValue2 executed");
}

console.log('noReturnValue2() :>> ', noReturnValue2());

var funcVar = function sum (a,b){
    return a+b;
}
console.log('funcVar() :>> ', funcVar());
console.log('funcVar(5,6) :>> ', funcVar(5,6));

var mulFuncVar = (a,b) => {
    return a*b;
}
console.log('mulFuncVar(3,7) :>> ', mulFuncVar(3,7));
funcVar=mulFuncVar;
console.log('funcVar(5,6) after equating with mulFuncVar :>> ', funcVar(5,6));

console.log('42===42.0 :>> ', 42===42.0);

console.log(`
recursive function assigned to variable can be used inside the function
--------------------
var recursiveFunctionTest=function(num){
    if(num===0){
        return;
    }
    console.log("recursiveFunctionTest:"+num);
    recursiveFunctionTest(num-1);
}

recursiveFunctionTest(5);
`);

var recursiveFunctionTest=function(num){
    if(num===0){
        return;
    }
    console.log("recursiveFunctionTest:"+num);
    recursiveFunctionTest(num-1);
}

recursiveFunctionTest(5);

console.log(`
Tagged templates
------------------------------
function productDescription(strings, productName, productPrice) {
    console.log(strings);
    console.log(productName);
    console.log(productPrice);
    let priceCategory = 'pretty cheap regarding its price';
    if (productPrice > 20) {
      priceCategory = 'fairly priced';
    }
    `+'return `${strings[0]}${productName}${strings[1]}${priceCategory}${'+`
      strings[2]
    }`+'`;'+`
  }
  
  const prodName = 'JavaScript Course';
  const prodPrice = 29.99;
  
  `+'const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;'+`
  console.log(productOutput);
`);

function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = 'pretty cheap regarding its price';
  if (productPrice > 20) {
    priceCategory = 'fairly priced';
  }
  return `${strings[0]}${productName}${strings[1]}${priceCategory}${
    strings[2]
  }`;
}

const prodName = 'JavaScript Course';
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log('productOutput :>> ', productOutput);

// function as arguments
function executor(f,name){
    console.log('executing function :>> ', f);
    f(name);
    console.log('done executing function :>> ', f);
}
funcVar=sayHello;
executor(funcVar,"overtomanu from executor");

//Immediately Invoked Function Expression ( IIFE )
console.log(`Immediately Invoked Function Expression ( IIFE )
((string1,string2,string3) => 
{ return string1+string2+string3;} )("stringP1","stringPar2","stringParam3") :>> `, ((string1,string2,string3)=>{ return string1+string2+string3; })("stringP1","stringPar2","stringParam3"));

{
    function testFun3453(string1,string2,string3) { 
        console.log('testFun3453 => string1+string2+string3 :>> ', string1+string2+string3);
    }
    testFun3453("stringP1","stringPar2","stringParam3");
}

testFun3453("stringP1","stringPar2","stringParam3");

let scopeTest32423="global value";
{
    let scopeTest32423="value inside block";
    let scopeTest34234 = "variable declared in only inner block";
    console.log('inside block - scopeTest32423 :>> ', scopeTest32423);
}
console.log('global block - after inner block - scopeTest32423 :>> ', scopeTest32423);
//following statement throws error
//console.log('scopeTest34234 :>> ', scopeTest34234);

myObj.myMethod = function () { console.log("executing function in object");}
myObj.myMethod();

var person = {
    "firstName":"james",
    "lastName":"bond",
    "getFullName": function () {
        return person.firstName+" "+person.lastName;
    }
}
console.log('person.getFullName() :>> ', person.getFullName());
var person2=person;
person={};
console.log('person2.getFullName() function referring to names using hardcoded object variable:>> ', person2.getFullName());
person2.getFullName = function(){
    return this.firstName+" "+this.lastName;
}
console.log('person2.getFullName() function using this keyword to refer names in current object:>> ', person2.getFullName());

person2.address={
    "street":"123 JS street",
    "city":"JS",
    "state":"Karnataka"
}

person2.isFromState = function (state) {
    return this.address.state === state;
}
console.log('person2.isFromState("Karnataka") :>> ', person2.isFromState("Karnataka"));
console.log('person2.isFromState("Maharashtra") :>> ', person2.isFromState("Maharashtra"));

console.log(`
apply and call method of function
------------------------
The apply() method calls a function with a given "this" value, and arguments provided as an array.
The call() method is similar, but instead it takes individual arguments instead of argument array
function myFunction(w, x, y, z) {
    console.log('inside myFunction: w + x + y + z :>> ', w + x + y + z);
}
var args = [1, 2, 3];
myFunction.apply(null, args.concat(4));
myFunction.call(null,8,7,5,9);
`);

function myFunction(w, x, y, z) {
    console.log('inside myFunction: w + x + y + z :>> ', w + x + y + z);
}
var args = [1, 2, 3];
myFunction.apply(null, args.concat(4));
myFunction.call(null,8,7,5,9);

console.log(`
function bindFun1(messagePrefix,result) {
    //console.log('messagePrefix,result :>> ', messagePrefix,result);
    return messagePrefix+" "+result;
}

function performMathOperation(messagePrintingFunction,operation,...numbers){
    let result=0;
    if(operation==="SUM"){
        for(let num of numbers){
            result+=num;
            //console.log('added ',num,' , result :>> ', result);
        }
    }else if(operation==="SUBTRACT"){
        for(let num of numbers){
            result-=num;
        }
    }
    return messagePrintingFunction(result);
}

console.log('performMathOperation(bindFun1.bind("The sum is "),"SUM",4,5,9,11) :>> ', performMathOperation(bindFun1.bind(this,"The sum is"),"SUM",4,5,9,11));
`);

function bindFun1(messagePrefix,result) {
    //console.log('messagePrefix,result :>> ', messagePrefix,result);
    return messagePrefix+" "+result;
}

function performMathOperation(messagePrintingFunction,operation,initialNumber,...numbers){
    let result=initialNumber;
    if(operation==="SUM"){
        for(let num of numbers){
            result+=num;
            //console.log('added ',num,' , result :>> ', result);
        }
    }else if(operation==="SUBTRACT"){
        for(let num of numbers){
            result-=num;
            //console.log('subtracted ',num,' , result :>> ', result);
        }
    }
    return messagePrintingFunction(result);
}

console.log('performMathOperation(bindFun1.bind("The sum is "),"SUM",4,5,9,11) :>> ', performMathOperation(bindFun1.bind(this,"The sum is"),"SUM",100,5,9,11));

console.log('performMathOperation(bindFun1.bind(this,"The subtraction is"),"SUBTRACT",100,10,11,12) :>> ', performMathOperation(bindFun1.bind(this,"The subtraction is"),"SUBTRACT",100,10,11,12));

//Math functions
console.log(`
Math functions
------------------
Math.abs(-7.5) :>> `, Math.abs(-7.5));
console.log('new Date(\'1995-12-26T13:54:59\') :>> ', new Date('1995-12-26T13:54:59'));

var depth=42;
console.log('(depth-7)/5 :>> ', (depth-7)/5);
console.log('Math.ceil((depth-7)/5) :>> ', Math.ceil((depth-7)/5));
console.log('Math.sqrt(81) :>> ', Math.sqrt(81));
console.log('Math.random() :>> ', Math.random());
console.log('Math.E :>> ', Math.E);
console.log('Math.abs(-9) :>> ', Math.abs(-9));
console.log('Math.abs(-8.5) :>> ', Math.abs(-8.5));

console.log(`
get random number between given min and max
-------------------------------------------
function randomIntBetween(min, max) {
    // min: 5, max: 10
    return Math.floor(Math.random() * (max - min + 1) + min); // 10.999999999999 => 10
}
    
console.log('randomIntBetween(1, 10) :>> ', randomIntBetween(1, 10));
`);

function randomIntBetween(min, max) {
  // min: 5, max: 10
  return Math.floor(Math.random() * (max - min + 1) + min); // 10.999999999999 => 10
}
  
console.log('randomIntBetween(1, 10) :>> ', randomIntBetween(1, 10));
  

//constructor function - when you declare a function it has its associated with some object which can be referred by "this"
//eg: below is a constructor function
//should be called with new keyword, otherwise it will be a normal function call
function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = function() {console.log(this.name+": "+this.number);}
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
a.print();
b.print();

var d = new Date();
//d stores the current date and time
console.log('current date d :>> ', d);
//JavaScript dates are calculated in milliseconds from 01 January, 1970 00:00:00 Universal Time (UTC). 
//One day contains 86,400,000 millisecond.
//JavaScript counts months from 0 to 11. January is 0, and December is 11.
//Date objects are static, rather than dynamic. 
//The computer time is ticking, but date objects don't change, once created.

//Date object constructors
//new Date(milliseconds)
//new Date(dateString)
//new Date(year, month, day, hours, minutes, seconds, milliseconds)

//Fri Jan 02 1970 00:00:00
var d1 = new Date(86400000);
console.log('new Date(86400000) d1 :>> ', d1);

//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 2, 2015 10:42:00");
console.log('d2 = Date("January 2, 2015 10:42:00") :>> ', d2);

//Sat Jun 11 2022 11:42:00
var d3 = new Date(2022,5,11,11,42,0,0);
console.log('d3 = Date(2022,5,11,11,42,0,0):>> ', d3);

console.log('d3.getHours() :>> ', d3.getHours());
console.log('d3.getMinutes() :>> ', d3.getMinutes());
console.log('d3.getSeconds() :>> ', d3.getSeconds());
console.log('d3.getDate() :>> ', d3.getDate());
console.log('d3.getFullYear() :>> ', d3.getFullYear());
console.log('d3.getDay() :>> ', d3.getDay());
console.log('d3.getMilliseconds() :>> ', d3.getMilliseconds());

//variable scopes
//you can access global variables inside a function
//variables/function declated inside a function have local scope/block scope
//these variables cannot be accessed outside the function

//global variables are shadowed when variable with same name is declared again in local scope
let userName = 'Max';
function greetUser(name) {
  let userName = name;
  console.log('printing local scope - userName :>> ', userName);
  return;
  //this will not be printed because execution of function stops after encountering return statement
  console.log("test log after function return statement");
}
userName = 'Manu';
greetUser('Max');

function varTest() {
    var x = 1;
    var x = 3;
    console.log("var x is assigned value "+x);
    if (true) {
        var x = 2;  // same variable
        console.log("inside if statement, var x is assigned value 2");
        console.log("value of x inside if statement :>> "+x);  // 2
    }
    console.log("value of x outside :>> "+x);  // 2
}

varTest();

function letTest() {
    let x = 1;
    //if you uncomment below line, you will get "Cannot redeclare block-scoped variable 'x'""
    //let x = 2;
    console.log("let x = 1;");
    if (true) {
        let x = 2;  // different variable
        console.log("inside if statement, let x=2;");
        console.log("value of x inside if statement :>> "+x);  // 2
    }
    console.log("value of x outside :>> "+x);  // 1
}

//One of the best uses for let is in loops
//let and const are not subjected to variable hoisting, which means you cannot use the variable in the code 
//before it is declared/initialized.
letTest();

const a54 = 'Hello';
//will get below error if the below code for assigning second value to "const a54" is uncommented
//TypeError: Assignment to constant variable.
//a54 = 'Bye';


//Different loop forms
console.log("Different loop forms");
console.log(`
let arr = [1, 2, 3];
for (let k = 0; k < arr.length; k++) {
    console.log(arr[k]);
}
`);

let arr2 = [1, 2, 3];
for (let k = 0; k < arr2.length; k++) {
    console.log(arr2[k]);
}

//for of loop for arrays
//cannot be used for objects
//but works on the newly introduced collections in ES6 (Map, Set, WeakMap, and WeakSet)
console.log(`
let list = ["x", "y", "z"];
for (let val of list) {
    console.log(val);
}
`);

let list = ["x", "y", "z"];
for (let val of list) {
    console.log(val);
}

console.log(`
loop with enumerated values by putting them in an array
------------------------------
for (let val of ["x", "y", "z"]) {
    console.log(val);
}
`);

for (let val of ["x", "y", "z"]) {
    console.log(val);
}

console.log(`
iterate characters of string
for (let ch of "Hello") {
    console.log(ch);
}
`);
for (let ch of "Hello") {
    console.log(ch);
}



console.log(`
let obj = {a: 1, b: 2, c: 3};
for (let v in obj) {
    console.log(v);
}
`);

//The for...in loop should NOT be used to iterate over arrays because, 
//depending on the JavaScript engine, it could iterate in an arbitrary order
let obj = {a: 1, b: 2, c: 3};
for (let v in obj) {
    console.log(v+":"+obj[v]);
}

console.log(`
While loop
------------------------------
let finished=false;
let randomNumbers=[];
while(!finished){
    const randomNumber = Math.random();
    randomNumbers.push(randomNumber);
    if(randomNumber>0.5){
        finished=true;
        console.log('randomNumbers :>> ', randomNumbers);
    }
}
`);

let finished=false;
let randomNumbers=[];
while(!finished){
    const randomNumber = Math.random();
    randomNumbers.push(randomNumber);
    if(randomNumber>0.5){
        finished=true;
        console.log('randomNumbers :>> ', randomNumbers);
    }
}

console.log(`
do while loop
------------------------------
used when you want to execute loop body atleast once

practical example:
-----------------
DO {
    Check_Door_Lock();
} WHILE (WAIT_WHILE_DOOR_IS_LOCKED());

let randomNumber;
do{
    randomNumber = Math.random();
    console.log('do while loop, randomNumber is :>> ', randomNumber);
}while(randomNumber<0.5);
`);

let randomNumber;
do{
    randomNumber = Math.random();
    console.log('do while loop, randomNumber is :>> ', randomNumber);
}while(randomNumber<0.5);

console.log(`
lambda function with single argument
no need to specify paranthesis

const greet = x => "Welcome " + x;
console.log(greet("David"));
`);
const greet = x => "Welcome " + x;
console.log(greet("David"));

console.log(`
setters and getters in object
------------------------------
let person007 = {
    name:"James Bond",
    _DOB:"1950-11-3",
    _salary:"100000 dollars",

    get DOB(){
        return this._DOB;
    },

    get salary(){
        return this._salary;
    },
    
    set salary(val){
        if(val<0){
            this._salary="999 dollars"
        } else {
            this._salary=val+" dollars";
        }
    }
}

console.log('person007.DOB :>> ', person007.DOB);
//DOB read only property, not actually set
person007.DOB="1955-11-03";
console.log('person007.DOB :>> ', person007.DOB);
console.log('person007.salary :>> ', person007.salary);
person007.salary=-555;
console.log('person007.salary :>> ', person007.salary);
`);

let person007 = {
    name:"James Bond",
    _DOB:"1950-11-3",
    _salary:"100000 dollars",

    get DOB(){
        return this._DOB;
    },

    get salary(){
        return this._salary;
    },
    
    set salary(val){
        if(val<0){
            this._salary="999 dollars"
        } else {
            this._salary=val+" dollars";
        }
    }
}

console.log('person007.DOB :>> ', person007.DOB);
//DOB read only property, not actually set
//TODO:figure out if below statement throws exception/error under strict or any other mode
person007.DOB="1955-11-03";
console.log('person007.DOB :>> ', person007.DOB);
console.log('person007.salary :>> ', person007.salary);
person007.salary=-555;
console.log('person007.salary :>> ', person007.salary);


console.log(`
Classes in ES6
------------------------------
A class uses the keyword class and contains a constructor method for initializing.
Class Declarations are not hoisted while Function Declarations are. 
If you try to access your class before declaring it, ReferenceError will be returned.
The constructor is a special method which is used for creating and initializing an object created with a class.
There can be only one constructor in each class.

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
}
const poster = new Rectangle(2, 3); 
console.log('poster :>> ', poster);

`);

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
}
const poster = new Rectangle(2, 3); 
console.log('poster :>> ', poster);

class Product {
    // Declaring fields is optional, you can assign default value if you declare fields
    // These fields become object property, when a object gets created from this class
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;
  
    constructor(title, image, desc, price) {
      this.title = title;
      this.imageUrl = image;
      this.description = desc;
      this.price = price;
    }
}

let products =  [
    new Product(
      'A Pillow',
      'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
      'A soft pillow!',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
      'A carpet which you might like - or not.',
      89.99
    )
]
console.log('products :>> ', products);

console.log(`
------------------------------
You can also define a class with a class expression, where the class can be named or unnamed.

//named class
var Square = class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
};
const poster2 = new Square(5, 5);
console.log('poster2 :>> ', poster2);

//unnamed class
var squareVar = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
};

const square = new squareVar(5, 5);
console.log('square :>> ', square);
`);

//named class
var Square = class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
};
const poster2 = new Square(5, 5);
console.log('poster2 :>> ', poster2);

//unnamed class
var squareVar = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
};

const square = new squareVar(5, 5);
console.log('square :>> ', square);

console.log(`
Class methods in ES6
------------------------------
In the code below, area has a getter and setter method though there is no actual property, 
calcArea is a simple method to get current value of area.
private variables in javascript should start with #.
before private variables were available in javascript, variables starting with _(underscore) 
were considered private as a convention. (technically not enforced)

class Rectangle2 {
    #height;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    set height(value){
        if(+value > 0 ) {
            this.#height=value;
        } else {
            this.#height=1;
        }
    }

    get height(){
        return this.#height;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }

    set area(value) {
        this.height = ( +value / this.width );
    }
}
let rect2 = new Rectangle2(5, 5);
console.log('rect2.area :>> ', rect2.area);
rect2 = new Rectangle2(10, 5);
rect2.area=25;
console.log('rect2.height :>> ', rect2.height);
rect2 = new Rectangle2(-1,5);
console.log('rect2.height :>> ', rect2.height);
console.log('rect2.area :>> ', rect2.area);
console.log('rect2 instanceof Rectangle2 :>> ', rect2 instanceof Rectangle2);
console.log('Object.getOwnPropertyDescriptors(rect2) :>> ', Object.getOwnPropertyDescriptors(rect2));
Object.defineProperty(rect2, "RectangleName", {
    configurable:false,
    enumerable:false,
    value:"Rectangle no 2",
    writable:false
});
//RectangleName property not printed below as its not enumerable
console.log('rect2 :>> ', rect2);
//Directly print property name
console.log('rect2.RectangleName :>> ', rect2.RectangleName);
//can't update value of property which has writable set to false
rect2.RectangleName="Rectangle no 5";
console.log('rect2.RectangleName :>> ', rect2.RectangleName);
`);

class Rectangle2 {
    //private variables in javascript should start with #
    #height;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    set height(value){
        if(+value > 0 ) {
            this.#height=value;
        } else {
            this.#height=1;
        }
    }

    get height(){
        return this.#height;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }

    set area(value) {
        this.height = ( +value / this.width );
    }
}
let rect2 = new Rectangle2(5, 5);
console.log('rect2.area :>> ', rect2.area);
rect2 = new Rectangle2(10, 5);
rect2.area=25;
console.log('rect2.height :>> ', rect2.height);
rect2 = new Rectangle2(-1,5);
console.log('rect2.height :>> ', rect2.height);
console.log('rect2.area :>> ', rect2.area);
console.log('rect2 instanceof Rectangle2 :>> ', rect2 instanceof Rectangle2);
console.log('Object.getOwnPropertyDescriptors(rect2) :>> ', Object.getOwnPropertyDescriptors(rect2));
Object.defineProperty(rect2, "RectangleName", {
    configurable:false,
    enumerable:false,
    value:"Rectangle no 2",
    writable:false
});
//RectangleName property not printed below as its not enumerable
console.log('rect2 :>> ', rect2);
//Directly print property name
console.log('rect2.RectangleName :>> ', rect2.RectangleName);
//can't update value of property which has writable set to false
rect2.RectangleName="Rectangle no 5";
console.log('rect2.RectangleName :>> ', rect2.RectangleName);

console.log(`
static class methods in ES6
------------------------------
The static distance method is called directly using the class name, without an object.

class Point {
    static field1 = console.log('field1 called');
    static {
        console.log('Class static block #1 called');
    }
    static field2 = console.log('field2 called');
    static {
        console.log('Class static block #2 called');
    }
    
    static count=0;
    constructor(x, y) {
      this.x = x;
      this.y = y;
      Point.count++;
    }
  
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
  }
  
const p1 = new Point(7, 2);
const p2 = new Point(3, 8);
console.log('Point.distance(p1, p2) :>> ', Point.distance(p1, p2));
//static methods cannot be accessed via objects
//below will throw error
//console.log('p1.distance(p1, p2) :>> ', p1.distance(p1, p2));
console.log('No of point objects, Point.count :>> ', Point.count);
`);

class Point {
    static field1 = console.log('field1 called');
    static {
        console.log('Class static block #1 called');
    }
    static field2 = console.log('field2 called');
    static {
        console.log('Class static block #2 called');
    }

    static count=0;
    constructor(x, y) {
      this.x = x;
      this.y = y;
      Point.count++;
    }
  
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      return Math.hypot(dx, dy);
    }
  }
  
const p1 = new Point(7, 2);
const p2 = new Point(3, 8);
console.log('Point.distance(p1, p2) :>> ', Point.distance(p1, p2));
//static methods cannot be accessed via objects
//below will throw error
//console.log('p1.distance(p1, p2) :>> ', p1.distance(p1, p2));
console.log('No of point objects, Point.count :>> ', Point.count);

console.log(`
inheritance in ES6
------------------------------
If there is a constructor present in the subclass, it needs to first call super() (parent class constructor) before using this. 
Also, the super keyword can be use to call parent object's other methods.
Only after calling super(), you can use "this" keyword to access any properties / execute methods in the constructor

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log("From class Animal: "+this.name + ' makes a noise.');
    }
}
  
class Dog extends Animal {
    speak() {
        super.speak();
        console.log("From class Dog: "+this.name + ' barks.');
    }
}
let dog = new Dog('Rex');
dog.speak();
`);

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log("From class Animal: "+this.name + ' makes a noise.');
    }
}
  
class Dog extends Animal {
    speak() {
        super.speak();
        console.log("From class Dog: "+this.name + ' barks.');
    }
}
let dog = new Dog('Rex');
dog.speak();

console.log(`
Inheritance: calling super constructor and method
------------------------------
class Human{
    constructor(name){
        //super();
        //if you uncomment you will get error: SyntaxError: 'super' keyword unexpected here
        this.name=name;
    }
}
class Student extends Human{
    constructor(name,age){
        //if you dont call super constructor, you will get below error
        //ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super(name);
        this.age=age;
        console.log('this.age :>> ', this.age);
        console.log('this.name :>> ', this.name);
    }
}
let student2=new Student("Mad Max",37);
`);
class Human{
    constructor(name){
        //super();
        //if you uncomment you will get error: SyntaxError: 'super' keyword unexpected here
        this.name=name;
    }
}
class Student extends Human{
    constructor(name,age){
        //if you dont call super constructor, you will get below error
        //ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super(name);
        this.age=age;
        console.log('this.age :>> ', this.age);
        console.log('this.name :>> ', this.name);
    }
}
let student2=new Student("Mad Max",37);

console.log(`
javascript prototypal inheritance
--------------------------------
IMPORTANT: Run and refer output in a browser

Every object in javascript has a prototype property "__proto__". This acts as fallback object 
if any properties or methods which is being accessed/invoked is not found in the actual object.
If the property of an object being accessed is not present in object or in its prototype then its considered undefined.
If method being invoked is not present in either the object or in its prototype, then error will be 
thrown. 
The prototype is itself an object and it also can have "__proto__" property forming 
prototype chain. 
So the method being invoked on an object should be present in atleast one of these 
prototype object present in these chain.
Methods defined in constructor functions are enumerable by default whereas methods defined inside a class
are not

//Object.prototype is root prototype which will be present in the end of prototypal chain
//Object is the global constructor function
//this is also the constructor function that is used when you create objects using literal notation.
console.log('Object.prototype :>> ', Object.prototype);
console.log('sayHello :>> ', sayHello);
console.dir(sayHello);

function Person() {
    this.age = 30;
    this.name = 'Max';
    this.greet = function() {
        console.log(
        'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
        );
    };
}

console.dir(Person);

let p = new Person();
p.greet();
console.log('p.__proto__ :>> ', p.__proto__);
//official way to get prototype of an object
console.log('Object.getPrototypeOf(p) :>> ', Object.getPrototypeOf(p));
//use Object.setPrototypeOf to set prototype
const course6453 = {
    title:"Javascript - the complete guide",
    rating:5
}
Object.setPrototypeOf(course6453, {
    ...Object.getPrototypeOf(course6453),
    printRating: function(){
        console.log('Rating :>> ', this.rating+"/5");
    }
});
course6453.printRating();

//create object with given prototype
const student345 = Object.create({
    printProgress: function() {
      console.log(this.progress);
    }
  }, {
    name: {
      configurable: true,
      enumerable: true,
      value: 'Max',
      writable: true
    }
  });
console.log('student345 :>> ', student345);
//Constructor function Person has "prototype" property, which will be __proto__ property(the fallback object)
//of the created object "p"
//Also function "Person" has __proto__ property which acts as fallback proto object for function
console.log('p.__proto__ === Person.prototype :>> ', p.__proto__ === Person.prototype);

//adding method to object via prototype
//this is what happens behind the scenes when you define methods in a class
Person.prototype.printAge = function () {
    console.log(this.age);
};

p = new Person();
p.printAge();

const p432 = new p.__proto__.constructor();
console.log('p432 :>> ', p432);
`);

//Object.prototype is root prototype which will be present in the end of prototypal chain
//Object is the global constructor function
//this is also the constructor function that is used when you create objects using literal notation.
console.log('Object.prototype :>> ', Object.prototype);
console.log('sayHello :>> ', sayHello);
console.dir(sayHello);

function Person() {
    this.age = 30;
    this.name = 'Max';
    this.greet = function() {
        console.log(
        'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
        );
    };
}

console.dir(Person);

let p = new Person();
p.greet();
console.log('p.__proto__ :>> ', p.__proto__);
//official way to get prototype of an object
console.log('Object.getPrototypeOf(p) :>> ', Object.getPrototypeOf(p));
//use Object.setPrototypeOf to set prototype
const course6453 = {
    title:"Javascript - the complete guide",
    rating:5
}
Object.setPrototypeOf(course6453, {
    ...Object.getPrototypeOf(course6453),
    printRating: function(){
        console.log('Rating :>> ', this.rating+"/5");
    }
});
course6453.printRating();

//create object with given prototype
const student345 = Object.create({
    printProgress: function() {
      console.log(this.progress);
    }
  }, {
    name: {
      configurable: true,
      enumerable: true,
      value: 'Max',
      writable: true
    }
  });
console.log('student345 :>> ', student345);
//Constructor function Person has "prototype" property, which will be __proto__ property(the fallback object)
//of the created object "p"
//Also function "Person" has __proto__ property which acts as fallback proto object for function
console.log('p.__proto__ === Person.prototype :>> ', p.__proto__ === Person.prototype);

//adding method to object via prototype
//this is what happens behind the scenes when you define methods in a class
Person.prototype.printAge = function () {
    console.log(this.age);
};

p = new Person();
p.printAge();

const p432 = new p.__proto__.constructor();
console.log('p432 :>> ', p432);

console.log(`
Map in ES6
------------------------------
An Object is similar to Map but there are important differences that make using a Map preferable in certain cases:
1) The keys can be any type including functions, objects, and any primitive.
2) You can get the size of a Map.
3) You can directly iterate over Map.
4) Performance of the Map is better in scenarios involving frequent addition and removal of key/value pairs.
The size property returns the number of key/value pairs in a map.
Map supports different data types i.e. 1 and "1" are two different keys/values.

let map = new Map([['k1', 'v1'], ['k2', 'v2']]);
console.log('map.size :>> ', map.size); // 2
let map2 = new Map();
map2.set('k1', 'v1').set('k2', 'v2');
console.log("map2.get('k1') :>> ", map2.get('k1')); // v1
console.log("map2.has('k2') :>> ", map2.has('k2')); // true
for (let kv of map2.entries())
    console.log('kv[0] + " : " + kv[1] :>> ', kv[0] + " : " + kv[1]);
`);

let map = new Map([['k1', 'v1'], ['k2', 'v2']]);
console.log('map.size :>> ', map.size); // 2
let map2 = new Map();
map2.set('k1', 'v1').set('k2', 'v2');
console.log("map2.get('k1') :>> ", map2.get('k1')); // v1
console.log("map2.has('k2') :>> ", map2.has('k2')); // true
for (let kv of map2.entries())
    console.log('kv[0] + " : " + kv[1] :>> ', kv[0] + " : " + kv[1]);

console.log(`
Other useful methods in map
---------------------
const person764 = { name: 'Max' };
const person675 = { name: 'Manuel' };
const personMap = new Map([[person764, [{ date: 'yesterday', price: 10 }]]]);
personMap.set(person675, [{ date: 'two weeks ago', price: 100 }]);
console.log('personMap :>> ', personMap);
console.log('personMap.get(person764) :>> ', personMap.get(person764));

Using array destructuring to declare variable and access key-value pair of map
---------
for (const [key, value] of personMap.entries()) { console.log('key, value :>> ', key, value);; }
for (const key of personMap.keys()) { console.log('key :>> ', key);; }
for (const value of personMap.values()) { console.log('value :>> ', value);; }
console.log('personMap.size :>> ', personMap.size);
`);

const person764 = { name: 'Max' };
const person675 = { name: 'Manuel' };
const personMap = new Map([[person764, [{ date: 'yesterday', price: 10 }]]]);
personMap.set(person675, [{ date: 'two weeks ago', price: 100 }]);
console.log('personMap :>> ', personMap);
console.log('personMap.get(person764) :>> ', personMap.get(person764));

//Using array destructuring to declare variable and access key-value pair of map
for (const [key, value] of personMap.entries()) { console.log('key, value :>> ', key, value);; }
for (const key of personMap.keys()) { console.log('key :>> ', key);; }
for (const value of personMap.values()) { console.log('value :>> ', value);; }
console.log('personMap.size :>> ', personMap.size);

console.log(`
Set in ES6
------------------------------
Set supports different data types i.e. 1 and "1" are two different values.
NaN and undefined can also be stored in Set.

let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);

console.log(set.size); // 5
console.log(set);
set = new Set();
set.add(5).add(9).add(59).add(9);

console.log('set.has(9) :>> ', set.has(9));
console.log('set.values() :>> ', set.values());
set.delete(59);
//no error if value doesnt exist
set.delete(60);
for (let v of set.values())
    console.log('iterating, value v :>> ', v);
//below method most likely present for compatibility with Map
for (const entry of set.entries()) {
    console.log('entry :>> ', entry);
}
`);

let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);

console.log('set.size :>> ', set.size); // 5
console.log('set :>> ', set);

set = new Set();
set.add(5).add(9).add(59).add(9);

console.log('set.has(9) :>> ', set.has(9));
console.log('set.values() :>> ', set.values());
set.delete(59);
//no error if value doesnt exist
set.delete(60);
for (let v of set.values())
    console.log('iterating, value v :>> ', v);
//below method most likely present for compatibility with Map
for (const entry of set.entries()) {
  console.log('entry :>> ', entry);
}

console.log(`
WeakSet and WeakMap
------------------
only supports adding and iterating on entries but does not support retrieving of keys/entries
once no other references point to the added entries, they can be garbage collected anytime 
and may no longer be available

let person8464 = {name: 'Max'};
const personWeakSet = new WeakSet();
personWeakSet.add(person8464);

person8464 = null;
console.log('personWeakSet :>> ', personWeakSet);

const personWeakMap = new WeakMap();
personWeakMap.set(person8464, 'Extra info!');
person8464 = null;
console.log('personWeakMap :>> ', personWeakMap);
`);

let person8464 = {name: 'Max'};
const personWeakSet = new WeakSet();
personWeakSet.add(person8464);

person8464 = null;
console.log('personWeakSet :>> ', personWeakSet);

const personWeakMap = new WeakMap();
person8464 = {name: 'Max'};
personWeakMap.set(person8464, 'Extra info!');
person8464 = null;
console.log('personWeakMap :>> ', personWeakMap);

console.log(`
Exception handling in javascript
------------
If the finally-block returns a value, this value becomes the return value of the entire try-catch-finally 
statement, regardless of any return statements in the try and catch-blocks.

try{
    throw 'myException';
}catch(e){
    console.log('exception e :>> ', e);
}

try{
    throw new Error("Something went wrong");
}catch(e){
    console.log('new Error e :>> ', e);
}
`);

try{
    throw 'myException';
}catch(e){
    console.log('exception e :>> ', e);
}

try{
    throw new Error("Something went wrong");
}catch(e){
    console.log('new Error e :>> ', e);
    //console.dir(e);
}

try {
  nonExistentFunction();
} catch (error) {
  console.log("printing error for non existent function");
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
} finally {
  console.log("Done executing try catch block");
}

console.log(`
Regular expressions in javascript
----------------------
const aliceExcerpt = 'The Caterpillar and Alice looked at each other';
const regexpWithoutE = /\b[a-df-z]+\b/ig;
console.log(aliceExcerpt.match(regexpWithoutE));
// expected output: Array ["and", "at"]

const imageDescription = 'This image has a resolution of 1440x900 pixels.';
const regexpSize = /([0-9]+)x([0-9]+)/;
const match = imageDescription.match(regexpSize);
`+'console.log(`Width: ${match[1]} / Height: ${match[2]}.`);'+`
// expected output: "Width: 1440 / Height: 900."
`);


const aliceExcerpt = 'The Caterpillar and Alice looked at each other';
const regexpWithoutE = /\b[a-df-z]+\b/ig;
console.log(aliceExcerpt.match(regexpWithoutE));
// expected output: Array ["and", "at"]

const imageDescription = 'This image has a resolution of 1440x900 pixels.';
const regexpSize = /([0-9]+)x([0-9]+)/;
const match = imageDescription.match(regexpSize);
console.log('match :>> ', match);
console.log(`Width: ${match[1]} / Height: ${match[2]}.`);
// expected output: "Width: 1440 / Height: 900."

console.log(`
Promises in javascript
----------------------
The Promise object represents the eventual completion (or failure) of an asynchronous operation 
and its resulting value.
A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate 
handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous 
methods return values like synchronous methods: instead of immediately returning the final value, the 
asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

PENDING => Promise is doing work, neither then() nor catch() executes at this moment
RESOLVED => Promise is resolved => then() executes
REJECTED  => Promise was rejected => catch() execut

When you have another then() block after a catch() or then() block, the promise re-enters PENDING mode 
(keep in mind: then() and catch() always return a new promise - either not resolving to anything or resolving 
to what you return inside of then()). Only if there are no more then() blocks left, 
it enters a new, final mode: SETTLED.

Once SETTLED, you can use a special block - finally() - to do final cleanup work. finally() is reached 
no matter if you resolved or rejected before.

Simplified usage of Promise (ignore passing reject handler function (2nd param) to then):
somePromiseCreatingCode()
    .then(firstResult => {
        return 'done with first promise';
    })
    .catch(err => {
        // would handle any errors thrown before
        // implicitly returns a new promise - just like then()
    })
    .finally(() => {
        // the promise is settled now - finally() will NOT return a new promise!
        // you can do final cleanup work here
    });

NOTE: for more complex example. refer jsPromiseExample.js

// creating a promise which resolves after given duration
const setTimer = (duration,valueToReturn) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(valueToReturn){
        console.log('RESOLVED after duration '+duration+':>> ', valueToReturn);
        resolve(valueToReturn);
      }else{
        resolve('Done!');
      }
    }, duration);
  });
  return promise;
};

setTimer(4000,"setTimer return value 1").then(sucMessage=>{
    console.log("executing after timer is done - ",sucMessage);
})

const myPromise = new Promise((resolve, reject) => {
    console.log('function inside my promise called, now setting timeout');
    setTimeout(() => {
        console.log("myPromise after setTimeout - executing randomIntBetween");
        let randno5645 = randomIntBetween(0, 10);
        if(randno5645<=5){
            console.log("resolving with message - SUCCESS - randno5645 is less than 5");
            resolve('SUCCESS - randno5645 is less than 5');
        } else {
            console.log("rejecting with message - REJECT - randno5645 is greater than 5");
            reject("REJECT - randno5645 is greater than 5");
        }
        console.log("done executing function inside myPromise setTimeout");
    }, 500);
});

console.log('myPromise creation done ');

myPromise
//propogating success/reject messages in second promise
.then(sucMessageA => {
    console.log('sucMessageA :>> ', sucMessageA);
    return "SUCCESS - second promise";
}, failMessageA => {
    console.log('failMessageA :>> ', failMessageA);
    throw "FAILURE - second promise";
})
.catch(errorMessage => {
    console.log('catched errorMessage :>> ', errorMessage);
    return "FAILURE to SUCCESS from catch block";
})
.then(message => {
    const promiseFunction = function (resolve,reject) {
        if(message.startsWith("SUCCESS")){
            resolve("SUCCESS in third promise");
        }else{
            reject("FAILURE in third promise");
        }
    }
    return new Promise(promiseFunction);
})
.then(sucMessageC => {
    console.log('sucMessageC :>> ', sucMessageC);
    return "fourth promise - final status is SUCCESS";
}, failMessageC => {
    console.log('failMessageC :>> ', failMessageC);
    return "fourth promise - final status is FAILURE";
})
//finally doesnt affect the outcome of promise chain in anyway, its just used to execute some callback
//code once the preceeding promise/promise chain is fulfilled or rejected.
.finally(() => {
    console.log('finally block - done');
    return "This value is not considered because expected return type of finally function is void";
})
`);

// creating a promise which resolves after given duration
const setTimer = (duration,valueToReturn) => {
  const promise = new Promise((resolve, reject) => {
    console.log('setting time out duration '+duration+" valueToReturn: "+valueToReturn);
    setTimeout(() => {
      if(valueToReturn){
        console.log('RESOLVED after duration '+duration+':>> ', valueToReturn);
        resolve(valueToReturn);
      }else{
        resolve('Done!');
      }
    }, duration);
  });
  return promise;
};

setTimer(4000,"setTimer return value 1").then(sucMessage=>{
    console.log("executing after timer is done - ",sucMessage);
})

const myPromise = new Promise((resolve, reject) => {
    console.log('function inside my promise called, now setting timeout');
    setTimeout(() => {
        console.log("myPromise after setTimeout - executing randomIntBetween");
        let randno5645 = randomIntBetween(0, 10);
        if(randno5645<=5){
            console.log("resolving with message - SUCCESS - randno5645 is less than 5");
            resolve('SUCCESS - randno5645 is less than 5');
        } else {
            console.log("rejecting with message - REJECT - randno5645 is greater than 5");
            reject("REJECT - randno5645 is greater than 5");
        }
        console.log("done executing function inside myPromise setTimeout");
    }, 500);
});

console.log('myPromise creation done ');

myPromise
//propogating success/reject messages in second promise
.then(sucMessageA => {
    console.log('sucMessageA :>> ', sucMessageA);
    return "SUCCESS - second promise";
}, failMessageA => {
    console.log('failMessageA :>> ', failMessageA);
    throw "FAILURE - second promise";
})
.catch(errorMessage => {
    console.log('catched errorMessage :>> ', errorMessage);
    return "FAILURE to SUCCESS from catch block";
})
.then(message => {
    const promiseFunction = function (resolve,reject) {
        if(message.startsWith("SUCCESS")){
            resolve("SUCCESS in third promise");
        }else{
            reject("FAILURE in third promise");
        }
    }
    return new Promise(promiseFunction);
})
.then(sucMessageC => {
    console.log('sucMessageC :>> ', sucMessageC);
    return "fourth promise - final status is SUCCESS";
}, failMessageC => {
    console.log('failMessageC :>> ', failMessageC);
    return "fourth promise - final status is FAILURE";
})
//finally doesnt affect the outcome of promise chain in anyway, its just used to execute some callback
//code once the preceeding promise/promise chain is fulfilled or rejected.
.finally(() => {
    console.log('finally block - done');
    return "This value is not considered because expected return type of finally function is void";
})

console.log(`
async and await
---------------
A function in javascript can be declared as async. This automatically causes the return type of function to be
a promise.(this is done automatically by javascript). Now you can use "await" inside this function to 
immediately get the return value from other function calls which return promise. await cannot be used at any 
other place than inside the function marked as async. Code after each await expression can be thought of as 
existing in a .then callback.
Inside function calls you can use try catch block to handle errors thrown by promises on which we are doing
await. async await should not be used in a function where you want to execute multiple things simultaneously
as using async await will automatically cause different parts of function to be chained on the outcome of the
promise.

async function foo() {
    await 1
}
//...is equivalent to:
function foo() {
    return Promise.resolve(1).then(() => undefined)
}

(async ()=>{
    console.log("async IIFE before await setTimeout");
    await setTimeout(()=>{console.log("async IIFE await setTimeout executed");}, 3000);
    console.log("async IIFE after await setTimeout");
})().then(console.log("IIFE promise completed - now in then block"));

async function asyncFun1NotActuallyCalledAnywhere(){
    console.log("asyncFun1NotActuallyCalledAnywhere START");
    await setTimer(3000,"asyncFun1NotActuallyCalledAnywhere timer 1");
    console.log("asyncFun1NotActuallyCalledAnywhere middle");
    await setTimer(3000,"asyncFun1NotActuallyCalledAnywhere timer 2");
    console.log("asyncFun1NotActuallyCalledAnywhere END");
}

//demonstrating try catch for await
function downloadData(url){
    //mock method for downloading data from URL
    let randno5645 = randomIntBetween(0, 10);
    if(randno5645<=5){
        console.log("downloadData - resolving after 3 seconds");
        return setTimer(3000,"DATA for url(method downloadData): "+url);
    } else {
        console.log("downloadData - reject");
        return new Promise((resolve,reject)=>{
            reject("Downloading failed");
        })
    }
}

function downloadFallbackData(url){
    //mock method for downloading data from URL
    return setTimer(2000,"FALLBACK DATA for url(method downloadFallbackData): "+url);
}

function processDataInWorker(data){
    return new Promise((resolve,reject)=>{
        console.log('processed data :>> ', data);
        resolve("PROCESSED data: "+data)
    });
}

function getProcessedData(url) {
    console.log("getProcessedData entry: "+url);
    try{
        return downloadData(url) // returns a promise
            .catch(e => {
            return downloadFallbackData(url)  // returns a promise
            })
            .then(v => {
                return processDataInWorker(v)  // returns a promise
            });
    }finally{
        console.log("getProcessedData exit: "+url);
    }
}

//this can be rewritten as below, notice we can use try catch normally with await
async function getProcessedDataAsync(url) {
  let v;
  console.log("getProcessedDataAsync entry: "+url);
  try {
    v = await downloadData(url)
  } catch(e) {
    v = await downloadFallbackData(url)
  }
  //alternatively you can chain promise with catch as below
  /*
  const v = await downloadData(url).catch(e => {
    return downloadFallbackData(url)
  })
  */
  try{
    return processDataInWorker(v)
  }finally{
    console.log("getProcessedDataAsync exit: "+url);
  }
}

//cant get value from promise in main thread. so just logging promise object
console.log('getProcessedData("http://www.google.com") :>> ', getProcessedData("http://www.google.com"));
console.log('getProcessedDataAsync("http://www.google.com") :>> ', getProcessedDataAsync("http://www.google.com"));
`);

async function foo() {
    await 1
}
//...is equivalent to:
function foo() {
    return Promise.resolve(1).then(() => undefined)
}

(async ()=>{
    console.log("async IIFE before await setTimeout");
    await setTimeout(()=>{console.log("async IIFE await setTimeout executed");}, 3000);
    console.log("async IIFE after await setTimeout");
})().then(console.log("IIFE promise completed - now in then block"));

async function asyncFun1NotActuallyCalledAnywhere(){
    console.log("asyncFun1NotActuallyCalledAnywhere START");
    await setTimer(3000,"asyncFun1NotActuallyCalledAnywhere timer 1");
    console.log("asyncFun1NotActuallyCalledAnywhere middle");
    await setTimer(3000,"asyncFun1NotActuallyCalledAnywhere timer 2");
    console.log("asyncFun1NotActuallyCalledAnywhere END");
}

//demonstrating try catch for await
function downloadData(url){
    //mock method for downloading data from URL
    let randno5645 = randomIntBetween(0, 10);
    if(randno5645<=5){
        console.log("downloadData - resolving after 3 seconds");
        return setTimer(3000,"DATA for url(method downloadData): "+url);
    } else {
        console.log("downloadData - reject");
        return new Promise((resolve,reject)=>{
            reject("Downloading failed");
        })
    }
}

function downloadFallbackData(url){
    //mock method for downloading data from URL
    return setTimer(2000,"FALLBACK DATA for url(method downloadFallbackData): "+url);
}

function processDataInWorker(data){
    return new Promise((resolve,reject)=>{
        console.log('processed data :>> ', data);
        resolve("PROCESSED data: "+data)
    });
}

function getProcessedData(url) {
    console.log("getProcessedData entry: "+url);
    try{
        return downloadData(url) // returns a promise
            .catch(e => {
            return downloadFallbackData(url)  // returns a promise
            })
            .then(v => {
                return processDataInWorker(v)  // returns a promise
            });
    }finally{
        console.log("getProcessedData exit: "+url);
    }
}

//this can be rewritten as below, notice we can use try catch normally with await
async function getProcessedDataAsync(url) {
  let v;
  console.log("getProcessedDataAsync entry: "+url);
  try {
    v = await downloadData(url)
  } catch(e) {
    v = await downloadFallbackData(url)
  }
  //alternatively you can chain promise with catch as below
  /*
  const v = await downloadData(url).catch(e => {
    return downloadFallbackData(url)
  })
  */
  try{
    return processDataInWorker(v)
  }finally{
    console.log("getProcessedDataAsync exit: "+url);
  }
}

//cant get value from promise in main thread. so just logging promise object
console.log('getProcessedData("http://www.google.com") :>> ', getProcessedData("http://www.google.com"));
console.log('getProcessedDataAsync("http://www.google.com") :>> ', getProcessedDataAsync("http://www.google.com"));

console.log(`
Async functions and execution order
-----------------------------------
Reference: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#async_functions_and_execution_order

TODO
`);

function resolveAfter2Seconds() {
  console.log("starting slow promise")
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("slow")
      console.log("slow promise is done")
    }, 2000)
  })
}

function resolveAfter1Second() {
  console.log("starting fast promise")
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("fast")
      console.log("fast promise is done")
    }, 1000)
  })
}

async function sequentialStart() {
  console.log('==SEQUENTIAL START==')

  // 1. Execution gets here almost instantly
  const slow = await resolveAfter2Seconds()
  console.log(slow) // 2. this runs 2 seconds after 1.

  const fast = await resolveAfter1Second()
  console.log(fast) // 3. this runs 3 seconds after 1.
}

async function concurrentStart() {
  console.log('==CONCURRENT START with await==');
  const slow = resolveAfter2Seconds() // starts timer immediately
  const fast = resolveAfter1Second() // starts timer immediately

  // 1. Execution gets here almost instantly
  console.log(await slow) // 2. this runs 2 seconds after 1.
  console.log(await fast) // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
}

function concurrentPromise() {
  console.log('==CONCURRENT START with Promise.all==')
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
    console.log(messages[0]) // slow
    console.log(messages[1]) // fast
  })
}
//If you wish to safely perform two or more jobs in parallel, you must await a call to Promise.all, or Promise.allSettled.
async function parallel() {
  console.log('==PARALLEL with await Promise.all==')

  // Start 2 "jobs" in parallel and wait for both of them to complete
  await Promise.all([
      (async()=>console.log(await resolveAfter2Seconds()))(),
      (async()=>console.log(await resolveAfter1Second()))()
  ])
}

sequentialStart() // after 2 seconds, logs "slow", then after 1 more second, "fast"

// wait above to finish
setTimeout(concurrentStart, 4000) // after 2 seconds, logs "slow" and then "fast"

// wait again
setTimeout(concurrentPromise, 7000) // same as concurrentStart

/*
The functions concurrentStart and concurrentPromise are not functionally equivalent.
------------------------------

In concurrentStart, if promise fast rejects before promise slow is fulfilled, 
then an unhandled promise rejection error will be raised, regardless of whether 
the caller has configured a catch clause.

In concurrentPromise, Promise.all wires up the promise chain in one go, meaning 
that the operation will fail-fast regardless of the order of rejection of the 
promises, and the error will always occur within the configured promise chain, 
enabling it to be caught in the normal way.
*/

// wait again
setTimeout(parallel, 10000) // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"

console.log(`
Promise.race
------------------
Takes array/iterable of promises as input. 
The Promise.race() method returns a promise that fulfills or rejects as soon as one of 
the promises in an iterable fulfills or rejects, with the value or reason from that promise.


Promise.race([
    new Promise((resolve,reject)=>{
        //wait for one second and reject
        (async ()=>{await setTimer(1000,"Timer for waiting on early reject promise in Promise.race")})();
        reject("Promise.race - reject after one second");
        //if you want to ignore errors/reject, then return null
        //return null;
    }),
    setTimer(2000,"Promise.race - resolve after 2 seconds"),
    setTimer(3000,"Promise.race - resolve after 3 seconds")
    .then(sucMessage=>{console.log('Promise.race 3 second promise resolved - sucMessage :>> ', sucMessage);})
])
.then(firstSuccessPromiseMessage => {
        console.log('Promise.race done - firstSuccessPromiseMessage :>> ', firstSuccessPromiseMessage);
      },
      firstFailPromiseMessage => {
        console.log('Promise.race done - firstFailPromiseMessage :>> ', firstFailPromiseMessage);
      }
);
`);
Promise.race([
    new Promise((resolve,reject)=>{
        //wait for one second and reject
        (async ()=>{await setTimer(1000,"Timer for waiting on early reject promise in Promise.race")})();
        reject("Promise.race - reject after one second");
        //if you want to ignore errors/reject, then return null
        //return null;
    }),
    setTimer(2000,"Promise.race - resolve after 2 seconds"),
    setTimer(3000,"Promise.race - resolve after 3 seconds")
    .then(sucMessage=>{console.log('Promise.race 3 second promise resolved - sucMessage :>> ', sucMessage);})
])
.then(firstSuccessPromiseMessage => {
        console.log('Promise.race done - firstSuccessPromiseMessage :>> ', firstSuccessPromiseMessage);
      },
      firstFailPromiseMessage => {
        console.log('Promise.race done - firstFailPromiseMessage :>> ', firstFailPromiseMessage);
      }
);

console.log(`
Promise.any
--------------
Promise.any() takes an iterable of Promise objects. It returns a single promise that 
resolves as soon as any of the promises in the iterable fulfills, with the value of 
the fulfilled promise. If no promises in the iterable fulfill (if all of the given 
promises are rejected), then the returned promise is rejected with an AggregateError, 
a new subclass of Error that groups together individual errors.

Promise.any([
    new Promise((resolve,reject)=>{
        //wait for one second and reject
        (async ()=>{await setTimer(1000,"Timer for waiting on early reject promise in Promise.any")})();
        reject("Promise.any - reject after one second");
    }),
    setTimer(2000,"Promise.any - resolve after 2 seconds"),
    setTimer(3000,"Promise.any - resolve after 3 seconds")
    .then(sucMessage=>{console.log('Promise.any 3 second promise resolved - sucMessage :>> ', sucMessage);})
])
.then(firstSuccessPromiseMessage => {
        console.log('Promise.any done - firstSuccessPromiseMessage :>> ', firstSuccessPromiseMessage);
      },
      firstFailPromiseMessage => {
        console.log('Promise.any done - firstFailPromiseMessage :>> ', firstFailPromiseMessage);
      }
);
`);

Promise.any([
    new Promise((resolve,reject)=>{
        //wait for one second and reject
        (async ()=>{await setTimer(1000,"Timer for waiting on early reject promise in Promise.any")})();
        reject("Promise.any - reject after one second");
    }),
    setTimer(2000,"Promise.any - resolve after 2 seconds"),
    setTimer(3000,"Promise.any - resolve after 3 seconds")
    .then(sucMessage=>{console.log('Promise.any 3 second promise resolved - sucMessage :>> ', sucMessage);})
])
.then(firstSuccessPromiseMessage => {
        console.log('Promise.any done - firstSuccessPromiseMessage :>> ', firstSuccessPromiseMessage);
      },
      firstFailPromiseMessage => {
        console.log('Promise.any done - firstFailPromiseMessage :>> ', firstFailPromiseMessage);
      }
);

console.log(`
Promise.allSettled
---------------------
The Promise.allSettled() method returns a promise that resolves after 
all of the given promises have either fulfilled or rejected, with an array 
of objects that each describes the outcome of each promise.

Promise.all
-----------
The Promise.all() method takes an iterable of promises as an input, and returns 
a single Promise that resolves to an array of the results of the input promises.
It rejects immediately upon any of the input promises rejecting or non-promises throwing an error

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));
`);

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log("Promise.allSettled: "+result.status)));
// expected output:
// "fulfilled"
// "rejected"

console.log(`
Libraries
----------
Lodash library has useful functions like show difference between two arrays etc
Axios library is useful for issuing HTTP requests (refer "JS DOM Notes.txt" for code samples)
`);

console.log(`
Modules in javascript
--------------------
Modules in javascript allows you to package your code in different files and allows you to specify
dependencies.

Modularization of javascript is done by using keywords import and export
javascript module files have ".mjs" extension though its not a strict requirement.

To use code(variables/functions/classes) defined in one javascript file in another file
you must first export them in the file they are defined.

you can export constant, variable, function, class etc from a module.

Then in the file where you intend to use the exported code, you must import them by specifying
the name and the file name.

If you have modularized your javascript code, then in your html code you only 
need to specify only the main script file(using <script> tag), all the dependent 
modules will be automatically downloaded.

Module javascript code will not work if you HTML file from local file system. 
(You will get CORS (cross origin) error). 

so test them you have to serve them from webserver. 

npm serve js package allows you to easily host the files
from a directory via web server.

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
eg code repo: https://github.com/mdn/js-examples/tree/master/module-examples

Using javascript module to your HTML
--------
<script type="module" src="main.js"></script>

Sample code showing export of variable and function
-----------
// file square.js
export const name = 'square';

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}

A more convenient way of exporting all the items you want to export is to use a single export statement at the end of your module file

export { name, draw };

You can have only one default export in one js file.
exporting defaults
------
export default randomSquare;
export default function(ctx) {
  ...
}

Importing features into your script
-------
While importing feature(variable/function/class etc) you specify file path at the end.
it can be either relative path or absolute path from site root.
import { name, draw } from './modules/square.js';

Once you've imported the features into your script, you can use them just like 
they were defined inside the same file, like below
let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');

importing with alias
-----
import {default as randomSquare} from './modules/square.js';

import('./modules/myModule.js')
.then((module) => {
  // Do something with the module.
});

sample code:
let squareBtn = document.querySelector('.square');
squareBtn.addEventListener('click', () => {
  import('./modules/square.js').then((Module) => {
    let square1 = new Module.Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');
    square1.draw();
    square1.reportArea();
    square1.reportPerimeter();
  })
});
`);

console.log(`
Symbols in javascript
---------------------
Symbols are mostly used by library developers.
Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique

console.log('typeof Symbol() :>> ', typeof Symbol());

// Library land
const uid = Symbol();
console.log(uid);

const user345 = {
  // id: 'p1',
  [uid]: 'p1',
  name: 'Max',
  age: 30,
  [Symbol.toStringTag]: 'User'
};

user345[uid] = 'p3';

// app land => Using the library
// symbol variable is not exposed
user345.uid = 'p2'; // this should not be possible!

console.log('user345 :>> ', user345);
console.log("user345[Symbol('uid')] :>> ", user345[Symbol('uid')]);
console.log("Symbol('uid') === Symbol('uid') :>> ", Symbol('uid') === Symbol('uid'));
console.log('user345.toString() :>> ', user345.toString());

//When a Symbol wrapper object is used as a property key, 
//this object will be coerced to its wrapped Symbol:
let sym = Symbol('foo')
let obj3423 = {[sym]: 1}
console.log('obj3423[sym] :>> ', obj3423[sym]);                     // 1
console.log('obj3423[Object(sym)] :>> ', obj3423[Object(sym)]);     // still 1

//symbols are ignored by JSON.stringify
console.log("JSON.stringify({[Symbol('foo')]: 'foo'}) :>> ", JSON.stringify({[Symbol('foo')]: 'foo'}));

//getting Symbol object from the global symbol registry
let p2Priority1 = Symbol.for("p2");
let p2Priority2 = Symbol.for("p2");

console.log('p2Priority1===p2Priority2 :>> ', p2Priority1===p2Priority2);
`);

console.log('typeof Symbol() :>> ', typeof Symbol());

// Library land
const uid = Symbol();
console.log(uid);

const user345 = {
  // id: 'p1',
  [uid]: 'p1',
  name: 'Max',
  age: 30,
  [Symbol.toStringTag]: 'User'
};

user345[uid] = 'p3';

// app land => Using the library
// symbol variable is not exposed
user345.uid = 'p2'; // this should not be possible!

console.log('user345 :>> ', user345);
console.log("user345[Symbol('uid')] :>> ", user345[Symbol('uid')]);
console.log("Symbol('uid') === Symbol('uid') :>> ", Symbol('uid') === Symbol('uid'));
console.log('user345.toString() :>> ', user345.toString());

//When a Symbol wrapper object is used as a property key, 
//this object will be coerced to its wrapped Symbol:
let sym = Symbol('foo')
let obj3423 = {[sym]: 1}
console.log('obj3423[sym] :>> ', obj3423[sym]);                     // 1
console.log('obj3423[Object(sym)] :>> ', obj3423[Object(sym)]);     // still 1

//symbols are ignored by JSON.stringify
console.log("JSON.stringify({[Symbol('foo')]: 'foo'}) :>> ", JSON.stringify({[Symbol('foo')]: 'foo'}));

//getting Symbol object from the global symbol registry
let p2Priority1 = Symbol.for("p2");
let p2Priority2 = Symbol.for("p2");

console.log('p2Priority1===p2Priority2 :>> ', p2Priority1===p2Priority2);

console.log(`
Iterators
------------------
In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

Specifically, an iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties:

value
The next value in the iteration sequence.

done
This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.

sample code
-----------

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next() {
           let result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;
}

const it = makeRangeIterator(1, 10, 2);

let result657 = it.next();
while (!result657.done) {
 console.log('result657.value :>> ', result657.value); // 1 3 5 7 9
 result657 = it.next();
}

console.log("Iterated over sequence of size: ", result657.value); // [5 numbers returned, that took interval in between: 0 to 10]
`);

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next() {
           let result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;
}

const it = makeRangeIterator(1, 10, 2);

let result657 = it.next();
while (!result657.done) {
 console.log('result657.value :>> ', result657.value); // 1 3 5 7 9
 result657 = it.next();
}

console.log("Iterated over sequence of size: ", result657.value); // [5 numbers returned, that took interval in between: 0 to 10]


console.log(`
Iterables
---------
An object is iterable if it defines its iteration behavior, such as what values are looped over in a for...of construct. Some built-in types, such as Array or Map, have a default iteration behavior, while other types (such as Object) do not.

In order to be iterable, an object must implement the @@iterator method. This means that the object 
(or one of the objects up its prototype chain) must have a property with a Symbol.iterator key.

Property Symbol.iterator of the iterable object is a generator function which returns a next()
function. return value of next function is an object with properties "value" and "done" as 
mentioned in iterator protocol.

const myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log('myIterable[Symbol.iterator]().next() :>> ', myIterable[Symbol.iterator]().next());
console.log([...myIterable]); // [1, 2, 3]
`);


const myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log('myIterable[Symbol.iterator]().next() :>> ', myIterable[Symbol.iterator]().next());
console.log('[...myIterable] :>> ', [...myIterable]); // [1, 2, 3]

console.log(`
generator functions
--------------------------------
The function* declaration (function keyword followed by an asterisk) defines a generator function, 
which returns a Generator object.

Yield returns a value only once, and the next time you call the same function it will move on to the next yield statement.

Also in generators we always get the object as output. It always has two properties value and done. And as you can expect, value - returned value, and done shows us whether the generator has finished its job or not.


function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}
  
function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
}
  
var gen = generator(10);
  
console.log('gen.next().value :>> ', gen.next().value); // 10
console.log('gen.next().value :>> ', gen.next().value); // 11
console.log('gen.next().value :>> ', gen.next().value); // 12
console.log('gen.next().value :>> ', gen.next().value); // 13
console.log('gen.next().value :>> ', gen.next().value); // 20

function* counter(value) {
    let step;

    while (true) {
        step = yield value++;

        if (step) {
           value += step;
        }
    }
}
   
const generatorFunc = counter(0);
console.log('generatorFunc.next().value :>> ', generatorFunc.next().value);   // 0
console.log('generatorFunc.next().value :>> ', generatorFunc.next().value);   // 1
console.log('generatorFunc.next().value :>> ', generatorFunc.next().value);   // 2
console.log('generatorFunc.next().value :>> ', generatorFunc.next().value);   // 3
console.log('generatorFunc.next(10).value :>> ', generatorFunc.next(10).value); // 14
console.log('generatorFunc.next().value :>> ', generatorFunc.next().value);   // 15
console.log('generatorFunc.next(10).value :>> ', generatorFunc.next(10).value); // 26
`);

function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}
  
function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
}
  
var gen = generator(10);
  
console.log('gen.next().value :>> ', gen.next().value); // 10
console.log('gen.next().value :>> ', gen.next().value); // 11
console.log('gen.next().value :>> ', gen.next().value); // 12
console.log('gen.next().value :>> ', gen.next().value); // 13
console.log('gen.next().value :>> ', gen.next().value); // 20

function* counter(value) {
    let step;

    while (true) {
        step = yield value++;

        if (step) {
           value += step;
        }
    }
}
   
const generatorFunc = counter(0);
console.log('generatorFunc.next().value :>> ', generatorFunc.next().value);   // 0
console.log('generatorFunc.next().value :>> ', generatorFunc.next().value);   // 1
console.log('generatorFunc.next().value :>> ', generatorFunc.next().value);   // 2
console.log('generatorFunc.next().value :>> ', generatorFunc.next().value);   // 3
console.log('generatorFunc.next(10).value :>> ', generatorFunc.next(10).value); // 14
console.log('generatorFunc.next().value :>> ', generatorFunc.next().value);   // 15
console.log('generatorFunc.next(10).value :>> ', generatorFunc.next(10).value); // 26


console.log(`
Reflect API
------------
Reflect API was introduced as a new global object in ES6, enabling you to invoke Object methods, get and set object property values, construct objects, extend and manipulate properties. It also permits you to create dynamic code-handling frameworks and programs.

Reflect.apply(target, thisArgument, argumentsList)
Calls a target function with arguments as specified by the argumentsList parameter. See also Function.prototype.apply().

Reflect.construct(target, argumentsList[, newTarget])
The new operator as a function. Equivalent to calling new target(...argumentsList). Also provides the option to specify a different prototype.

Reflect.defineProperty(target, propertyKey, attributes)
Similar to Object.defineProperty(). Returns a boolean that is true if the property was successfully defined.

Reflect.deleteProperty(target, propertyKey)
The delete operator as a function. Equivalent to calling delete target[propertyKey].

Reflect.get(target, propertyKey[, receiver])
Returns the value of the property. Works like getting a property from an object (target[propertyKey]) as a function.

Reflect.getOwnPropertyDescriptor(target, propertyKey)
Similar to Object.getOwnPropertyDescriptor(). Returns a property descriptor of the given property if it exists on the object, undefined otherwise.

Reflect.getPrototypeOf(target)
Same as Object.getPrototypeOf().

Reflect.has(target, propertyKey)
Returns a boolean indicating whether the target has the property. Either as own or inherited. Works like the in operator as a function.

Reflect.isExtensible(target)
Same as Object.isExtensible(). Returns a boolean that is true if the target is extensible.

Reflect.ownKeys(target)
Returns an array of the target object's own (not inherited) property keys.

Reflect.preventExtensions(target)
Similar to Object.preventExtensions(). Returns a boolean that is true if the update was successful.

Reflect.set(target, propertyKey, value[, receiver])
A function that assigns values to properties. Returns a boolean that is true if the update was successful.

Reflect.setPrototypeOf(target, prototype)
A function that sets the prototype of an object. Returns a boolean that is true if the update was successful.

sample code for Reflect.defineProperty

let person457 = {
    name: 'John Doe'
};

if (Reflect.defineProperty(person457, 'age', {
        writable: true,
        configurable: true,
        enumerable: false,
        value: 25,
    })) {
    console.log('person457.age :>> ', person457.age);
} else {
    console.log('Cannot define the age property on the person object.');
}

//setting prototype of an object to implement toString.
const course786 = {
  title: 'JavaScript - The Complete Guide'
};

Reflect.setPrototypeOf(course786, {
  toString() {
    return this.title;
  }
});
console.log('""+course786 (toString) :>> ', ""+course786);

Reflect.deleteProperty(course786, 'title');
console.log('course786 :>> ', course786);
`);

let person457 = {
    name: 'John Doe'
};

if (Reflect.defineProperty(person457, 'age', {
        writable: true,
        configurable: true,
        enumerable: false,
        value: 25,
    })) {
    console.log('person457.age :>> ', person457.age);
} else {
    console.log('Cannot define the age property on the person object.');
}

//setting prototype of an object to implement toString.
const course786 = {
  title: 'JavaScript - The Complete Guide'
};

Reflect.setPrototypeOf(course786, {
  toString() {
    return this.title;
  }
});
console.log('""+course786 (toString) :>> ', ""+course786);

Reflect.deleteProperty(course786, 'title');
console.log('course786 :>> ', course786);

console.log(`
Proxy API
----------
The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

//simple proxy showing trap for property get
const target657 = {
  message1: "hello",
  message2: "everyone"
};

const handler3 = {
  get(target, prop, receiver) {
    if (prop === "message2") {
      return "world";
    }
    return Reflect.get(...arguments);
  },
};

const proxy3 = new Proxy(target657, handler3);

console.log(proxy3.message1); // hello
console.log(proxy3.message2); // world
`);

//simple proxy showing trap for property get
const target657 = {
  message1: "hello",
  message2: "everyone"
};

const handler3 = {
  get(target, prop, receiver) {
    if (prop === "message2") {
      return "world";
    }
    return Reflect.get(...arguments);
  },
};

const proxy3 = new Proxy(target657, handler3);

console.log(proxy3.message1); // hello
console.log(proxy3.message2); // world

//function which returns proxy object trapping objects function call
//Calling a method on an object is actually two operations.
// 1. Retrieving the function - get trap. [(A) in below code]
// 2. Calling the function - apply trap. [(B) in below code]
function interceptMethodCalls(obj, fn) {
  return new Proxy(obj, {
    get(target, prop) { // (A)
      if (typeof target[prop] === 'function') {
        return new Proxy(target[prop], {
          apply: (target, thisArg, argumentsList) => { // (B)
            fn(prop, argumentsList);
            return Reflect.apply(target, thisArg, argumentsList);
          }
        });
      } else {
        return Reflect.get(target, prop);
      }
    }
  });
}

let myObj348 = {
  multiply(x, y) {
    return x * y;
  },
  squared(x) {
    return x ** x;
  }
};

const handleMethodCall = (fnName, fnArgs) => console.log(`${fnName} called with `, fnArgs);
proxyMyObj348 = interceptMethodCalls(myObj348, handleMethodCall);
proxyMyObj348.multiply(2, 7); // "multiply called with [ 2, 7 ]"
proxyMyObj348.squared(2); // "squared called with [ 2 ]"

var handle = setInterval(()=>{console.log("call from setinterval");},500);
console.log(`
After setInterval`);
setTimeout(()=>{console.log("calling clearInterval");clearInterval(handle)}, 3000);
console.log(`handle :>> `, handle);
console.log("javascriptBasics END");