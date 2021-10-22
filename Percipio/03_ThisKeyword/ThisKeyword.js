"use strict";

console.log("Is this === window?", this === window);
console.log("What is this? ", this);

var age = 35;
console.log("window.age ", window.age);
console.log("this.age ", this.age);

//In the global context, this === window

let someFunction = () => this;
console.log("this returned from an arrow function: ", someFunction());

//Arrow functions inherit the scope from their parent


let myCar = {
    make: "Volvo",
    model: "s60",
    printThis() {
        console.log("this from myCar: ", this);
    },
    these: this,
    printDetails() {
        console.log(`
        Make: ${this.make}
        Model: ${this.model}`);
    },
    engine: {
        cylinders: 4,
        horsepower: 250,
        printThis() {
            console.log("this from engine: ", this);
        },
        printDetails() {
            console.log(`
                Cylinders: ${this.cylinders}
                Horsepower: ${this.horsepower}
            `)
        }
    }
}

myCar.printThis();
myCar.printDetails();
console.log("this from myCar root: ", myCar.these);

myCar.engine.printThis();
myCar.engine.printDetails();