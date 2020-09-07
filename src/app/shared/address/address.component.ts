import { Component, OnInit } from '@angular/core';
import {GeolocationService} from "../services/geolocation.service"

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  search: string
  candidates: Array<{address: string}> = []
  constructor(private geo : GeolocationService) { }
  getData() {
    this.geo.findAddress(this.search).subscribe(r => this.candidates = r.candidates)
  }
  ngOnInit(): void {
  }

}
