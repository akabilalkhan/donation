import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }
  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
        localStorage.setItem('token','true');
        this.router.navigate(['/homepage']);
    }, err => {
        alert(err.message);
        this.router.navigate(['/loginpage']);
    })
  }
  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( () => {
      alert('Registration Successful');
      this.router.navigate(['/loginpage']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/signup']);
    })
  }
}
