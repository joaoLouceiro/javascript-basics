"use strict";


function Vehicle(type) {
    this.type = type;

    this.printDetails = () => {
        console.log("Type of vehicle is ", this.type);
    }
};

function Car(make, model) {
    this.make = make;
    this.model = model;

    this.printDetails= () => console.log("This car is a %s %s", make, model);
}

function Aeroplane(make, model, numEngines) {
    this.make = make;
    this.model = model;
    this.numEngines = numEngines;
}

Car.prototype = new Vehicle("Car");
var vwGTI = new Car("VW", "GTI");

console.log("VW GTI is ", vwGTI);
vwGTI.printDetails();

Aeroplane.prototype = new Vehicle("Aeroplane");
var redVlad = new Aeroplane("Vlad", "Red", 4);

console.log("Ref Vlad is ", redVlad);

redVlad.printDetails();

function RedVladProto(variantName, factoryLocation) {
    this.variantName = variantName;
    this.factoryLocation = factoryLocation;

    this.printDetails = () => console.log("I'm a %s %s %s, made in %s under the name %s", this.type, this.make, this.model, this.factoryLocation, this.variantName);
}

RedVladProto.prototype = redVlad;
var redVladNeo = new RedVladProto("Neo", "Lisbon");

redVladNeo.printDetails();
console.log("Red Vlad Neo object: ", redVladNeo);