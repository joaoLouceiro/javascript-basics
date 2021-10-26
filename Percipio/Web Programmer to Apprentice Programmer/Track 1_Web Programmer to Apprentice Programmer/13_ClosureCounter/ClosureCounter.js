"use strict";

function counter() {
    let count = 0;

    function incrementCounter() {
        return count += 1;
    }

    return incrementCounter;
}

let firstCounter = counter();

console.log("1st call of firstCounter(): ", firstCounter());
console.log("2nd call of firstCounter(): ", firstCounter());

for (let i = 0; i < 6; i++) {
    console.log(firstCounter());
}

let secondCounter = counter();

console.log("1st call of secondCounter(): ", secondCounter());
console.log("2nd call of secondCounter(): ", secondCounter());

console.log("Another call of firstCounter(): ", firstCounter());

//This confirms that each function has it's own closure