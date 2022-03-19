import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private roter: Router
  ) { }

  posts: any;

  ngOnInit(): void {
    !sessionStorage.getItem("id") ? this.roter.navigate(["/"]) : this.getAllPosts();
  }

  getAllPosts() {
    this.apiService.getAllPosts({id: sessionStorage.getItem("id")})
      .subscribe(
        (data: any) => {
          this.posts = data.result;
        },
        error => {
          alert(error.message);
        }
      );
  }

}
