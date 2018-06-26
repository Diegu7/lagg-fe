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

  deletePost(id:string):any{
    let deleteUrl = `${this.url}/${id}`
    return this.http.delete(deleteUrl)
    .map(res =>{
      return res;
    })
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}