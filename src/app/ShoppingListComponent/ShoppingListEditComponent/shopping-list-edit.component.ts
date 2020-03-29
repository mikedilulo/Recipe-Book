import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-shopping-list-edit-component",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"]
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild("ingredientAdded") ingredientNameAdded: ElementRef;
  @ViewChild("ingredientAmount") ingredientAmountAdded: ElementRef;

  constructor() {}

  ngOnInit() {}

  addIngredient() {}
}
