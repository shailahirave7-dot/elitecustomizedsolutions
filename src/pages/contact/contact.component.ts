// contact.component.ts
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NotificationService } from '../../app/shared/services/notification.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCard, ReactiveFormsModule, MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private notification: NotificationService) {

    this.contactForm = this.fb.group({

      name: ['', Validators.required],

      phone: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      message: ['', Validators.required]

    });

  }


  onPhoneInput(event: any) {

    const input = event.target.value.replace(/[^0-9]/g, '');
    this.contactForm.get('phone')?.setValue(input, { emitEvent: false });

  }


  onSubmit(): void {

    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();
      this.notification.showError('Please fill all required fields correctly.');
      return;
    }

    console.log(this.contactForm.value);
    this.notification.showSuccess('Message sent successfully!');

    this.contactForm.reset();
    this.contactForm.markAsPristine();
    this.contactForm.markAsUntouched();
  }
}
