import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
  selector: "app-recipe-item-component",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {}
  ngOnInit() {}
}
