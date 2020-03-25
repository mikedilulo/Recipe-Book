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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    return (this.serverCreationStatus = "Server was Created");
  }

  onUpdateServerName(event: any) {
    console.log(event);
  }
}
