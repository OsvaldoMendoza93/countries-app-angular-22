import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryMenu } from './country-menu';

describe('CountryMenu', () => {
  let component: CountryMenu;
  let fixture: ComponentFixture<CountryMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
