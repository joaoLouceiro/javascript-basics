"use strict";

console.log("Is this === window?", this === window);
console.log("What is this? ", this);

var age = 35;
console.log("window.age ", window.age);
console.log("this.age ", this.age);

//No contexto global, this === window

let someFunction = () => this;
console.log("this returned from an arrow function: ", someFunction());

//Arrow functions inherit the scope from their parent