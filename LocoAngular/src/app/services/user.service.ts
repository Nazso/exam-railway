import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateUser } from '../models/create-user.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly BASE_URL: string = environment.apiUrl + 'user'

  constructor(private http: HttpClient) { }

  public saveUser(user: CreateUser): Observable<any> {
    return this.http.post(this.BASE_URL, user);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.BASE_URL);
  }

  public deleteOneUser(_id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${_id}`)
  }

}
