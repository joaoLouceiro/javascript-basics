"use strict";
let funcBody =  prompt("Enter the body of your function")

let sumScore = new Function("a", "b", funcBody);

console.log(sumScore(2,5));