import { Component } from "@angular/core";
@Component({
  selector: "app-servers-component",
  templateUrl: "servers.component.html",
  styleUrls: ["servers.component.css"]
})
export class ServersComponent {
  serverId: number = 10;
  serverStatus: string = "Offline";
}
