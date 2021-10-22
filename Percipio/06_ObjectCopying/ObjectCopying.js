"use strict";

console.log("Created object");

var myCar = {
    make: "Volvo",
    model: "s60",
    engine: {
        cylinders: 4,
        horsepower: 250,
    }
}

console.log("My car: ", myCar);


console.log("set yourCar = myCar");

//Shallow copy:
var yourCar = myCar;

console.log("Your car: ", yourCar);

console.log("Added properties to my car");
myCar.tyres = "Pirelli";
myCar.engine.foo = "Bar"


//Both variables reference the same data
console.log("My car: ", myCar);
console.log("Your car: ", yourCar);


console.log("Copied object with Object.assign() and {...myCar} and Added properties to his and her car");

var hisCar = Object.assign({}, myCar);
var herCar = {...myCar};

hisCar.color = "Red";
hisCar.engine.bar= "Foo";

herCar.color = "Pink";
herCar.engine.shallow= "Shallow";

console.log("My car: ", myCar);
console.log("Your car: ", yourCar);
console.log("His car: ", hisCar);
console.log("Her car: ", herCar);

//The top level properties of the objects suffer a deep copy, but any nested object is still bound to the same data


console.log("Copied object with JSON and Added properties to our car");

var ourCar = JSON.parse(JSON.stringify(myCar));

ourCar.color="Orange";
ourCar.engine.deep = "Deep";


console.log("My car: ", myCar);
console.log("Your car: ", yourCar);
console.log("His car: ", hisCar);
console.log("Her car: ", herCar);
console.log("Our car: ", ourCar);