import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(
    private fb: FormBuilder,
  ) { }


  form: FormGroup = this.fb.group({
    message: '',
    to_name: 'Badrinath',
    from_name: '',
    from_email: '',
    subject: '',
  });
  
  async send() {
  if (this.form.invalid) {
    alert('Please fill out all fields before submitting.');
    return; 
  }

  try {
    emailjs.init('i2wKjmrO_5bnJO7iA');

    const response = await emailjs.send('service_onee22o', 'template_xv97m3l', {
      message: this.form.value.message,
      to_name: this.form.value.to_name,
      from_name: this.form.value.from_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject
    });

    alert('Message sent successfully!');
    this.form.reset(); 

  } catch (error) {
    alert('Error sending message: ' + error);
  }
}

}
