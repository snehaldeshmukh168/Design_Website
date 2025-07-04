import { Component } from '@angular/core';
import { MailserviceService } from '../mailservice.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
 formData = {
    firstName: '',
    organization: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor(private mailService: MailserviceService) { }
  onSubmit() {
    this.mailService.sendEmailMessage(this.formData).subscribe({
      next: () => {
        alert('Message sent successfully');
        this.formData = {
          firstName: '',
          organization: '',
          email: '',
          phone: '',
          message: ''
        };
      },
      error: (err) => {
        console.error('Error sending message', err);
        alert('Failed to send message.');
      },
    })
  }
}
