"use strict";

//Other functions that return Promises
let oneFunction = arg => {
    return new Promise (resolve => {
        setTimeout(() => {
            var returnVal = arg;
            console.log("oneFunction: ", returnVal);
            resolve(returnVal);
        }, 2000);
    })
}

let twoFunction = arg => {
    return new Promise (resolve => {
        setTimeout(() => {
            var returnVal = arg + "Two";
            console.log("twoFunction: ", returnVal);
            resolve(returnVal);
        }, 2000);
    })
}

let threeFunction = arg => {
    return new Promise (resolve => {
        setTimeout(() => {
            var returnVal = arg + "Three";
            console.log("threeFunction: ", returnVal);
            resolve(returnVal);
        }, 2000);
    })
}

//This form of structuring Promise resolution is too cluttered (Promisse chains):
let finalVal = arg => {
    return new Promise(resolve => {
        oneFunction(arg).then((one) => {
            twoFunction(one).then((two) => {
                threeFunction(two).then((val) => {
                    console.log("Final val: ", val);
                    resolve();
                })
            })
        })
    })
}

let finalValAsync = async arg => {
    var one = await oneFunction(arg);
    var two = await twoFunction(one);
    var val = await threeFunction(two);
    console.log("Final val: ", val);
}

finalVal("One").then(() => {
    console.log("\n\n");
    console.log("finalVal finished, starting finalValAsync: ")
    finalValAsync("Async")});

//Instead, we should use the asyn/await syntax


