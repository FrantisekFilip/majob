import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RisksService {

  constructor() { }

  getMockRisk() {
    return{mockRisk: 'mockRisk'}
  }
}
