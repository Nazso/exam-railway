import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment-model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  BASE_URL: string = environment.apiUrl + 'comment';


  constructor(private http: HttpClient) { }

  public saveComment(comment: Comment): Observable<any> {
    return this.http.post<any>(this.BASE_URL, comment)
  }

  public getComment(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }

  public deleteOneComment(_id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${_id}`)
  }

}
