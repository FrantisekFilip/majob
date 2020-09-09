import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// TODO get url from configuration
const URL_GET_PRODUCT: string = "/pvzp/gdf3/svc/external-intermediary-portal/product/product/majob/";

@Injectable({
  providedIn: 'root'
})
export class WsService {

  private productInfo: any;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Retrieves MAJOB product configuration from WebService. 
   * Includes essential enumerations, limits and so on.
   * 
   * It fills NULL, if there was an error.
   */
  fetchProductInfo(): Promise<boolean> {
    return this.http.get<any[]>(URL_GET_PRODUCT)
      .toPromise()
      .then((data) => {
        console.log('Product info loaded', data)
        this.productInfo = data;
        return true;
      })
      .catch(e => {
        console.error(e)
        this.productInfo = null;
        return false;
      });
  }

}
