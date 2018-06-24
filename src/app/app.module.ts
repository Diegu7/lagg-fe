import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {UserService} from './services/user';
import {CommentService} from './services/comment';
import {PostService} from './services/post';

import { AppComponent } from './app.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
	NgbModule.forRoot()
  ],
  providers: [
  	UserService,
  	CommentService,
  	PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
