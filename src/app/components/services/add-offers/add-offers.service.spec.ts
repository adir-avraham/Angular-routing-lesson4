import { TestBed } from '@angular/core/testing';

import { AddOffersService } from './add-offers.service';

describe('AddOffersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddOffersService = TestBed.get(AddOffersService);
    expect(service).toBeTruthy();
  });
});
