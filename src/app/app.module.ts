import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./headerComponent/header.component";
import { RecipeItemComponent } from "./recipeComponent/recipeListComponent/recipeItemComponent/recipe-item.component";
import { RecipeListComponent } from "./recipeComponent/recipeListComponent/recipe-list.component";
import { RecipeDetailComponent } from "./recipeComponent/recipeDetailComponent/recipe-detail.component";
import { RecipeComponent } from "./recipeComponent/recipe.component";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
