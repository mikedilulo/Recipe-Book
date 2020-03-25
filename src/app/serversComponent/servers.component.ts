import { Component } from "@angular/core";
@Component({
  selector: "app-servers-component",
  templateUrl: "servers.component.html",
  styleUrls: ["servers.component.css"]
})
export class ServersComponent {
  serverId: number = 7;
  serverStatus: string = "Offline";

  getServerStatus() {
    return this.serverStatus;
  }
}
