/*
console.log("Hello");
console.log("I like pizza");

window.alert("This is an alert");

document.getElementById("myH1").textContent = "Hello";
document.getElementById("myP").textContent = "I like pizza";


//comment

let firstname = "Lakatos";

let fullname = `lakatos armando`;
let age = `13`;
let student = true ;

document.getElementById("p1").textContent = `Your name is ${fullname}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `You are a sutdent : ${student}`;

let students = 29;

students += 1;

console.log(students);
1

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}


let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);22

console.log(x)
console.log(y)
console.log(z)


const PI = 3.14159;
let radius;
let cirm;


document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    cirm = 2 * PI * radius;
    document.getElementById("myH3").textContent = cirm + "cm";
}
*/

const decreasebtn = document.getElementById("decreaseBtn");
const resetbtn = document.getElementById("resetBtn");
const increasebtn = document.getElementById("increaseBtn");
const countlabel = document.getElementById("countLabel")
let count = 0;

increasebtn.onclick = function(){
    count ++;
    countlabel.textContent = count;
}
decreasebtn.onclick = function(){
    count --;
    countlabel.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}