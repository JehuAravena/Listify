import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register-user-home",
  templateUrl: "./register-user-home.component.html",
  styleUrls: ["./register-user-home.component.css"],
})
export class RegisterUserHomeComponent implements OnInit {
  gUser?: any;

  ngOnInit() {
    this.gUser = this.readLocalStorageValue("gUser");
  }

  readLocalStorageValue(gUser: any): any {
    return localStorage.getItem(gUser);
  }
}
