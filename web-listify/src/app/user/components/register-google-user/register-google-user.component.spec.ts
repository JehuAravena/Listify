import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGoogleUserComponent } from './register-google-user.component';

describe('RegisterGoogleUserComponent', () => {
  let component: RegisterGoogleUserComponent;
  let fixture: ComponentFixture<RegisterGoogleUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterGoogleUserComponent]
    });
    fixture = TestBed.createComponent(RegisterGoogleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
