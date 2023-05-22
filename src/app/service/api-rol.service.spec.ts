import { TestBed } from '@angular/core/testing';

import { ApiRolService } from './api-rol.service';

describe('ApiRolService', () => {
  let service: ApiRolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
