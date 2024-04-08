import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoleListComponentComponent } from './role-list-component.component';

describe('RoleListComponentComponent', () => {
  let component: RoleListComponentComponent;
  let fixture: ComponentFixture<RoleListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleListComponentComponent]
    });
    fixture = TestBed.createComponent(RoleListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
