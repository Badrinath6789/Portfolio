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
    const subject = encodeURIComponent('Hello!');
    const body = encodeURIComponent('I wanted to reach out...');
    
    // Use mailto link
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    
    // Opens in the default mail client (Gmail if set)
    window.location.href = mailtoLink;
  }

    phoneNumber = '+91 9966131456';

  dialPhone(number: string): void {
    window.location.href = `tel:${number}`;
  }

}
