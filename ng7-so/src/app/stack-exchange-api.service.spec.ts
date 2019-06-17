import { TestBed } from '@angular/core/testing';

import { StackExchangeApiService } from './stack-exchange-api.service';

describe('StackExchangeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StackExchangeApiService = TestBed.get(StackExchangeApiService);
    expect(service).toBeTruthy();
  });
});
