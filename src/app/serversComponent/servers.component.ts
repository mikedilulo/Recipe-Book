import { Component } from "@angular/core";
@Component({
  selector: "app-servers-component",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent {
  serverId = 5;
  serverStatus = "Online";
  allowNewServer = false;
  serverCreationStatus = "Server is not Created";
  serverName = "Death Star Server";
  serverCreated = false;
  servers = ["TestServerOne", "TestServerTwo"];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline";
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    return (this.serverCreationStatus =
      "Server was Created. Name is " + this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
