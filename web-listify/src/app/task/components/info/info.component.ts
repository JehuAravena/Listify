import { Component, OnInit } from "@angular/core";
import { idUserLogin } from "src/app/shared/values/shared-values";
import { UserService } from "src/app/user/service/user.service";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"],
})
export class InfoComponent implements OnInit {
  userInfo: any = {};

  constructor(private userService: UserService) {}

  calculateExperience(info: any): string {
    const usExperience = info.US_EXPERIENCE;
    if (usExperience <= 0) {
      return "0 / 64";
    } else if (usExperience <= 64) {
      return `${usExperience} / 64`;
    } else if (usExperience <= 128) {
      return `${usExperience} / 128`;
    } else if (usExperience <= 192) {
      return `${usExperience} / 192`;
    } else if (usExperience <= 256) {
      return `${usExperience} / 256`;
    } else if (usExperience <= 320) {
      return `${usExperience} / 320`;
    } else {
      return "320 / 320";
    }
  }

  calculateCompletionPercentage(info: any): string {
    const usExperience = info.US_EXPERIENCE;
    let maxExperience = 320;

    if (usExperience <= 0) {
      maxExperience = 64;
    } else if (usExperience <= 64) {
      maxExperience = 64;
    } else if (usExperience <= 128) {
      maxExperience = 128;
    } else if (usExperience <= 192) {
      maxExperience = 192;
    } else if (usExperience <= 256) {
      maxExperience = 256;
    } else if (usExperience <= 320) {
      maxExperience = 320;
    } else {
      maxExperience = 320;
    }

    const percentage = (usExperience / maxExperience) * 100;
    return `${percentage}%`;
  }

  replaceNickname(info: any): string {
    const usLevelName = info.US_LEVEL_NAME;
    const usNickname = info.US_NICKNAME;

    const replacedName = usLevelName.replace(/nickname/gi, usNickname);

    return replacedName;
  }

  ngOnInit() {
    this.userService
      .getSpecificUser(String(idUserLogin))
      .subscribe((data: any) => {
        this.userInfo = data;
        console.log("USUARIO", this.userInfo);
        localStorage.setItem("user", JSON.stringify(this.userInfo));
      });
  }
}
