import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./headerComponent/header.component";
import { RecipeItemComponent } from "./recipeComponent/recipeListComponent/recipeItemComponent/recipe-item.component";
@NgModule({
  declarations: [AppComponent, HeaderComponent, RecipeItemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
