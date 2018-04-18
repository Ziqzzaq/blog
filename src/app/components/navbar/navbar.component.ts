import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {ProfileService} from '../../services/profile.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user;
  photoURL = '../assets/default-user.png';
  photos: Observable<any[]>;

  constructor(private angularFire: AngularFireAuth, private profileService: ProfileService) {
    angularFire.authState.subscribe(user => {
      this.user = user;
      if (this.user !== null) {
        this.profileService.getPhoto()
          .subscribe(photo => {
            if (photo.length === 0 || photo.length === 1) {
              photo.push(this.photoURL);
              this.photos = Observable.of([photo[0]]);
            } else {
              this.photos = Observable.of([photo[1]]);
            }
          });
      }
    });
  }

  ngOnInit() {
  }
}
