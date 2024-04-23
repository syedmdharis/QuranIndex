import { TestBed } from '@angular/core/testing';

import { Juz.ServiceService } from './juz.service.service';

describe('Juz.ServiceService', () => {
  let service: Juz.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Juz.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
