import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { MenuComponent } from "./shared/components/menu/menu.component";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material/material.module";
import { FormsModule } from "@angular/forms";
import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule,
} from "@abacritt/angularx-social-login";
import { SettingsModule } from "./settings/settings.module";
import { TaskService } from "./task/service/task.service";

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
    SocialLoginModule,
    SettingsModule,
  ],
  providers: [
    TaskService,
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "750011342674-36fcfna83dk1m1keu5nrq83t8kdsp7ok.apps.googleusercontent.com"
            ),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
