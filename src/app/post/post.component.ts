import { Component, OnInit } from '@angular/core';
import Post from '../models/post';
import {PostService} from '../services/post';
import {Router} from '@angular/router'

@Component({
  selector: 'app-post',
  template: `
  <div class="row">
  <div class="col-md-11">

    <div class="todos" *ngIf="postList">
      <table class="table">
        <thead class="h">
          <tr class="h">
            <th class="h">Title</th>
            <th class="h">Link</th>
            <th class="h">Votes</th>
          </tr>
        </thead>
        <tbody>
          
          <tr class="todo" *ngFor="let post of postList">

              <td (click)="onSelect(post)">{{post.title}}</td>
              <a href="http://{{post.link}}/" target="_blank"><td>{{post.link}}</td></a>
              <td>{{post.votes}}</td>
            <td>
              <button class="btn btn-primary" (click)="editTodo(todo)">
                  <i  class="fa fa-pencil"></i>
                </button>
              <button class="btn btn-danger" (click)="deleteTodo(todo)">
                  <i  class="fa fa-trash"></i>
                </button>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </div>
  `,
  styles: []
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { 
    
  }

  public newPost: Post = new Post();

  postList: Post[];

  	ngOnInit(): void {

    //At component initialization the 
    this.postService.getPosts()
      .subscribe(posts => {
        //assign the todolist property to the proper http response
        this.postList = posts
        console.log(posts)
      })
  }

  onSelect(post) {
    console.log("caca");
    this.router.navigate(['/posts', post.post_id]);
  }

}
