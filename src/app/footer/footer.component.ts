import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/showArticles']);
  }

}
