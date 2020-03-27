import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../sharedIngredientModel/ingredient.model";

@Component({
  selector: "app-shopping-list-component",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor() {}
  ngOnInit() {}
}
