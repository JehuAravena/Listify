import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root'
})
export class SnackbarService {

	constructor(private _snackBar: MatSnackBar) { }

	public failureSnackbar(errMessage: string): void {
		this._snackBar.open(errMessage, 'Close', {
			duration: 5000,
			horizontalPosition: 'center',
			verticalPosition: 'bottom',
			panelClass: ['failure-snackbar']
		})
	}
	public successSnackbar(message: string): void {
		this._snackBar.open(message, 'Close', {
			duration: 5000,
			horizontalPosition: 'center',
			verticalPosition: 'bottom',
			panelClass: ['success-snackbar']
		});
	}
}
