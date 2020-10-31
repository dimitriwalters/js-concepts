class Burger {
    getCost() { return 200; }
    getCalories() { return 300; }
}
class Fries {
    getCost() { return 150; }
    getCalories() { return 230; }
}
class BurgerAndFries {
    constructor() {
        let i1 = new Burger();
        let i2 = new Fries();
        this.items = [];
        this.items.push(i1);
        this.items.push(i2);
    }
    getCost() { return 250; }
    getCalories() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i].getCalories();
        }
        return total;
    }
}
// client code
let burgerCombo = new BurgerAndFries();
let burger = new Burger();
console.log('cost', burgerCombo.getCost(), burger.getCost());
console.log('calories', burgerCombo.getCalories(), burger.getCalories());
