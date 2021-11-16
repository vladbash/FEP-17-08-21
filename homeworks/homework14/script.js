function Burger(size, topping = []) {
    this.size = size;
    this.toppings = [...topping];
}

Burger.SIZE = {
    small: {
        price: 50,
        nrj: 20
    },
    medium: {
        price: 75,
        nrj: 30,
    },
    big: {
        price: 100,
        nrj: 40
    }
};

Burger.TOPPING = {
    CHEESE: {
        price: 10,
        nrj: 10
    },
    LETTUCE: {
        price: 10,
        nrj: 5
    },
    FRENCH_FRIES: {
        price: 15,
        nrj: 25
    },
    SPICE: {
        price: 15,
        nrj: 1
    },
    EXTRA_MAYO: {
        price: 20,
        nrj: 25
    }
};

Burger.prototype.addTopping = function (...toppings) {
    this.toppings.push(...toppings);
};

Burger.prototype.getPrice = function () {
    return this.size.price + this.toppings.reduce((acc, e) => acc + e.price, 0);
};

Burger.prototype.getCCal = function () {
    return this.size.nrj + this.toppings.reduce((acc, e) => acc + e.nrj, 0);
};

const cheeseBurger = new Burger(Burger.SIZE.medium);

cheeseBurger.addTopping(Burger.TOPPING.CHEESE);
cheeseBurger.addTopping(Burger.TOPPING.LETTUCE);
cheeseBurger.addTopping(Burger.TOPPING.SPICE);

console.log(cheeseBurger, cheeseBurger.getPrice());
console.log(cheeseBurger, cheeseBurger.getCCal());