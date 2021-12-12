import { TestBed } from '@angular/core/testing';

import { ProjectListServiceService } from './project-list-service.service';

describe('ProjectListServiceService', () => {
  let service: ProjectListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
