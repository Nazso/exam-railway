import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../models/user-login.model'
import { BehaviorSubject, Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggedInUser } from '../models/logged-in-user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly BASE_URL: string = environment.apiUrl;
  private userLoggedInObject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  public login (loginData: UserLogin): Observable<LoggedInUser> {
    return this.http.post<LoggedInUser>(this.BASE_URL + 'login', loginData)
      .pipe(
        tap({
          next: (loggedInUser: LoggedInUser) => {
            if(loggedInUser) {
              localStorage.setItem('accessToken', loggedInUser.accessToken);
              localStorage.setItem('refreshToken', loggedInUser.refreshToken);
            
              this.userLoggedInObject.next({
                username: loggedInUser.username,
                user_id: loggedInUser.user_id,
                role: loggedInUser.role
              });
            }
          },
          error: (err) => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            this.userLoggedInObject.next(null);
            console.log(err);
          },
          complete: () => {}
        })
      )
  };

  public logout(): Observable<void> {
    const token = localStorage.getItem('refreshToken');
    return this.http.post<void>(this.BASE_URL + 'logout', {token})
      .pipe(
        tap({
          next: () => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            this.userLoggedInObject.next(null);
          },
          error: (err) => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            this.userLoggedInObject.next(null);
            console.log(err)
          },
          complete: () => {}
        })
      )
  };

  public refreshUserAuthentication(): Observable<any> {
    return this.http.post<any>(this.BASE_URL + 'refresh',
      {token: localStorage.getItem('refreshToken')}
    ).pipe(
      tap({
          next: res => {
            if (res) {
              localStorage.setItem('accessToken', res.accessToken);
              this.userLoggedInObject.next(
                res.personData
              )
            }
          },
          error: (err) => {
            console.log(err);
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            this.userLoggedInObject.next(null);
          },
          complete: () => {
          },
        }
      )
    )
  }

  public getUserLoggedInObject(): Observable<any> {
    return this.userLoggedInObject.asObservable();
  };

  public get userObjectValue() {

    return this.userLoggedInObject.value

  };

};
