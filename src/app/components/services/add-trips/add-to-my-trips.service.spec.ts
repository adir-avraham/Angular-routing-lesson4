import { TestBed } from '@angular/core/testing';

import { AddToMyTripsService } from './add-to-my-trips.service';

describe('AddToMyTripsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddToMyTripsService = TestBed.get(AddToMyTripsService);
    expect(service).toBeTruthy();
  });
});
