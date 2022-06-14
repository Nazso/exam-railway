import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ElectricModel } from '../models/electric.model';

@Injectable({
  providedIn: 'root'
})
export class ElectricService {

  BASE_URL: string = environment.apiUrl + 'electric';


  constructor(private http: HttpClient) { }

  public getElectric(): Observable<ElectricModel[]> {
    return this.http.get<ElectricModel[]>(this.BASE_URL);
  }

  public getOneElectric(_id: string): Observable<ElectricModel> {
    return this.http.get<ElectricModel>(this.BASE_URL + '/' + _id);
  }

}
