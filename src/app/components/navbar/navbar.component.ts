import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user;
  photoURL = '../assets/default-user.png';
  photos;

  constructor(private angularFire: AngularFireAuth, private profileService: ProfileService) {
    angularFire.authState.subscribe(user => {
      this.user = user;
      this.photoURL = user.photoURL;
      this.photos = this.profileService.getPhoto();
    });
  }

  ngOnInit() {
  }
}
