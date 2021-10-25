"use strict";

function Patient(id, name, address, bloodGroup) {
    //These two properties are part of the Object:
    this.id = id;
    this.name = name;
    
    //These two properties are part of the function's Closure:
    var _address = address;
    var _bloodGroup = bloodGroup;

    this.printdetails = function() {
        console.log(`The patient details are:
        Patient ID: ${this.id}
        Name: ${this.name}
        Address: ${_address}
        Blood Group: ${_bloodGroup}`)
    }

}

let firstPatient = new Patient (1, "Sarah", "New Street", "O+");

console.log("The first Patient object is: ", firstPatient);
//I can access the properties of the model defined with this., but not the ones defined with the var keyword

console.log("The ID is %s and the name is %s ", firstPatient.id, firstPatient.name);
console.log("The address is %s and the blood group is %s ", firstPatient._address, firstPatient._bloodGroup);
firstPatient.printdetails();