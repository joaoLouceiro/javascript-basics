"use strict";

console.log("Created object");

var myCar = {
    make: "Volvo",
    model: "s60",
    seats: {
        material: "Leather",
        color: "Brown",
    }
}

let yourCar = Object.freeze(myCar);