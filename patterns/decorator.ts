interface Food { // component
  getCost(): number;
  getCalories(): number;
}
class Burger implements Food {
  getCost(): number { return 200; }
  getCalories(): number { return 300; }
}
class Fries implements Food {
  getCost(): number { return 150; }
  getCalories(): number { return 230; }
}
class Cheesy implements Food { // decorator
  private food: Food;
  constructor(food: Food) { this.food = food; }
  getCost(): number { return this.food.getCost() + 50; }
  getCalories(): number { return this.food.getCalories() + 100; }
}

// client code
let burger = new Burger();
let cheesyBurger = new Cheesy(burger);
console.log(cheesyBurger.getCost(), cheesyBurger.getCalories());
