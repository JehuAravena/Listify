import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ChangeEmailFormComponent } from "./change-email-form.component";

describe("ChangeEmailFormComponent", () => {
  let component: ChangeEmailFormComponent;
  let fixture: ComponentFixture<ChangeEmailFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeEmailFormComponent],
    });
    fixture = TestBed.createComponent(ChangeEmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
