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
            <th class="h">Comments</th>
            <th class="h">Votes</th>
          </tr>
        </thead>
        <tbody>
          
          <tr class="todo" *ngFor="let post of postList">

            <td><a href="{{post.link}}" target="_blank">{{post.title}} <font size="1">({{post.link}})</font></a></td>
            <td (click)="onSelect(post)">Comments</td>
            <td>{{post.votes}}</td>
            <td>
              <button class="btn btn-danger" (click)="delete(post)">
                  <i  class="fa fa-trash"></i>
                </button>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </div>
    <form>
      <div class="form-row">

        <div class="col-md-5">
          <input type="text" name="title" id="title" [(ngModel)]="newPost.title" placeholder="Title" class="form-control">
        </div>
        <div class="col-md-5">
          <input name="link" id="link" [(ngModel)]="newPost.link" placeholder="Link" class="form-control">
        </div>
        <div class="col-md-2">
          <button type="submit" class="btn btn-primary" (click)="create()">Add</button>
        </div>
      </div>
    </form>
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
      })
  }

  onSelect(post) {
    this.router.navigate(['/posts', post.post_id]);
  }

  create() {
    this.postService.createPost(this.newPost)
      .subscribe((res) => {
        this.postList.push(res.posts)
        this.newPost = new Post()
        console.log(res)
      })
  }

  delete(post: Post) {
    console.log(post);
    this.postService.deletePost(post.post_id.toString()).subscribe(res =>{
      this.postList.splice(this.postList.indexOf(post), 1);
    })
  }

}
