import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../sharedIngredientModel/ingredient.model";

@Component({
  selector: "app-shopping-list-component",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Skittles", 10),
    new Ingredient("Starbursts", 3),
    new Ingredient("Tootsie Rolls", 100),
    new Ingredient("Chocolate Syrup", 5),
    new Ingredient("Oreo Cookies", 200)
  ];

  constructor() {}
  ngOnInit() {}

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
