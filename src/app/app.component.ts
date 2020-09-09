import { Component } from '@angular/core';
import { ConfigurationService } from "./configuration.service"
import { WsService } from "./infrastructure/ws.service"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public phone;

  public title;

  public address;

  constructor(conf: ConfigurationService, private wsService: WsService) {
    this.title = conf.configuration.test

    wsService.fetchProductInfo()
    .then(resultOk => {
      if (resultOk) {

      }
    })
  }
  
}
