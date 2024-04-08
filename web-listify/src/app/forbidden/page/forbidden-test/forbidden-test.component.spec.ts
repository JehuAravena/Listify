import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddenTestComponent } from './forbidden-test.component';

describe('ForbiddenTestComponent', () => {
  let component: ForbiddenTestComponent;
  let fixture: ComponentFixture<ForbiddenTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForbiddenTestComponent]
    });
    fixture = TestBed.createComponent(ForbiddenTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
