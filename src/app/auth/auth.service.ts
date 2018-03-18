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

  addUser(email: string, password: string, name: string) {
    this.angularFire.auth.createUserWithEmailAndPassword(email,password).then(user =>{
      user.updateProfile({
        displayName: name
    }).then(() => {
        console.log("Succesful update")
    }, (error) => {
        console.log(error);
    });      
    }).catch(err => {
      console.log(err);
    })
  }

  logout() {
    this.angularFire.auth.signOut();
  }

  updateName(newName:string) {
      this.user.updateProfile({
        displayName: newName,
        photoURL: ""
      }).then(() => {
        console.log("Succesful update name")
      }).catch((error) => {
        console.log(error);
      });
  }

  updateEmail(newEmail: string) {
    this.user.updateEmail(newEmail).then(() => {
      console.log("Succesful update email")
    }).catch((error) => {
      console.log(error);
    });
  }

  updatePassword(newPassword) {
    this.user.updatePassword(newPassword).then(function() {
      console.log("Succesful update password")
    }).catch(function(error) {
      console.log(error);
    });
    
  }

}
