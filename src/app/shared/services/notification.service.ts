import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) {}

showSuccess(message: string): void {
  this.snackBar.open(message, '✕', {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: ['success-snackbar'],
  });
}

showError(message: string): void {
  this.snackBar.open(message, '✕', {
    duration: 4000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: ['error-snackbar'],
  });
}

showWarning(message: string): void {
  this.snackBar.open(message, '✕', {
    duration: 3500,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: ['warning-snackbar'],
  });
}
}