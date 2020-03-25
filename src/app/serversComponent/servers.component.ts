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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    this.serverCreated = true;
    return (this.serverCreationStatus =
      "Server was Created. Name is " + this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
