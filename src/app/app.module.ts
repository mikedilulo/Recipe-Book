import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./serverComponent/server.component";
import { ServersComponent } from "./serversComponent/servers.component";
@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
