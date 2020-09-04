import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  configuration: any = {}
  constructor(private http: HttpClient) {}

  load() {
    return new Promise((resolve, reject) => {
      this.http.get("assets/config.json").subscribe((r) => {
        this.configuration = r
        resolve(true)
      })
    })
  }
}
