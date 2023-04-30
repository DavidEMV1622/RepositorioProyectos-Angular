import { TestBed } from '@angular/core/testing';

import { ApiConcesionariosService } from './api-concesionarios.service';

describe('ApiConcesionariosService', () => {
  let service: ApiConcesionariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiConcesionariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
