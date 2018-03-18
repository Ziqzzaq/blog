import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  login(email: string, password: string) {
    console.log(email,password)
  }

  signup(email: string, password: string) {

  }

  logout() {

  }
}
