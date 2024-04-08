import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SharedServicesService {
  constructor() {}

  isAdmin() {
    try {
      const userInfo = JSON.parse(localStorage.getItem("user") as string)[0];
      console.log(userInfo);
      console.log("AAAAAAA");

      if (userInfo.US_ID_ROLE !== 1) {
        console.log("no es admin");
        return false;
      } else {
        console.log("es admin");
        return true;
      }
    } catch (error) {
      console.log("no hay usuario");
      return false;
    }
  }
}
