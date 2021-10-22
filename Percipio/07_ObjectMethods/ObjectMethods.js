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

var yourCar = Object.create(myCar);

yourCar.seats.color = "White";

console.log("\n\n")
console.log("Effects of Object.create(myCar)");
console.log("My car: ", myCar);
console.log("Your car: ", yourCar);


console.log("\n\n")
console.log("What are the object keys?");
console.log("My car: ", Object.keys(myCar));
console.log("Your car: ", Object.keys(myCar));

console.log("\n\n")
console.log("What are the object values?");
console.log("My car: ", Object.values(myCar));
console.log("Your car: ", Object.values(myCar));

console.log("\n\n")
console.log("What are the object entries?");
console.log("My car: ", Object.entries(myCar));
console.log("Your car: ", Object.entries(myCar));




