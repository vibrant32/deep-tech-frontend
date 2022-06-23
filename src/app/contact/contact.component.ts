import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../contactdata';
import { ContactusService } from '../contactus.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  user!: Contact;
  submitted = false;

  constructor(private router: Router, private contactUs: ContactusService) { 
    this.user = {
      fullname: '',
      email: '',
      phone: '',
      message: ''
    }
  }

  async onSubmit(contactForm: NgForm) {    
    this.submitted = true; 
    await this.contactUs.saveContact(this.user).subscribe((response: any) => {
      console.log(response);
    });
    setTimeout(() => {
      alert("Heyy " + this.user.fullname + " thanks for your valuable message!");
      contactForm.resetForm();
      this.router.navigate(['/']);
    }, 2500);
  }

  ngOnInit(): void {
    
  }

}
