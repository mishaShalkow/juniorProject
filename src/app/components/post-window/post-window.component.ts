import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostCarts } from 'src/app/models/post-carts';

@Component({
  selector: 'app-post-window',
  templateUrl: './post-window.component.html',
  styleUrls: ['./post-window.component.scss']
})
export class PostWindowComponent implements OnInit {

  post: PostCarts
  postSubcribe: Subscription

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.postSubcribe = this.route.data.subscribe((data) => {
      this.post = data['data']
    })
  }

}


