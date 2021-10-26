"use strict";

function Student(name) {
    this.name = name;

    this.avgScore = (scoreArray) => 
    scoreArray.reduce((a, b) => a + b)/scoreArray.length;
}

var heidi = new Student("Heidi");
var ralf = new Student("Ralf");

console.log("Heidi: ", heidi.avgScore([64,78,59]));
console.log("Ralf: ", ralf.avgScore([85, 70, 67]));

console.log("The objects are: ")
console.log("Heidi: ", heidi);
console.log("Ralf: ", ralf);

//Each of the objects has it's own copy of 'avgScore()', which is not the best way to implement it.
//Instead, we should use Object.prototype:

function StudentProto(name) {
    this.name = name;
    
    StudentProto.prototype.avgScore = (scoreArray) => 
    scoreArray.reduce((a, b) => a + b)/scoreArray.length;
}

var olaf = new StudentProto("Olaf");
var greg = new StudentProto("Greg");

console.log("Olaf: ", olaf.avgScore([64,78,59]));
console.log("Greg: ", greg.avgScore([85, 70, 67]));

console.log("The objects are: ")
console.log("Olaf: ", olaf);
console.log("Greg: ", greg);


//The standard way classes are implemented in JavaScript creates a copy of every property for every instance created.
//To prevent that, we can make use of the static keyword.
//This doesn't work for functions (?)

class StudentClass {
    static uniName = "XYZ";
    
    constructor(name) {
        this.name = name;
    }
    
    avgScore = (scoreArray) => scoreArray.reduce((a,b) => a+b)/scoreArray.length;
    
    intro = () => {
        console.log("My name is %s and I'm a student at %s.", this.name, this.uniName);
    }
}

var tom = new StudentClass("Tom");
var bob = new StudentClass("Bob");

console.log("Tom: ", tom.avgScore([64,78,59]));
console.log("Bob: ", bob.avgScore([85, 70, 67]));

console.log("The objects are: ")
console.log("Tom: ", tom);
console.log("Bob: ", bob);