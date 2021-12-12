import { TestBed } from '@angular/core/testing';

import { WorkteamApiService } from './workteam-api.service';

describe('WorkteamApiService', () => {
  let service: WorkteamApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkteamApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
