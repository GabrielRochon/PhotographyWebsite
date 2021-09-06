import { TestBed } from '@angular/core/testing';

import { MediaQueriesService } from './media-queries.service';

describe('MediaQueriesService', () => {
  let service: MediaQueriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaQueriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
