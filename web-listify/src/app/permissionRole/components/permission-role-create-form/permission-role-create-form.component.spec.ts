import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionRoleCreateFormComponent } from './permission-role-create-form.component';

describe('PermissionRoleCreateFormComponent', () => {
  let component: PermissionRoleCreateFormComponent;
  let fixture: ComponentFixture<PermissionRoleCreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermissionRoleCreateFormComponent]
    });
    fixture = TestBed.createComponent(PermissionRoleCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
