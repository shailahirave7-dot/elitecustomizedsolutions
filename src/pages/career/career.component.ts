import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NotificationService } from '../../app/shared/services/notification.service';
import { PageBannerComponent } from '../page-banner/page-banner.component';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, MatButtonModule, PageBannerComponent],
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})

export class CareerComponent {
  constructor(private notification: NotificationService) { }
  selectedFile: File | null = null;
  @Input() title: string = '';
  @Input() showBanner: boolean = true;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (!file) {
      return;
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!allowedTypes.includes(file.type)) {

      this.notification.showError('Only PDF, DOC, and DOCX files are allowed.');
      this.selectedFile = null;
      event.target.value = '';

      return;
    }

    this.selectedFile = file;
  }

  submitApplication() {
    if (!this.selectedFile) {
      this.notification.showError('Please upload your resume.');
      // alert("Please upload your resume.");
      return;
    }

    this.notification.showSuccess('Resume submitted successfully!');

    // alert("Resume submitted successfully!");

    this.selectedFile = null;

  }

}