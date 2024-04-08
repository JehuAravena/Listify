import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SettingsSideMenuComponent } from "./settings-side-menu.component";

describe("SettingsSideMenuComponent", () => {
  let component: SettingsSideMenuComponent;
  let fixture: ComponentFixture<SettingsSideMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsSideMenuComponent],
    });
    fixture = TestBed.createComponent(SettingsSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
