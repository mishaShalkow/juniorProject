import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Registration } from '../models/registrInterface';
import { PostCarts } from '../models/post-carts';

@Injectable({
  providedIn: 'root'
})
export class CartPostsService {

  urlPosts = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  getAllPosts () {
    return this.http.get<PostCarts[]>(this.urlPosts)
  }

  getPosts(id: number) {
    return this.http.get<PostCarts>(`${this.urlPosts}/${id}`)
  }

}
