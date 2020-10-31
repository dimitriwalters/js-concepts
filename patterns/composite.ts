interface Food { // component
  getCost(): number;
  getCalories(): number;
}
class Burger implements Food { // leaf
  getCost(): number { return 200; }
  getCalories(): number { return 300; }
}
class Fries implements Food {
  getCost(): number { return 150; }
  getCalories(): number { return 230; }
}
class BurgerAndFries implements Food { // composite
  private items: Food[];
  constructor() {
    let i1 = new Burger();
    let i2 = new Fries();
    this.items = [];
    this.items.push(i1);
    this.items.push(i2);
  }
  getCost(): number { return 250; }
  getCalories(): number {
    let total = 0;
    for (let i=0; i<this.items.length; i++) {
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
