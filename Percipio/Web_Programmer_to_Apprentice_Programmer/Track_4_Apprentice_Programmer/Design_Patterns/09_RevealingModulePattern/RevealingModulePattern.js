// The Revealing Module Pattern is very simmilar to the Module Pattern
// The main difference is that here all functions are private and
// we selectively expose those functions that we want to make public,
// so we never have to use the THIS keyword

var revealingCounterModule = (function () {
    
    var counter = 0;

    function incrementCounter() {
        counter++;
        console.log("Counter after increment: ", counter);
    }

    function decrementCounter() {
        counter--;
        console.log("Counter after decrement: ", counter);
    }

    function resetCounter() {
        console.log("Last value: ", counter);
        counter = 0;

        console.log("Counter reset: ", counter);
    }

    return {
        // We can now select what functionalities we want to make public
        increment: incrementCounter,
        reset: resetCounter    
    };
})();

console.log(`Revealing Counter Module: `, revealingCounterModule);


// ===================== BEST PRACTICES =========================

// We should always name the functions with PUBLIC or PRIVATE prefixes


var randomCounterModule = (function () {
    
    var randomCounter = 0;
    var randomNumber = privateGetRandomNumber();

    function privateGetRandomNumber() {
        return Math.floor(Math.random() * 10);
    }

    function privateLogCounterValue(message) {
        console.log(message, randomCounter);
    }

    function publicIncrementCounter() {
        randomCounter = randomCounter + randomNumber;
        privateLogCounterValue("Counter after increment: ");
    }

    function publicDecrementCounter() {
        randomCounter = randomCounter - randomNumber;
        privateLogCounterValue("Counter after decrement: ");
    }

    function publicRandomlyIncrementOrDecrement() {
        var number = privateGetRandomNumber();

        // Since all functions are created in the same namespace, we don't need to
        // reference the THIS object
        if (number % 2 ==0) {
            publicIncrementCounter();
        } else {
            publicDecrementCounter();
        }
    }

    function publicResetCounter() {
        privateLogCounterValue("Last value: ");
        counter = 0;

        privateLogCounterValue("Counter reset: ");
    }

    return {
        randomNumberProperty: randomNumber,
        increment: publicIncrementCounter,
        decrement: publicDecrementCounter,
        random: publicRandomlyIncrementOrDecrement,
        reset: publicResetCounter
    }
})();