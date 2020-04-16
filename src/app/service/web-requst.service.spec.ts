import { TestBed } from '@angular/core/testing';

import { WebRequstService } from './web-requst.service';

describe('WebRequstService', () => {
  let service: WebRequstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebRequstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
