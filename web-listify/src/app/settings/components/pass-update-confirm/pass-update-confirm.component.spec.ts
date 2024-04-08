import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PassUpdateConfirmComponent } from "./pass-update-confirm.component";

describe("PassUpdateConfirmComponent", () => {
  let component: PassUpdateConfirmComponent;
  let fixture: ComponentFixture<PassUpdateConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassUpdateConfirmComponent],
    });
    fixture = TestBed.createComponent(PassUpdateConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
