"use strict";

let regularFunction= () => {
    return "Hello";
};

let followUpFunction = msg => {
    console.log("Follow up: ", msg);
};

//We want the followUpFunction to only run after the timeoutFunction
let timeoutFunction = msg => {
    var returnMsg;

    setTimeout(() => {
        console.log("Input msg to timeoutFunction function: ", msg);
        
        returnMsg = msg + " World";
        console.log("timeoutFunction has constructed: ", returnMsg);
        
        return returnMsg;
    }, 3000);
}



console.log("Calling with TIMEOUT_FUNCTION: ");
var regularReturn = regularFunction();
var timeoutReturn = timeoutFunction(regularReturn);
followUpFunction(timeoutReturn);


let timeoutFunctionCallback = (msg, callback) => {

    var returnMsg;

    setTimeout(() => {
        console.log("Input msg to timeoutFunctionCallback function: ", msg);
        
        returnMsg = msg + " World";
        console.log("timeoutFunctionCallback has constructed: ", returnMsg);
    }, 6000);

    callback(returnMsg);
};

console.log("\n\n");

console.log("Calling with TIMEOUT_FUNCTION_CALLBACK: ");
var regularReturn = regularFunction();
timeoutFunctionCallback(regularReturn, followUpFunction); 

let timeoutFunctionPromise = msg => {
    return new Promise(resolve => {
        var returnMsg;
        
        setTimeout(() => {
            
            console.log("Input msg to timeoutFunctionPromise function: ", msg);
            
            returnMsg = msg + " World";
            console.log("timeoutFunctionPromise has constructed: ", returnMsg);
            resolve(returnMsg);
            
        }, 10000);
    });
};


console.log("\n\n")
console.log("Calling with TIMEOUT_FUNCTION_PROMISE: ")
var regularReturn = regularFunction();

timeoutFunctionPromise(regularReturn).then((timeoutReturn) => {
    followUpFunction(timeoutReturn)
});

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