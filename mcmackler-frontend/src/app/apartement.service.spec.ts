import { TestBed, inject } from '@angular/core/testing';

import { ApartementService } from './apartement.service';

describe('ApartementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApartementService]
    });
  });

  it('should be created', inject([ApartementService], (service: ApartementService) => {
    expect(service).toBeTruthy();
  }));
});
