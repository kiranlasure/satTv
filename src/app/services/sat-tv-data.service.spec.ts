import { TestBed } from '@angular/core/testing';

import { SatTvDataService } from './sat-tv-data.service';

describe('SatTvDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SatTvDataService = TestBed.get(SatTvDataService);
    expect(service).toBeTruthy();
  });
});
