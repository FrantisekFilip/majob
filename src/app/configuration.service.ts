import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  configuration: any = {}
  constructor(http: HttpClient) { 
    this.configuration = http.get("assets/config.json")
  }


}
