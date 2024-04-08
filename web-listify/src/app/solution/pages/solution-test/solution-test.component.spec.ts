import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionTestComponent } from './solution-test.component';

describe('SolutionTestComponent', () => {
  let component: SolutionTestComponent;
  let fixture: ComponentFixture<SolutionTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionTestComponent]
    });
    fixture = TestBed.createComponent(SolutionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
