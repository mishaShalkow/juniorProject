import { TestBed } from '@angular/core/testing';

import { postResolver } from './postResolver.resolver';

describe('ProductResolver', () => {
  let resolver: postResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(postResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
