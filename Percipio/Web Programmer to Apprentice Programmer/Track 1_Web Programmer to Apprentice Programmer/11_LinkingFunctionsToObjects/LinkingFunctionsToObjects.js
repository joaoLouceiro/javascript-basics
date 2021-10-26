"use strict";

let firstScoreCard= {
    name: "Clara",
    math: 75,
    verbal: 82
}

let secondScoreCard= {
    name: "Steve",
    math: 71,
    verbal: 91
}

function printWeightedScore(mathWt, verbalWt) {
    let weightedScore = (mathWt * this.math + verbalWt * this.verbal) / (mathWt+verbalWt);
    console.log(`Weighted score for ${this.name} is ${weightedScore}`);
}

//linking the objects to the function with call()
console.log("\n\n")
console.log("Linking the objects to the function with call()")
printWeightedScore.call(firstScoreCard, 2, 1);
printWeightedScore.call(secondScoreCard, 2, 1);

console.log("\n\n")
console.log("Linking the objects to the function with apply()")
printWeightedScore.apply(firstScoreCard, [2, 1]);
printWeightedScore.apply(secondScoreCard, [2, 1]);

console.log("\n\n")
console.log("Linking the objects to the function with bind()")
let firstScore = printWeightedScore.bind(firstScoreCard);
let secondScore = printWeightedScore.bind(secondScoreCard);

firstScore(2,1);
secondScore(2,1);

//'this' in the context of an Arrow function is always related to the parent's scope

console.log("\n\n")
console.log("Linking the objects to the ARROW function with call()")
let weightedScoreArrow = (mathWt, verbalWt)  => {
    let weightedScore = (mathWt * this.math + verbalWt * this.verbal) / (mathWt+verbalWt);
    console.log(`Weighted score for ${this.name} is ${weightedScore}`);
    console.log(this);
}

weightedScoreArrow.call(firstScoreCard, 2, 1);
weightedScoreArrow.call(secondScoreCard, 2, 1);

console.log("\n\n")
console.log("Linking the objects to the ARROW function with apply()")
weightedScoreArrow.apply(firstScoreCard, [2, 1]);
weightedScoreArrow.apply(secondScoreCard, [2, 1]);

console.log("\n\n")
console.log("Linking the objects to the ARROW function with bind()")
let firstScoreArrow = weightedScoreArrow.bind(firstScoreCard);
let secondScoreArrow = weightedScoreArrow.bind(secondScoreCard);

firstScoreArrow(2,1);
secondScoreArrow(2,1);
