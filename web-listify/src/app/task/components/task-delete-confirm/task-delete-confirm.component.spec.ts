import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TaskDeleteConfirmComponent } from "./task-delete-confirm.component";

describe("TaskDeleteConfirmComponent", () => {
  let component: TaskDeleteConfirmComponent;
  let fixture: ComponentFixture<TaskDeleteConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDeleteConfirmComponent],
    });
    fixture = TestBed.createComponent(TaskDeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
