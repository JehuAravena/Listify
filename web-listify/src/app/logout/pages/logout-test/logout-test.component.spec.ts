import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutTestComponent } from './logout-test.component';

describe('LogoutTestComponent', () => {
  let component: LogoutTestComponent;
  let fixture: ComponentFixture<LogoutTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutTestComponent]
    });
    fixture = TestBed.createComponent(LogoutTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
