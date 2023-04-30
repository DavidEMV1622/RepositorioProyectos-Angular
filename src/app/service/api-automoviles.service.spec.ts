import { TestBed } from '@angular/core/testing';

import { ApiAutomovilesService } from './api-automoviles.service';

describe('ApiAutomovilesService', () => {
  let service: ApiAutomovilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAutomovilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
