"use strict";
let x = 1;
const c = 2;
const nam = "jay";
console.log(x);
console.log(nam);
// function
function greet(nam) {
    console.log(`hello ${nam}`);
}
greet("jack");
// give function what to return: function(a:type,b:type): type {}
// type inference
//  typescript knows a is a nuber , b is number so ans would also be a number
function sum(a, b) {
    return a + b;
}
console.log(sum(4, 3));
// type infernecve : we do not tell that return type is boolean
function userIs18(age) {
    if (age > 18)
        return true;
    else
        return false;
}
const ans = userIs18(22);
//  create a function that takes another function as input and returns after 1 sec
function f1(n) {
    console.log("hi from f1");
    return n + 1;
}
function f2(fn) {
    console.log("hi from f2");
    setTimeout(() => {
        const ans = fn();
        console.log(ans);
    }, 1000);
}
f2(() => f1(3));
