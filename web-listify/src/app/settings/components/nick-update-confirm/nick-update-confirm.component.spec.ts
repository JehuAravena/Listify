import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NickUpdateConfirmComponent } from "./nick-update-confirm.component";

describe("NickUpdateConfirmComponent", () => {
  let component: NickUpdateConfirmComponent;
  let fixture: ComponentFixture<NickUpdateConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NickUpdateConfirmComponent],
    });
    fixture = TestBed.createComponent(NickUpdateConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
