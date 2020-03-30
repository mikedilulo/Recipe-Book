import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../sharedIngredientModel/ingredient.model";
import { ShoppingListService } from "../shoppingListComponent/shopping-list.service";

@Injectable()
export class RecipeService {
  constructor(private slService: ShoppingListService) {}
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Carmel Cake",
      "Tasty treat for the whole family",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=680&q=80",
      [
        new Ingredient("carmel", 5),
        new Ingredient("cake batter", 2),
        new Ingredient("chocolate", 4),
        new Ingredient("butter", 2)
      ]
    ),
    new Recipe(
      "Candy Oreos",
      "Sweet-Tooth Galore",
      "https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      [
        new Ingredient("oreos", 50),
        new Ingredient("skittles", 14),
        new Ingredient("starbursts", 25),
        new Ingredient("oreo filling", 75)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
