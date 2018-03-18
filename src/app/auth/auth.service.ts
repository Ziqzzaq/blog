import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '@firebase/auth-types';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  user: User;

  constructor(private angularFire: AngularFireAuth, private router: Router) {
    angularFire.authState.subscribe(user => {
      this.user = user;
    })
   }

  login(email: string, password: string) {
    this.angularFire.auth.signInWithEmailAndPassword(email,password).then(user => {
      console.log(user);
      this.router.navigate(["/showArticles"]);
    }).catch(err =>{
      console.log(err);
    })
  }

  signup(email: string, password: string) {
    this.angularFire.auth.createUserWithEmailAndPassword(email,password).then(user =>{
      console.log(user);
    }).catch(err => {
      console.log(err);
    })
  }

  logout() {
    this.angularFire.auth.signOut();
  }
}
