import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DieselModel } from '../models/diesel.model';

@Injectable({
  providedIn: 'root'
})
export class DieselService {

  BASE_URL: string = environment.apiUrl + 'diesel';

  constructor(private http: HttpClient) { }

  public getDiesel(): Observable<DieselModel[]> {
    return this.http.get<DieselModel[]>(this.BASE_URL);
  };

  public getOneDiesel(_id: string): Observable<DieselModel> {
    return this.http.get<DieselModel>(this.BASE_URL + '/' + _id);
  }
}
