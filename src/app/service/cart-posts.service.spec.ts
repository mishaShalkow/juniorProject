import { TestBed } from '@angular/core/testing';

import { CartPostsService } from './cart-posts.service';

describe('CartPostsService', () => {
  let service: CartPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
