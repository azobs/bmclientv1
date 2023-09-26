import { TestBed } from '@angular/core/testing';

import { ApiAuthenticateService } from './api-authenticate.service';

describe('ApiAuthenticateService', () => {
  let service: ApiAuthenticateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAuthenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
