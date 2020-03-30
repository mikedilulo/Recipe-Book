import { Ingredient } from "../sharedIngredientModel/ingredient.model";

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient("Skittles", 10),
    new Ingredient("Starbursts", 3),
    new Ingredient("Tootsie Rolls", 100),
    new Ingredient("Chocolate Syrup", 5),
    new Ingredient("Oreo Cookies", 200)
  ];
}
