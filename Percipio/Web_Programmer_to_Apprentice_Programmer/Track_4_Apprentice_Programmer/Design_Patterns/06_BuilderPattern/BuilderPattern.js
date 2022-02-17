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

    constructor() {
        super("car");

    }
};

class Truck extends Vehicle {

    constructor() {

        super("truck");
        
    }
    
};

class TwoWheeler extends Vehicle {

    constructor() {

        super("twowheeler");
        
    }
    
};


// Immediately invoked functions allow us to create objects that are 
// hidden from the global scope / namespace
var vehicleBuilder = (function () {

    vehicleIntance = null;

    // The objective of this builder is to allow us to construct different
    // kinds of vehicles with a variety of properties. We don't have to set 
    // up the properties ourselves, we'll use the builder abstraction.
    return {

        create: function(vehicleType)  {

            switch (vehicleType) {
                case "car":
                    vehicleIntance = new Car();
                    break;
                case "truck":
                    vehicleIntance = new Truck();
                    break;
                case "twowheeler":
                    vehicleIntance = new TwoWheeler();
                    break;
            }

            // We don't return the constructed object, but a reference to the 
            // builder itself. This will allow us to chain function invocations.
            return this;
        },

        make: function(make) {
            vehicleIntance.make = make;
            return this;
        },

        model: function(model) {
            vehicleIntance.model = model;
            return this;
        },

        color: function(color) {
            vehicleIntance.color = color;
            return this;
        },

        wheels: function(wheels) {
            vehicleIntance.wheels = wheels;
            return this;
        },

        //Within the build function, we can validate if the instance being created is valid or not
        build: function() {
            if (!vehicleIntance.make || !vehicleIntance.model) {
                throw Error("Specify make and model")
            }

            return vehicleIntance;
        }
    };
})();

console.log(`vehicleBuilder: `, vehicleBuilder);


// The builder simplifies the construction of the object. The client doesn't have to know what are 
// all the properties, he simply has to follow the steps provided by the builder to create the
// object
var car = vehicleBuilder.create("car")
                .make("VW")
                .model("Polo")
                .build();

console.log(`car: `, car);
