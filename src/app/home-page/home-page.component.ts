import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    downloadResume() {
    const link = document.createElement('a');
    link.href = '/Portfolio/assets/images/Badrinath_Resume.pdf';
    link.download = 'Badrinath_Resume.pdf';
    link.click();
  }

   openGmail(email: string): void {
    const subject = encodeURIComponent('Add your Subject');
    const body = encodeURIComponent('Type your message');
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }
  phoneNumber = '+91 9966131456';

  dialPhone(number: string): void {
    window.location.href = `tel:${number}`;
  }

}
