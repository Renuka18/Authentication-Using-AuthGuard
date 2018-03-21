import { TestBed, inject } from '@angular/core/testing';

import { FakebackendService } from './fakebackend.service';

describe('FakebackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakebackendService]
    });
  });

  it('should be created', inject([FakebackendService], (service: FakebackendService) => {
    expect(service).toBeTruthy();
  }));
});
