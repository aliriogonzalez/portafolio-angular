import { TestBed } from '@angular/core/testing';

import { InfopageService } from './infopage.service';

describe('InfopageService', () => {
  let service: InfopageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfopageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
