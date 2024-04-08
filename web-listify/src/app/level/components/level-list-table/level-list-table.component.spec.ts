import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelListTableComponent } from './level-list-table.component';

describe('LevelListTableComponent', () => {
  let component: LevelListTableComponent;
  let fixture: ComponentFixture<LevelListTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LevelListTableComponent]
    });
    fixture = TestBed.createComponent(LevelListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
