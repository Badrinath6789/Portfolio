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
}
