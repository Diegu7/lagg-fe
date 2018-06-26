import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <img width="40" height="40" src="assets/images/lagglogowhite.png">
  
  <span class="navbar-brand mb-0 h1">Welcome to {{title}}</span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" routerLink="/posts" routerLinkActive="">All posts<span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <span class="navbar-text">
      {{currentUser}}
    </span>
  </div>
</nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = "Lagg";
  currentUser = "Usuario";

}
