import {Response} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import User from './models/user';
import Comment from './models/comment';
import Post from './models/post';
import {UserService} from './services/user';
import {CommentService} from './services/comment';
import {PostService} from './services/post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'app';

	constructor(
		private userService: UserService,
		private postService: PostService,
		private commentService: CommentService
	){};

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

	create() {
    this.postService.createPost(this.newPost)
      .subscribe((res) => {
        this.postList.push(res.posts)
        this.newPost = new Post()
        console.log(res)
      })
	}
}
