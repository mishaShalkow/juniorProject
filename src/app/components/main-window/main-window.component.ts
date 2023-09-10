import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostCarts } from 'src/app/models/post-carts';
import { CartPostsService } from 'src/app/service/cart-posts.service';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {
  
  constructor(private router: Router, private postService: CartPostsService) {}

  term = ''
  postsList: PostCarts[];
  postSubscribe: Subscription;
  post: PostCarts

  ngOnInit(): void {
    
    this.postSubscribe = this.postService
    .getAllPosts()
    .subscribe((data) => {
      this.postsList = data
    })
    
  }

}
