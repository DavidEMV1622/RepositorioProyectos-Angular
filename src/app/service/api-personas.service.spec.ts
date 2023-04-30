import { TestBed } from '@angular/core/testing';

import { ApiPersonasService } from './api-personas.service';

describe('ApiPersonasService', () => {
  let service: ApiPersonasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPersonasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
