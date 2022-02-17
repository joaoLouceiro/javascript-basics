class Grade {

    constructor(score) {

        var message;
        var letterGrade;
        
        if (score >= 90) {
            letterGrade = "A";
            message = "Excellent!";
        } else if (score >= 75) {
            letterGrade = "B";
            message = "Very good";
        } else if (score >= 60) {
            letterGrade = "C";
            message = "Not bad";
        } else if (score >= 40) {
            letterGrade = "D";
            message = "Needs a lot of improvement";
        } else {
            letterGrade = "F";
            message = "Not living up to your potential";
        }

        this.letterGrade = letterGrade;
        this.message = message;
        this.randomNumber = Math.random();
    }   
}

class Student {

    constructor(name, score) {

        this.name = name;
        this.score = score;

        this.grade = new Grade(score);
    }
}

var studentNames = ["Anita", "Bella", "Charles", "Dora", "Emily", 
                                                    "Fiona", "Gerald"];
var studentScores = [10, 99, 91, 78, 45, 41, 50];

var studentList = [];

for (var i = 0; i < 7; i++) {

    studentList.push(new Student(studentNames[i], studentScores[i]));
}

console.log(studentList);