import Post from '../models/post';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, interval, pipe} from 'rxjs';
import {GLOBAL} from './global';

import 'rxjs/add/operator/map';


@Injectable()
export class PostService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = GLOBAL.url + 'posts';
  }
  /*

  signIn(user_to_login, gethash = null) {
    if (gethash != null) {
      user_to_login.gethash = gethash;
    }
    let json = JSON.stringify(user_to_login);
    let params = json;

    let headers = new Headers({'content-type': 'application/json'});

    return this._http.post(this.url + 'login', params, {headers: headers})
      .map(res => res.json());
  }

  getUsers() {

    const headers = new Headers({'content-type': 'application/json'});

    return this._http.get(this.url + 'users')
      .map(res => res.json());
  }*/

  createPost(post: Post): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.url}`, post);
  }

  //Read todo, takes no arguments
  getPosts(): Observable<Post[]>{
    return this.http.get(this.url)
    .map(res  => {
      //Maps the response object sent from the server
        
      return res["posts"] as Post[];
    })
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}