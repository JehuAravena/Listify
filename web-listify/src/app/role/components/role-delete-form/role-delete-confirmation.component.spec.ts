import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoleDeleteConfirmationComponent } from './role-delete-confirmation.component';

describe('RoleDeleteFormComponent', () => {
  let component: RoleDeleteConfirmationComponent;
  let fixture: ComponentFixture<RoleDeleteConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleDeleteConfirmationComponent]
    });
    fixture = TestBed.createComponent(RoleDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
