import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelHomeComponent } from './level-home.component';

describe('LevelHomeComponent', () => {
  let component: LevelHomeComponent;
  let fixture: ComponentFixture<LevelHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LevelHomeComponent]
    });
    fixture = TestBed.createComponent(LevelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
