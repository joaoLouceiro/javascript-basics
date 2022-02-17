class Logger {

    constructor() {
        //This random number is here to allow us to see wether 
        // we're using the same instance of the object or not
        this.randomNumber = Math.random();
    }

    log (message) {
        console.log("Logger id: ", this.randomNumber, message);
    }
};

//Immediately invoked function
var notSingletonLogger = (function() {

    // This variable is within the Closure namespace of the funtion, 
    // not in the global namespace
    var instance;

    return {

        // Each time we call getInstance, we'll create a new logger
        getInstance: function() {

            instance = new Logger();

            return instance;
        }
    };
})();

var loggerA1 = notSingletonLogger.getInstance();
var loggerA2 = notSingletonLogger.getInstance();

loggerA1.log("This is not a singleton");
loggerA2.log("Neither is this - Logger ID's are different");
console.log("\n");

// Both ID's are different, wo we're working with two different objects, 
// not a Singleton


var stillNotSingletonLogger = (function() {

    // This variable is within the Closure namespace of the funtion, 
    // not in the global namespace
    var instance;

    return {

        // We'll first verify if there is an instance of logger running
        // before creating one from the getInstance() method
        getInstance: function() {
            if (!instance) {
                instance = new Logger();
            }

            return instance;
        }
    };
})();

var loggerB1 = stillNotSingletonLogger.getInstance();
var loggerB2 = stillNotSingletonLogger.getInstance();

loggerB1.log("Still not a Singleton");
loggerB2.log("Also not a Singleton");


var loggerB3 = new Logger()

loggerB3.log("It can't be a Singleton if I can create more of it");



// For it to be a Singleton we must guarantee that there is only
// one instance of the Logger class instantiated, and that clients
// can't instantiate a new one


// The Immediatly Invoked Function allows me to declare variables 
// and functions that are hidden from the global scope
var singletonLogger = (function () {
    
    var instance;

    // Placing the class declaration inside the IIF guarantees that it is
    // not accessible from outside of the function's Closure
    class SingletonLogger {

        constructor() {
            this.randomNumber = Math.random();
        }
    
        log (message) {
            console.log("Logger id: ", this.randomNumber, message);
        }
    }

    return {

        getInstance: function() {
            if (!instance) {
                instance = new SingletonLogger();
            }

            return instance;
        }
    };

})();

var loggerC1 = singletonLogger.getInstance();
var loggerC2 = singletonLogger.getInstance();

loggerC1.log("This is a Singleton")
loggerC2.log("And this is the same Singleton");

// The only way I have to get a different Logger Object is to completely
// recreate the variable above - singletonLogger