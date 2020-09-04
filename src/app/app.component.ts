import { Component } from '@angular/core';
import { ConfigurationService } from "./configuration.service"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(conf: ConfigurationService) {
    this.title = conf.configuration.test
  }
  phone;
  title;
  
}
