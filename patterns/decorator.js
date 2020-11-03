class Burger {
    getCost() { return 200; }
    getCalories() { return 300; }
}
class Fries {
    getCost() { return 150; }
    getCalories() { return 230; }
}
class Cheesy {
    constructor(food) { this.food = food; }
    getCost() { return this.food.getCost() + 50; }
    getCalories() { return this.food.getCalories() + 100; }
}
// client code
let burger = new Burger();
let cheesyBurger = new Cheesy(burger);
console.log(cheesyBurger.getCost(), cheesyBurger.getCalories());
