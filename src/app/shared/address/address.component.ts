import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {GeolocationService} from "../services/geolocation.service"
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  private currentSearch : Subscription
  private currentTimeout
  search: string
  candidates: Array<{text: string}> = []
  selected: string = null
  @Output() result = new EventEmitter()

  constructor(private geo : GeolocationService) { }
  
  parseSelected() {
    if(!this.selected) return
    let regex = /([^\d]*) (\d*)(?:\/(\d*)){0,1}, (?:(.*), ){0,1}(\d*) (.*)/
    let match = this.selected.match(regex)
    this.result.emit({
      street: match[1].replace(" č.ev.", ""),
      houseNumber: match[2],
      secondaryNumber: match[3],
      municipality: match[4],
      postal: match[5],
      city: match[6]
    })
  }

  getData() {
    if(this.currentSearch) this.currentSearch.unsubscribe()
    if(this.currentTimeout) clearTimeout(this.currentTimeout)
    this.candidates = []
    this.currentTimeout = setTimeout(() => {
      this.currentSearch = this.geo
        .findAddress(this.search)
        .subscribe(r => this.candidates = r.suggestions)
    }, 700);
  }

  ngOnInit(): void { }

}
