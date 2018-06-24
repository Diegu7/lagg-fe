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

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
