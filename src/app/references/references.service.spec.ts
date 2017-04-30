import { TestBed, inject } from '@angular/core/testing';

import { ReferencesService } from './references.service';

describe('ReferencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferencesService]
    });
  });

  it('should ...', inject([ReferencesService], (service: ReferencesService) => {
    expect(service).toBeTruthy();
  }));
});
