import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNickFormComponent } from './change-nick-form.component';

describe('ChangeNickFormComponent', () => {
  let component: ChangeNickFormComponent;
  let fixture: ComponentFixture<ChangeNickFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeNickFormComponent]
    });
    fixture = TestBed.createComponent(ChangeNickFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
