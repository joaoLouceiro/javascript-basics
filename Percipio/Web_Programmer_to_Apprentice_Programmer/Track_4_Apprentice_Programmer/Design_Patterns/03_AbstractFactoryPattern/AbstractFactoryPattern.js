class Vehicle {

    constructor(vehicleType, make, model) {

        this.vehicleType = vehicleType;
        this.make = make;
        this.model = model;
    }

    printDetails() {
        console.log("Vehicle Type: ", this.vehicleType,
                    "Make: ", this.make,
                    "Model: ", this.model
        )
    }

    drive() {
        console.log("Drive: ", this.vehicleType, this.make, this.model);
    }

    fillFuel() {
        console.log("Fill Fuel: ", this.vehicleType, this.make, this.model);
    }
};

class Car extends Vehicle {

    constructor(details) {

        super("car", details.make, details.model);

        this.carType = details.carType;
    }

    printDetails() {
        console.log("*** printDetails:");

        super.printDetails();
        console.log("Car Type: ", this.carType);

        console.log("***");
    }
};

class Truck extends Vehicle {

    constructor(details) {

        super("truck", details.make, details.model);
        
        this.truckType = details.truckType;
    }
    
    printDetails() {
        console.log("*** printDetails:");

        super.printDetails();
        console.log("Truck Type: ", this.truckType);

        console.log("***");
    }
};

class TwoWheeler extends Vehicle {

    constructor(details) {

        super("twowheeler", details.make, details.model);
        
        this.twoWheelerType = details.twoWheelerType;
    }
    
    printDetails() {
        console.log("*** printDetails:");

        super.printDetails();
        console.log("Twho Wheeler Type: ", this.twoWheelerType);

        console.log("***");
    }
};

class VehicleFactory {

    constructor(vehicleType) {

        this.vehicleCtor = Car;

        switch (vehicleType) {
            case "car":
                this.vehicleCtor = Car;
                break;
            case "truck":
                this.vehicleCtor = Truck;
                break;
            case "twowheeler":
                this.vehicleCtor = TwoWheeler;
                break;
        }
    }

    create(details) {
        return new this.vehicleCtor(details);
    }
};

class CarFactory extends VehicleFactory {

    constructor() {
        super("car");
    }
}

class TruckFactory extends VehicleFactory {

    constructor() {
        super("truck");
    }
}

class TwoWheelerFactory extends VehicleFactory {

    constructor() {
        super("twowheeler");
    }
}

//Immediately invoked functions are executed as soon as they are defined
//This is a very important concept in JavaScript Design Patterns
var abstractVehicleFactory = (function() {

    var factoryTypes = {};

    return {

        getVehicle: function(vehicleType, details) {

            var vehicleFactory = factoryTypes[vehicleType];

            // If the vehicle type is found within the registered factoryTypes,
            // the getVehicle function returns the corresponding vehicle type
            if (vehicleFactory) {
                return vehicleFactory.create(details);
            }

            return null;
        },

        // We need to provide a way for factories to register
        registerVehicleFactory: function(vehicleType, vehicleFactory) {
    
            //We need to perform some checks before we allow a factory to be registered
            if (!vehicleFactory.__proto__.create) {
                throw Error("create() method expected on the factory");
            }

            if (!vehicleFactory.vehicleCtor) {
                throw Error("vehicleCtor expected on the factory");
            }

            if (!vehicleFactory.vehicleCtor.prototype.drive ||
                !vehicleFactory.vehicleCtor.prototype.fillFuel) {
                throw Error("Vehicles constructed should have drive() and fillFuel() methods");
            }

            factoryTypes[vehicleType] = vehicleFactory;
        }
    };
})();


abstractVehicleFactory.registerVehicleFactory("car", new CarFactory());
abstractVehicleFactory.registerVehicleFactory("truck", new TruckFactory());

console.log(`abstractVehicleFactory: `, abstractVehicleFactory);

// The factoryTypes variable is not exposed because it was declared inside the Immediately invoked function
// Yet, both functions declared inside the IIF can access the value of that variable because it is part of their closure

var carDetails = {
    "make": "VW",
    "model": "Polo",
    "carType": "Hatchback"
};

var car = abstractVehicleFactory.getVehicle("car", carDetails);

console.log(`car: `, car);


var truckDetails = {
    "make": "MAN",
    "model": "XPTO",
    "carType": "Lorry"
};

var truck = abstractVehicleFactory.getVehicle("truck", truckDetails);

console.log(`truck: `, truck);


var twoWheelerDetails = {
    "make": "Kawasaki",
    "model": "Ninja",
    "carType": "motorbike"
}

var twoWheeler = abstractVehicleFactory.getVehicle("twowheeler", twoWheelerDetails);

console.log(`twoWheeler: `, twoWheeler);

//Since no Two Wheeler factory was registered, the getVehicle() method returns null;