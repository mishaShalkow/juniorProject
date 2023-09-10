import {Injectable} from '@angular/core'
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router'
import {catchError, EMPTY, Observable, of} from 'rxjs'
import { PostCarts } from '../models/post-carts'
import { CartPostsService } from './cart-posts.service'

@Injectable({
  providedIn: 'root',
})
export class postResolver implements Resolve<PostCarts> {
  constructor(
    private router: Router,
    private postService: CartPostsService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PostCarts> {
    return this.postService.getPosts(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['main'])
        return EMPTY
      })
    )
  }
}
