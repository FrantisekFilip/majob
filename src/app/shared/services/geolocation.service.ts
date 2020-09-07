import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  host = "http://ags.cuzk.cz/arcgis/rest/services/RUIAN/Vyhledavaci_sluzba_nad_daty_RUIAN/MapServer/exts/GeocodeSOE/tables/1/findAddressCandidates"
  findAddress(address: string) {
    let params = new HttpParams()
    .append("SingleLine", address)
    .append("f", "json")
    return this.http.get<any>(`${this.host}?${params.toString()}`)
  }
  constructor(private http: HttpClient) { }
}
