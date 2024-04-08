import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PermissionRoleListComponent } from './permission-role-list.component';

describe('PermissionRoleListComponent', () => {
  let component: PermissionRoleListComponent;
  let fixture: ComponentFixture<PermissionRoleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermissionRoleListComponent]
    });
    fixture = TestBed.createComponent(PermissionRoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
