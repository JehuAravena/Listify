import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserHomeComponent } from './register-user-home.component';

describe('RegisterUserHomeComponent', () => {
  let component: RegisterUserHomeComponent;
  let fixture: ComponentFixture<RegisterUserHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterUserHomeComponent]
    });
    fixture = TestBed.createComponent(RegisterUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
