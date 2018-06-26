import { Component, OnInit } from '@angular/core';
import Post from '../models/post';
import {PostService} from '../services/post';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-post-detail',
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
                <div *ngIf="post.post_id == currentPost; then thenBlock;"></div>
                <ng-template #thenBlock>
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
                </ng-template>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PostDetailComponent implements OnInit {

  constructor(private postService: PostService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    //At component initialization the 
    this.postService.getPosts()
      .subscribe(posts => {
        //assign the todolist property to the proper http response
        this.postList = posts
        console.log(posts)
      })

      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.currentPost = id;
  }

  postList: Post[];
  public currentPost;

}
