function Car (make, model, totalCost) {

    this.make = make;
    this.model = model;

    //Without the THIS keyword, we don't have direct access to these properties
    totalCost = totalCost;
    customFeatures = [];

    this.getTotalCost = function() {
        return totalCost;
    }

    this.getCustomFeatures = function() {
        return customFeatures;
    }

    this.printDetails = function() {
        console.log("Make:", this.make,
        "\nModel:", this.model,
        "\nTotal Cost:", this.getTotalCost(),
        "\nCustom Features:", this.getCustomFeatures());
    }
};

function customColor(car, color, cost) {

    var customFeatures = car.getCustomFeatures();
    var totalCost = car.getTotalCost();

    customFeatures.push("color " + color);

    // This is where the Decorator Pattern comes in: I redefine, that is decorate, 
    // the getCustomFeatures() and the getTotalCost() methods on the car object
    car.getCustomFeatures = function() {
        return customFeatures.concat();
    }

    car.getTotalCost = function() {
        return totalCost + cost
    }

    // The same car object was returned but now it has been decorated with extra attributes
    return car;
};

function alloyWheels(car) {
    var customFeatures = car.getCustomFeatures();
    var totalCost = car.getTotalCost();

    var alloyWheelsCost = 600;

    customFeatures.push("alloy wheels");

    car.getCustomFeatures = function() {
        return customFeatures.concat();
    }

    car.getTotalCost = function() {
        return totalCost + alloyWheelsCost;
    }

    // By returning the car object, we allow for the chaining of decorators
    return car
};

function musicSystem(car) {
    var customFeatures = car.getCustomFeatures();
    var totalCost = car.getTotalCost();

    var musicSystemCost = 200;

    customFeatures.push("music system");

    car.getCustomFeatures = function() {
        return customFeatures.concat();
    }

    car.getTotalCost = function() {
        return totalCost + musicSystemCost;
    }

    return car;
};

var plainCar = new Car("VW", "Polo", 10000);

console.log(`plainCar: `, plainCar);

var customizedCar = customColor(plainCar, "red", 200);
customizedCar.printDetails();

customizedCar = alloyWheels(customizedCar);
customizedCar.printDetails();

customizedCar = musicSystem(plainCar);
customizedCar.printDetails();

console.log(`customizedCar: `, customizedCar);
console.log(`plainCar: `, plainCar);


var anotherCustomizedCar = musicSystem(alloyWheels(customColor(new Car("Honda", "Civic", 13000), "blue", 700)));
anotherCustomizedCar.printDetails();