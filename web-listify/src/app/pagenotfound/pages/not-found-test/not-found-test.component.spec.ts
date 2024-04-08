import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundTestComponent } from './not-found-test.component';

describe('NotFoundTestComponent', () => {
  let component: NotFoundTestComponent;
  let fixture: ComponentFixture<NotFoundTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundTestComponent]
    });
    fixture = TestBed.createComponent(NotFoundTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
