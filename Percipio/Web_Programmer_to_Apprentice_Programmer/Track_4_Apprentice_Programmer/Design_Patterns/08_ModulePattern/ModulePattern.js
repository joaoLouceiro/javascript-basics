// Module - An independent bit of reusable code which are the building blocks of an application
// They should not pollute the global namespace

var counterModule = (function () {
    
    var counter = 0;

    return {
        
        // Only the values being returned are available from outside the module.
        // All variables and methods declared outside of the returned object
        // will not be accessible to the client. 
        // Hence, we define everything we allow the client to do from within
        // the returned functions, without ever exposing the inner-workings of
        // our module.
        getCounter: function() {
            return counter;
        },
    
        incrementCounter: function () {
            counter++;
            console.log("Counter after increment: ", counter);
        },

        decrementCounter: function () {
            counter--;
            console.log("Counter after decrement: ", counter);
        },

        resetCounter: function() {
            console.log("Last value: ", counter);
            counter = 0;

            console.log("Counter reset: ", counter);
        }
    };
})();

console.log(`Counter Module: `, counterModule);


var randomCounterModule = (function () {
    
    // All of these functions, which are being declared in the module's Closure,
    // are accessible by the public methods exposed by the return object, but
    // they are not accessible to the outside world.
    var randomCounter = 0;

    function getRandomNumber() {
        return Math.floor(Math.random() * 10);
    }

    function logCounterValue(message) {
        console.log(message, randomCounter);
    }

    return {

        getCounter: function() {
            return randomCounter;
        },

        incrementCounter: function () {
            randomCounter = randomCounter + getRandomNumber();
            logCounterValue("Counter after increment: ");
        },

        decrementCounter: function () {
            randomCounter = randomCounter - getRandomNumber();
            logCounterValue("Counter after decrement: ");
        },

        randomlyIncrementOrDecrement: function() {
            var number = getRandomNumber();

            // In order to access other publicly available functions, we need to use the 
            // THIS keyword, since they are defined on the object that we return
            if (number % 2 ==0) {
                this.incrementCounter();
            } else {
                this.decrementCounter();
            }
        },

        resetCounter: function() {
            logCounterValue("Last value: ");
            counter = 0;

            logCounterValue("Counter reset: ");
        }
    };
})();

console.log(`Random Counter Module: `, randomCounterModule);