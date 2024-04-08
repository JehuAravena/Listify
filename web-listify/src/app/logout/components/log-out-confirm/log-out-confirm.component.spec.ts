import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LogOutConfirmComponent } from "./log-out-confirm.component";

describe("LogOutConfirmComponent", () => {
  let component: LogOutConfirmComponent;
  let fixture: ComponentFixture<LogOutConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogOutConfirmComponent],
    });
    fixture = TestBed.createComponent(LogOutConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
