import { TestBed, async, inject } from '@angular/core/testing';

import { DetailsGuard } from './details-guard.guard';

describe('DetailsGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailsGuard]
    });
  });

  it('should ...', inject([DetailsGuard], (guard: DetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
