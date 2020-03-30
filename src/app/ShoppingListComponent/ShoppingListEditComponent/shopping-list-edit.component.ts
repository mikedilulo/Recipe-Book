import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/sharedIngredientModel/ingredient.model";

@Component({
  selector: "app-shopping-list-edit-component",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"]
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild("nameInput") nameInputRef: ElementRef;
  @ViewChild("amountInput") amountInputRef: ElementRef;

  constructor() {}

  ngOnInit() {}

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
  }
}
