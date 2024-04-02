import { TestBed } from '@angular/core/testing';

import { TeamRepoService } from './team-repo.service';

describe('TeamRepoService', () => {
  let service: TeamRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
