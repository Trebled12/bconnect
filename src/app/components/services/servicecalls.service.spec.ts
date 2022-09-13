import { TestBed } from '@angular/core/testing';

import { ServicecallsService } from './servicecalls.service';

describe('ServicecallsService', () => {
  let service: ServicecallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicecallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
