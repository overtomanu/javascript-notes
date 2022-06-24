//task1
let task1 = document.getElementById("task-1");
console.log("task1 selected by getElementById: ");
console.dir(task1);
task1=document.querySelector("#task-1");
console.log("task1 selected via querySelector: ");
console.dir(task1);
task1.style.backgroundColor="yellow";
task1.style.color="purple";

//task2
document.querySelector("title").innerText="Assignment - solved !!!";
document.querySelector("title").innerText="Assignment - solved !!! 2nd way";

//task3
document.querySelector("h1").innerText="Assignment - solved!"

//below also works
document.title="direct modification test"
