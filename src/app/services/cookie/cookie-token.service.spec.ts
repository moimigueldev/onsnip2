import { TestBed } from '@angular/core/testing';

import { CookieTokenService } from './cookie-token.service';

describe('CookieTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookieTokenService = TestBed.get(CookieTokenService);
    expect(service).toBeTruthy();
  });
});
