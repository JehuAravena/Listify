import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoleCreateFormComponent } from './role-create-form.component';

describe('RoleCreateFormComponent', () => {
  let component: RoleCreateFormComponent;
  let fixture: ComponentFixture<RoleCreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleCreateFormComponent]
    });
    fixture = TestBed.createComponent(RoleCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
