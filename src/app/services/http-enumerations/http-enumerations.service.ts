import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPaymentMethod } from '../../interfaces/paymentMethod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpEnumerationsService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": "Basic " + btoa("test-ebs:test-ebs")
    })
  };

  constructor(private http: HttpClient) {
    console.log(this.httpOptions);
  }

  getPaymentFrequency(): Observable<any[]> {
    return this.http.get<IPaymentMethod[]>('/pvzp/gdf3/svc/external-intermediary-portal/finance/misc/enum/payment-frequency/');
  }

  getPaymentMethods(): Observable<IPaymentMethod[]> {
    return this.http.get<IPaymentMethod[]>('/pvzp/gdf3/svc/external-intermediary-portal/policy/policy/enum/payment-method/', this.httpOptions);
  }

  getRenewalType(): Observable<any[]> {
    return this.http.get<IPaymentMethod[]>('/pvzp/gdf3/svc/external-intermediary-portal/policy/policy/enum/renewal-type/');
  }
}
