class Pita {
    constructor() {
        this.ingredients = [];
    }
    getCalories() {
        let cal = 165;
        for (let i = 0; i < this.ingredients.length; i++) {
            cal += this.ingredients[i].getCalories();
        }
        return cal;
    }
    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }
}
class Veggies {
    getCalories() {
        return 120;
    }
}
// client code
let veggies = new Veggies();
let pita = new Pita();
pita.addIngredient(veggies);
console.log(pita.getCalories());
