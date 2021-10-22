"use strict";

let myCar = {
    make: "Volvo",
    model: "s60",
    engine: {
        cylinders: 4,
        horsepower: 250,
    }
}

let yourCar = {
    make: "Porshe",
    model: "911",
    engine: {
        cylinders: 6,
        horsepower: 600,
    }
}

function printCarDetails() {
    console.log(`
    Make: ${this.make}
    Model: ${this.model}`);
}

function printEngineDetails() {
    console.log(`
    Cylinders: ${this.cylinders}
    Horsepower: ${this.horsepower}`);
}

//the call method defines exactly what 'this' will be in the context of the function

printCarDetails.call(myCar);
printEngineDetails.call(myCar.engine)

printCarDetails.call(yourCar);
printEngineDetails.call(yourCar.engine)