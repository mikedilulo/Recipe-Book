import { Component, OnInit, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header-component",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {}

  constructor() {}

  ngOnInit() {}
}
