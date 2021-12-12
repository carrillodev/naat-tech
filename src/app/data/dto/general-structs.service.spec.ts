import { TestBed } from '@angular/core/testing';

import { GeneralStructsService } from './general-structs.service';

describe('GeneralStructsService', () => {
  let service: GeneralStructsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralStructsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
