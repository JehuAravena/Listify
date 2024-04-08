import { Component, OnInit } from '@angular/core';
import { SharedServicesService } from '../../services/shared-services.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  isLogged: boolean = false;
  isAdmin: boolean = false;

  constructor(private sharedService: SharedServicesService) { }

  ngOnInit(): void {
    this.checkLogged();
    this.isAdmin = this.sharedService.isAdmin();
  }

  checkLogged() {
    if (localStorage.getItem('user')) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
}
