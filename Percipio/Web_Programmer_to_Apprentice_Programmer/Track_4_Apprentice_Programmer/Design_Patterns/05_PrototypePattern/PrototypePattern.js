var originalSchool = {
    name: "School A",
    numStudents: 1200,
    enrollStudent: function(studentName) {
        console.log("Enroling student: ", studentName, " in ", this.name);
    },
    conductClass: function(className) {
        console.log("Conductiong class: ", className, " in ", this.name);
    }
}

var newSchool = Object.create(originalSchool);

console.log(`Original school: `, originalSchool);
console.log(`New school: `, newSchool);

// When I use Object.create() to create newSchool, doesn't have any property 
// in itself, but it has access to the originalSchool properties via the Prototype

newSchool.enrollStudent("Bob");
newSchool.conductClass("Math");

//I can access the proto functions

newSchool.name = "School B";
newSchool.numStudents = 1500;

// The updates to the object's name and numStudents do not change the prototype's values
// but the methods reference the new properties

newSchool.enrollStudent("Bob");
newSchool.conductClass("Math");


// The best practice when creating Prototypes:
// Prototypes should only have functionality, not attributes 
var schoolPrototype = {
    enrollStudent: function(studentName) {
        console.log("Enroling student: ", studentName, " in ", this.name);
    },
    conductClass: function(className) {
        console.log("Conductiong class: ", className, " in ", this.name);
    } 
}

// Using Object.create we can specify properties in more detail
// (i.e. if we allow the property to be deleted, edited, etc)
var newPrototypeSchool = Object.create(schoolPrototype, {

    "name": {
        value: "My Prototype School",
        writable: false,
        configurable: false,
        enumerable: false
    },
    "numStudents" : {
        value: 1500,
        writable: true,
        configurable: true,
        enumerable: true
    }
});

console.log(`newPrototypeSchool: `, newPrototypeSchool)

//We can also create a prototype that will allow us not to use Object.create()
var noCreatePrototype = {
    init: function(name, numStudents) {
        this.name = name;
        this.numStudents = numStudents;
    },
    enrollStudent: function(studentName) {
        console.log("Enroling student: ", studentName, " in ", this.name);
    },
    conductClass: function(className) {
        console.log("Conductiong class: ", className, " in ", this.name);
    } 
}

// By assigning School.prototype = noCreatePrototype, all schools created using this
// method wil have noCreatePrototype as a Prototype
function createSchool(name, numStudents) {
    
    function School() {

    };

    School.prototype = noCreatePrototype;

    var newSchool = new School();

    newSchool.init(name, numStudents);

    return newSchool;
}

var noCreateSchool = createSchool("My global school", 450);

console.log(`noCreateSchool: `, noCreateSchool);