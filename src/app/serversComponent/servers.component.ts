import { Component } from "@angular/core";
@Component({
  selector: "app-servers-component",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent {
  serverId = 5;
  serverStatus = "Online";

  getServerStatus() {
    return this.serverStatus;
  }
}
