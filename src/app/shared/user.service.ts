import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs : AngularFirestore) { }

  addUser(user : User){
    return this.afs.collection('/Users').add(user);
  }
}
