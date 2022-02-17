// ========================= Underscore.js implementation =========================

class Person {
	constructor(name, city, country) {
		this.name = name;
		this.city = city;
		this.country = country;
	}

	introduction() {
		console.log("Hi, I'm", this.name, "and I'm from", this.city, ',', this.country);
	}
}

var artistMixin = {

    paint: function() {
        console.log(this.name, "can paint");
    },

    dance: function() {
        console.log(this.name, "can dance");
    }
};

// This will add the artist functionality to the Person Prototype turning every person into an artist;
//_.extend(Person.prototype, artistMixin);

var artistPerson = new Person("Olaf", "Berlin", "Germany");
_.extend(artistPerson, artistMixin);

console.log(`artistPerson: `, artistPerson)

var nonArtistPerson = new Person("Greg", "London", "England");
console.log(`nonArtistPerson: `, nonArtistPerson);


var scientistMixin = {

    doMath: function() {
        console.log(this.name, "can do math");
    },

    doStatistics : function() {
        console.log(this.name, "can do Statistics");
    }
};

// ========================= Our own implementation =========================

class PlainPerson {
    constructor(name, city, country) {
		this.name = name;
		this.city = city;
		this.country = country;
	}

    introduction() {
		console.log("Hi, I'm", this.name, "and I'm from", this.city, ',', this.country);
	}
}


artistMixinFn = function() {};

artistMixinFn.prototype = {

    paint: function() {
        console.log(this.name, "can paint");
    },

    dance: function() {
        console.log(this.name, "can dance");
    }
}

function extend(destinationClass, sourceClass, methodList) {
    if (methodList && methodList.length != 0) {
        for (let i = 0; i < methodList.length; i++) {
            destinationClass.prototype[methodList[i]] = sourceClass.prototype[methodList[i]];
        }
    } else {
        for (var methodName in sourceClass.prototype) {
            if (!destinationClass.prototype[methodName]) {
                destinationClass.prototype[methodList] = sourceClass.prototype[methodList];
            }
        }
    }
}

extend(PlainPerson, artistMixinFn, ["paint"]);

var painterPerson = new PlainPerson("Bob", "Porto", "Portugal");

console.log(`painterPerson: `, painterPerson);