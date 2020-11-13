interface Food { // flyweight
  getCost(): number;
  getCalories(): number;
}
class Burger implements Food { // concrete flyweight
  getCost(): number { return 200; }
  getCalories(): number { return 300; }
}
class Fries implements Food { // concrete flyweight
  getCost(): number { return 150; }
  getCalories(): number { return 230; }
}
class FoodFactory { // flyweight factory
  private burger: Burger;
  private fries: Fries;
  constructor() {
    this.burger = null;
    this.fries = null;
  }
  getBurger(): Burger {
    if (this.burger === null) {
      this.burger = new Burger();
    }
    return this.burger;
  }
  getFries(): Fries {
    if (this.fries === null) {
      this.fries = new Fries();
    }
    return this.fries;
  }
}

// client code
let foodFactory = new FoodFactory();
let items: Food[] = [];
items.push(foodFactory.getBurger());
items.push(foodFactory.getBurger());
items.push(foodFactory.getFries());
let totalCost = 0;
for (let food of items) {
  totalCost += food.getCost();
}
console.log(totalCost);
