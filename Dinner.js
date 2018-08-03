class Dinner {
    constructor(dishName, protein, veggie, price) {
        this.dishName = dishName;
        this.protein = protein;
        this.veggie = veggie;
        this.price = price;
    }

    printAttributes() {
        alert(this.dishName + "" + this.protein + "grams of protein" + this.veggie + "" + this.price + "dollars");
        return this
    }


}

function main() {
    var mainFood = new Dinner("Spaghetti-O's", 25, "No Veggies", 3);
    alert(mainFood.printAttributes())
}

main();