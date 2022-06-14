import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  BASE_URL: string = environment.apiUrl + 'comment';


  constructor(private http: HttpClient) { }

  public saveComment(comment: any): Observable<any> {
    return this.http.post<any>(this.BASE_URL, comment)
  }

}
