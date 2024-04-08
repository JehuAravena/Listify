import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pr-delete-confirmation',
  templateUrl: './pr-delete-confirmation.component.html',
  styleUrls: ['./pr-delete-confirmation.component.css']
})
export class PrDeleteConfirmationComponent {
  constructor(
    private dialogRef: MatDialogRef<PrDeleteConfirmationComponent>
  ) {}

}
