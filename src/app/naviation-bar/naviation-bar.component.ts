import { Component } from '@angular/core';
import { MailserviceService } from '../mailservice.service';

@Component({
  selector: 'app-naviation-bar',
  templateUrl: './naviation-bar.component.html',
  styleUrl: './naviation-bar.component.css'
})
export class NaviationBarComponent {

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
