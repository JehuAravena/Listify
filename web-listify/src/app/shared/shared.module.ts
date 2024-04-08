import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialModule } from "../material/material.module";
import { DisplayDialogs } from "./display-dialogs/display-dialogs";
import { FieldValidators } from "./validators/fieldValidators";
import { MobileFooterComponent } from "./components/mobile-footer/mobile-footer.component";
import { AdminSideMenuComponent } from "./components/admin-side-menu/admin-side-menu.component";
import { SnackbarService } from "./snackbars/snackbar.service";
import { LogOutConfirmComponent } from "../logout/components/log-out-confirm/log-out-confirm.component";

@NgModule({
  declarations: [
    MobileFooterComponent,
    AdminSideMenuComponent,
    LogOutConfirmComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [MobileFooterComponent, AdminSideMenuComponent],
  providers: [DisplayDialogs, FieldValidators, SnackbarService],
})
export class SharedModule {}
