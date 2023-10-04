import { TestBed } from '@angular/core/testing';

import { SurahDetailGuard } from './surah-detail.guard';

describe('SurahDetailGuard', () => {
  let guard: SurahDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SurahDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
