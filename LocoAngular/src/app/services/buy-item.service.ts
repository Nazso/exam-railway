import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BuyItem } from '../models/buyItem.model';

@Injectable({
  providedIn: 'root'
})
export class BuyItemService {


  BASE_URL: string = environment.apiUrl + 'buyitem';

  constructor(private http: HttpClient) { }

  public saveBuyItem(buyItem: any): Observable<any> {
    return this.http.post<any>(this.BASE_URL, buyItem)
  }

  public getItems(): Observable<any> {
    return this.http.get(this.BASE_URL)
  }

  public getOneItem(_id: string): Observable<any> {
    return this.http.get(this.BASE_URL + '/' + _id);
  }

  public deleteOne(_id: string): Observable<any> {
    return this.http.delete(this.BASE_URL + '/' + _id)
  }
}
