import { TestBed } from '@angular/core/testing';

import { PermissionRoleService } from './permission-role.service';

describe('ServiceService', () => {
  let service: PermissionRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermissionRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
