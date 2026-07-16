import { TestBed } from '@angular/core/testing';

import { Mapper } from './mapper';

describe('Mapper', () => {
  let service: Mapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mapper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
