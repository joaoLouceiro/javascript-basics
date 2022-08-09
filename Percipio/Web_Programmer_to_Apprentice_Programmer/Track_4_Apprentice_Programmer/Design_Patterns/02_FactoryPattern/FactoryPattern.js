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
};

class Car extends Vehicle {
    constructor(details) {
        //The attribute 'vehicleType' is predefined inside the Car constructor
        super("car", details.make, details.model);

        //This property is added to the Vehicle's super properties
        this.carType = details.carType;
    }

    //I'm overriding the parent's printDetails function to add more details
    //I extend the functionality by also calling the super.printDetails() function
    printDetails() {
        console.log("*** printDetails:");

        super.printDetails();
        console.log("Car Type: ", this.carType);

        console.log("***");
    }
}

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
}

console.log("========================= First implementation (less elegant) ===============================");

// The Factory object will create the specified object according to the vehicleType property
// The rest of the details will be passed in a details object
class VehicleFactory {

    createVehicle(vehicleType, details) {
        
        //This interface hides the creatin of the object from the client
        var vehicleConstructor = Car;
        if (vehicleType === 'car') {
            vehicleConstructor = Car;
        } else if (vehicleType === 'truck') {
            vehicleConstructor = Truck;
        }

        return new vehicleConstructor(details);
    
    }
}

var vehicleFactory = new VehicleFactory();

console.log(`vehicleFactory:`, vehicleFactory);


var carDetails = {
    "make": "VW",
    "model": "Polo",
    "carType": "Hatchback"
};

var car = vehicleFactory.createVehicle("car", carDetails);

console.log(`car: `, car)
console.log("Is car instance of Car? ", (car instanceof Car));
console.log("Is car instance of Vehicle? ", (car instanceof Vehicle));
console.log("Is car instance of Truck? ", (car instanceof Truck));
console.log("Is car instance of Vehicle Factory? ", (car instanceof Truck));

console.log("========================= End of first implementation (less elegant) ===============================");

console.log("\n\n")

console.log("========================= Second implementation (more elegant) ===============================");


// On this implementation, we create diferent factories for different types of vehicles, 
// instead of having a single factory creating all types of vehicles
class CustomVehicleFactory {
    constructor(vehicleType) {
        if (vehicleType === 'car') {
            this.vehicleConstructor = Car;
        } else if (vehicleType == 'truck') {
            this.vehicleConstructor = Truck;
        }
    }

    createVehicle(details) {
        return new this.vehicleConstructor(details);
    }
}

c

var carFactory = new CustomVehicleFactory("car");
console.log(`carFactory: `, carFactory);

var truckFactory = new CustomVehicleFactory("truck");
console.log(`truckFactory: `, truckFactory);

var car2details = {
    "make": "VW",
    "model": "Polo",
    "carType": "Hatchback"
};

var car2 = carFactory.createVehicle(car2details);
console.log(`car2: `, car2);