import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ChangePassFormComponent } from "./change-pass-form.component";

describe("ChangePassFormComponent", () => {
  let component: ChangePassFormComponent;
  let fixture: ComponentFixture<ChangePassFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangePassFormComponent],
    });
    fixture = TestBed.createComponent(ChangePassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
