"use strict";

function Car( make, model, price, engine) {
    this.make = make;
    this.model = model;
    this.price = price;
    this.engine = engine;
}

let myCar = new Car("Volvo", "s60", "2500", {"cilinders": 4, "horsepower": "250"});
let yourCar = new Car("Porshe", "911", "8000", {"cilinders": 6, "horsepower": "600"});

console.log(`My car is a ${myCar.make} ${myCar.model}`)

console.log(`Your car is a ${yourCar.make} ${yourCar.model}`)



function Car( make, model, price, engine) {
    this.make = make;
    this.model = model;
    this.price = price;
    this.engine = engine;

    this.details = function() {
        console.log(`
            Model: ${this.model}
            Price: ${this.price}
        `)
    }
}

console.log("myCar from object blueprint: ", myCar)
console.log("Details from object blueprint: ")
myCar.details();

class Vehicle{
    constructor( make, model, price, engine) {
        this.make = make;
        this.model = model;
        this.price = price;
        this.engine = engine;
        
    }
    
    details = function() {
        console.log(`
        Model: ${this.model}
        Price: ${this.price}
        `)
    };
}


myCar = new Vehicle("Volvo", "s60", "2500", {"cilinders": 4, "horsepower": "250"});


console.log("myCar from class: ", myCar)
console.log("Details from class: ")
myCar.details();