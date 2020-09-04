import { Component } from '@angular/core';
import { ConfigurationService } from "./configuration.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(conf: ConfigurationService) {
    conf.configuration.subscribe(r => this.title = r.test)
  }
  title;
}
