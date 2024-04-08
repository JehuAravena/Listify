import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PermissionRoleHomeComponent } from './permission-role-home.component';

describe('PermissionRoleHomeComponent', () => {
  let component: PermissionRoleHomeComponent;
  let fixture: ComponentFixture<PermissionRoleHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermissionRoleHomeComponent]
    });
    fixture = TestBed.createComponent(PermissionRoleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
