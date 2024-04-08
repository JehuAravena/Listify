import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LogoutTestComponent } from "./pages/logout-test/logout-test.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [LogoutTestComponent],
  imports: [CommonModule, MaterialModule],
})
export class LogoutModule {}
