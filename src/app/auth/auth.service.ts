import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(private angularFire: AngularFireAuth) { }

  login(email: string, password: string) {
    console.log(email,password)
  }

  signup(email: string, password: string) {
    this.angularFire.auth.createUserWithEmailAndPassword(email,password).then(value =>{
      console.log(value);
    }).catch(err => {
      console.log(err);
    })
  }

  logout() {
    this.angularFire.auth.signOut();
  }
}
