var student = {};

console.log(`student: `, student);

student.name = "Alice";
student["university"] = "Uni";
student.gpa = 3.8;

console.log(`student: `, student);

student.printDetails = function() {
    console.log("*** printDetails");
    console.log("Name: ", this.name,
    "Uni: ", this.university,
    "GPA: ", this["gpa"]
    );
    console.log("***");
}

console.log(`student: `, student);



var create_student = Object.create(Object.prototype);

create_student.name = "James";
create_student["university"] = "Uni";
create_student.gpa = 4.1;

create_student.printDetails = function() {
    console.log("*** printDetails");
    console.log("Name: ", this.name,
    "Uni: ", this.university,
    "GPA: ", this["gpa"]
    );
    console.log("***");
}

console.log(`create_student: `, create_student);

var new_student = new Object();

new_student.name = "Bob";
new_student["university"] = "Uni";
new_student.gpa = 4.1;



function StudentFunction(name, university) {
    this.name = name;
    this.university = university;

    this.printDetails = function() {
        console.log("*** printDetails");
        console.log("Name: ", this.name,
        "Uni: ", this.university,
        "GPA: ", this["gpa"]
        );
        console.log("***");
    }
}

var function_student = new StudentFunction("Olaf", "New Uni");

function_student.gpa= 4.0;

console.log(`function_student :`, function_student);

// Assigning attributes / functions to the object's Prototype will share them across all instances
// of that object
StudentFunction.prototype.showDetails = function() {
    console.log("*** showDetails");
    console.log("Name: ", this.name,
    "Uni: ", this.university,
    "GPA: ", this["gpa"]
    );
    console.log("***");
}

class StudentClass {
    constructor(name, university, gpa) {
        this.name = name;
        this.university = university;
        this.gpa = gpa;
    
        this.printDetails = function() {
            console.log("*** printDetails");
            console.log("Name: ", this.name,
            "Uni: ", this.university,
            "GPA: ", this["gpa"]
            );
            console.log("***");
        }
    }

    //Defining functions outside of the class constructor assigns them to the Prototype of the class
    showDetails () {
        console.log("*** showDetails");
        console.log("Name: ", this.name,
        "Uni: ", this.university,
        "GPA: ", this["gpa"]
        );
        console.log("***");
    }
}

var class_student = new StudentClass("Greg", "Uminho", 3.3);

console.log(`class_student: `, class_student);