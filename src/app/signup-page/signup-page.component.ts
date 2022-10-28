
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators}from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { AuthService } from 'src/app/shared/auth.service';



@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  email! : string;
  password!: string;

  public signupForm !: FormGroup;
  constructor(private auth : AuthService) { }


  
  ngOnInit(): void {
  }

  register() {

    console.log(this.email)
    console.log(this.password)


    if(this.email == '') {
      alert('please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.register(this.email,this.password);
    
    this.email = '';
    this.password = '';

  }
}
