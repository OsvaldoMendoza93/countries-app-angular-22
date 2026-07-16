import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalCountries } from './capital-countries';

describe('CapitalCountries', () => {
  let component: CapitalCountries;
  let fixture: ComponentFixture<CapitalCountries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapitalCountries],
    }).compileComponents();

    fixture = TestBed.createComponent(CapitalCountries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
