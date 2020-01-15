import { TestBed } from '@angular/core/testing';

import { CustomerDataServiceService } from './customer-data-service.service';

describe('CustomerDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerDataServiceService = TestBed.get(CustomerDataServiceService);
    expect(service).toBeTruthy();
  });
});
