import { Component } from '@angular/core';
import { DisplayDialogs } from '../../display-dialogs/display-dialogs';

@Component({
  selector: 'app-mobile-footer',
  templateUrl: './mobile-footer.component.html',
  styleUrls: ['./mobile-footer.component.css']
})
export class MobileFooterComponent {
  constructor(public displayDialogs: DisplayDialogs) {}
}
