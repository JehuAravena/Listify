import { Component } from '@angular/core';
import { DisplayDialogs } from 'src/app/shared/display-dialogs/display-dialogs';

@Component({
  selector: 'app-admin-side-menu',
  templateUrl: './admin-side-menu.component.html',
  styleUrls: ['./admin-side-menu.component.css']
})
export class AdminSideMenuComponent {
  constructor (public displayDialogs: DisplayDialogs){}

}
