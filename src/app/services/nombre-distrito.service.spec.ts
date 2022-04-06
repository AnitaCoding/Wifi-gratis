import { TestBed } from '@angular/core/testing';

import { NombreDistritoService } from './nombre-distrito.service';

describe('NombreDistritoService', () => {
  let service: NombreDistritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NombreDistritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
