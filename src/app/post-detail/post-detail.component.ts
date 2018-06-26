import { Component, OnInit } from '@angular/core';
import Post from '../models/post';
import Comment from '../models/comment';
import {PostService} from '../services/post';
import {CommentService} from '../services/comment';
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
                </ng-template>
              </tr>
              
            </tbody>
          </table>
          
        </div>
        <h3>Comments!</h3>
        <hr>
        <div *ngIf="commentList">
          <div *ngFor="let comment of commentList; index as i">
            <p>{{i + 1}} - {{comment.body}}</p>
            <hr>
          </div>
        </div>

        <form>
          <div class="form-row">

            <div class="col-md-5">
              <input type="text" name="body" id="body" [(ngModel)]="newComment.body" placeholder="Comment" class="form-control">
            </div>
            <div class="col-md-2">
              <button type="submit" class="btn btn-primary" (click)="createComment()">Add</button>
            </div>
          </div>
        </form>

      </div>
    </div>
  `,
  styles: []
})
export class PostDetailComponent implements OnInit {

  constructor(private postService: PostService, private commentService: CommentService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    //At component initialization the 
    this.postService.getPosts()
      .subscribe(posts => {
        //assign the todolist property to the proper http response
        this.postList = posts
      })

      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.currentPost = id;
    this.commentService.getComments(id.toString())
      .subscribe(comments =>{
        this.commentList = comments
      })
  }

  createComment(){
    this.newComment.post_id = this.currentPost;
    this.commentService.createComment(this.newComment)
    .subscribe((res) => {
      this.commentList.push(res.comments)
      this.newComment = new Comment()
      console.log(res)
    })
  }

  postList: Post[];
  commentList: Comment[];
  public currentPost;

  public newComment: Comment = new Comment();

}
