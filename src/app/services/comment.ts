import Comment from '../models/comment';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GLOBAL} from './global';

import 'rxjs/add/operator/map'

@Injectable()
export class CommentService {
  public url: string;
  public identity = true;
  public token;

  constructor(private http: HttpClient) {
    this.url = GLOBAL.url + 'comments';
  }

  getComments(id:string): Observable<any>{
    return this.http.get(`${this.url}/${id}`)
    .map(res  => {
      //Maps the response object sent from the server
        
      return res["comments"] as Comment[];
    })
  }

  createComment(comment: Comment): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.url}/${comment.post_id}`, comment);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}