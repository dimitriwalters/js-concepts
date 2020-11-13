class Burger {
    getCost() { return 200; }
    getCalories() { return 300; }
}
class Fries {
    getCost() { return 150; }
    getCalories() { return 230; }
}
class FoodFactory {
    constructor() {
        this.burger = null;
        this.fries = null;
    }
    getBurger() {
        if (this.burger === null) {
            this.burger = new Burger();
        }
        return this.burger;
    }
    getFries() {
        if (this.fries === null) {
            this.fries = new Fries();
        }
        return this.fries;
    }
}
// client code
let foodFactory = new FoodFactory();
let items = [];
items.push(foodFactory.getBurger());
items.push(foodFactory.getBurger());
items.push(foodFactory.getFries());
let totalCost = 0;
for (let food of items) {
    totalCost += food.getCost();
}
console.log(totalCost);
