import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsInsurenceComponent } from './cars-insurence.component';

describe('CarsInsurenceComponent', () => {
  let component: CarsInsurenceComponent;
  let fixture: ComponentFixture<CarsInsurenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsInsurenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsInsurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
