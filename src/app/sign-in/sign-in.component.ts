import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email !: FormControl;
  password !: FormControl ;
  signInForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm();
    this.createSignInFormModel();
  }
  
  saveToLocal(){
    localStorage.setItem('email', this.email.value);
    localStorage.setItem('password', this.password.value);
  }

  createSignInFormModel(){
    this.signInForm = new FormGroup({
      email : this.email,
      password : this.password
    })
  }

  createForm(){
    this.email = new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]);
  }

  // authentication(form : NgForm){

  // }

  resetForm(){
    this.signInForm.reset();
  }


}
