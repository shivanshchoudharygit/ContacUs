import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h2>Contact Us</h2>
    <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
      <label>
        Name:
        <input type="text" formControlName="name" />
      </label>
      <div *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
        Name is required.
      </div>
      

      <label>
        Email:
        <input type="email" formControlName="email" />
      </label>
      <div *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
        Enter a valid email.
      </div>

      <label>
        Message:
        <textarea formControlName="message"></textarea>
      </label>
      <div *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched">
        Message is required.
      </div>

      <button type="submit" [disabled]="contactForm.invalid">Submit</button>
    </form>
  `,
})
export class ContactComponent {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      alert('Message sent!');
      this.contactForm.reset();
    }
  }
}
