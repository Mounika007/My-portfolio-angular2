import { TestBed, async, inject } from '@angular/core/testing';

import { ExperiencesGuard } from './experiences.guard';

describe('ExperiencesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExperiencesGuard]
    });
  });

  it('should ...', inject([ExperiencesGuard], (guard: ExperiencesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
