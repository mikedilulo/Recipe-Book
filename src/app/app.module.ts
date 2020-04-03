import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./headerComponent/header.component";
import { RecipeComponent } from "./recipeComponent/recipe.component";
import { RecipeDetailComponent } from "./recipeComponent/recipeDetailComponent/recipe-detail.component";
import { RecipeListComponent } from "./recipeComponent/recipeListComponent/recipe-list.component";
import { RecipeItemComponent } from "./recipeComponent/recipeListComponent/recipeItemComponent/recipe-item.component";
import { ShoppingListComponent } from "./shoppingListComponent/shopping-list.component";
import { ShoppingListEditComponent } from "./shoppingListComponent/shoppingListEditComponent/shopping-list-edit.component";
import { ShoppingListService } from "./shoppingListComponent/shopping-list.service";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  { path: "/shopping-list", component: "ShoppingListComponent" }
  { path: "/recipe-list", component: "RecipeComponent" }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
