import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private store: Map<String, any>;

  constructor() { }

  /**
   * Sets new record into cache
   */
  setValue(key: String, value: any, timeToLive: Number) {

  }

  /**
   * Tries to get value from the cache. If there is no value, returns null
   */
  getValue() {

  }

}
