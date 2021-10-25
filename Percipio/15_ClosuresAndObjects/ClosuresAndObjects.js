"use strict";

var boss =  "Margaret";

function employee(name, title) {
    this.name = name;
    this.title = title;
    this.domain = "Data";

    this.intro = function()  {
        //this.domain is an Object Variable
        //title and name are Closure Variables
        //boss is a global variable
        let empTitle = this.domain + " " + title;
        console.log("My name is %s and I report to %s. My title is %s", name, boss, empTitle);
    }
}

var troy = new employee("Troy", "Analyst");

console.log("Employee intro after init: ")
troy.intro();

boss = "Wolfgang";

console.log("Employee intro after change in boss: ")
troy.intro();

troy.domain = "ML"

console.log("Employee intro after change in domain: ")
troy.intro();

troy.title = "Architect"

console.log("Employee intro after change in title: ")
troy.intro();

//Title and Name can't be changed because they are both closure variables, so they are referencing the values of when the object was initialized.
//Changing the Object's values doesn't change the Closure Scope's variables