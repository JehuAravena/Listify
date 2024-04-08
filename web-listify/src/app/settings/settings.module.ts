import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsSideMenuComponent } from "./components/settings-side-menu/settings-side-menu.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { SettingsRoutingModule } from "./settings-routing.module";
import { ChangeEmailFormComponent } from "./components/change-email-form/change-email-form.component";
import { ChangePassFormComponent } from "./components/change-pass-form/change-pass-form.component";
import { MaterialModule } from "../material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { UserService } from "../user/service/user.service";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared/shared.module";
import { ChangeNickFormComponent } from "./components/change-nick-form/change-nick-form.component";
import { NickUpdateConfirmComponent } from "./components/nick-update-confirm/nick-update-confirm.component";
import { PassUpdateConfirmComponent } from "./components/pass-update-confirm/pass-update-confirm.component";
import { UserDeleteConfirmComponent } from "./components/user-delete-confirm/user-delete-confirm.component";
import { SharedServicesService } from "../shared/services/shared-services.service";

@NgModule({
  declarations: [
    SettingsComponent,
    SettingsSideMenuComponent,
    ChangeEmailFormComponent,
    ChangePassFormComponent,
    ChangeNickFormComponent,
    NickUpdateConfirmComponent,
    PassUpdateConfirmComponent,
    UserDeleteConfirmComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [UserService, SharedServicesService],
})
export class SettingsModule {}
