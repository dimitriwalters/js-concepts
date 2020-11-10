interface Wrap { // abstraction
  getCalories(): number;
  addIngredient(ingredient: Ingredient): void;
}
interface Ingredient { // implementor
  getCalories(): number;
}
class Pita implements Wrap { // refined abstraction
  private ingredients: Ingredient[];
  constructor() {
    this.ingredients = [];
  }
  getCalories(): number {
    let cal = 165;
    for (let i=0; i<this.ingredients.length; i++) {
      cal += this.ingredients[i].getCalories();
    }
    return cal;
  }
  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }
}
class Veggies implements Ingredient { // concrete implementor
  getCalories(): number {
    return 120;
  }
}

// client code
let veggies = new Veggies();
let pita = new Pita();
pita.addIngredient(veggies);
console.log(pita.getCalories());
