import { AuthService } from './../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  items: Observable<any[]>;
  user: any;
  nameTyping: string;
  msgVal = '';
  basePath = '/messages';
  typing = false;
  input$;
  audio;

  constructor(
    public db: AngularFireDatabase,
    private angularFire: AngularFireAuth,
    public authService: AuthService
  ) {
    this.audio = new Audio();
    this.audio.src = '../../../assets/sound/message.mp3';
    this.audio.load();

    this.angularFire.authState.subscribe(auth => {
      if (auth) {
        this.user = auth;
        this.authService.isTyping().subscribe( value => {
          console.log(this.user.displayName);
          if (this.user.displayName == value[0]) {
            this.typing = false;
          } else {
         console.log(value[0]);
          this.nameTyping = value[0];
         console.log(this.typing = value[1].toString() == 'true');
          this.typing = value[1].toString() == 'true';
          }
        });
      }
    });
    this.items = db
      .list(this.basePath)
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const message = a.payload.val();
          message.date = new Date(message.date);
          this.soundMessage();
          return message;
        });
      });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    const input = document.getElementById('message');
    this.input$ = Observable.fromEvent(input, 'input')
    .do(() => this.showTyping())
    .debounceTime(500)
    .subscribe(() => this.showIdle());
  }

  chatSend(theirMessage: string) {
    this.db.list(this.basePath).push({
      message: theirMessage,
      name: this.user.displayName,
      date: new Date().toString()
    });
    this.msgVal = '';
  }

  soundMessage() {
    this.audio.play();
  }

  showTyping = () => this.authService.setTyping(true);

  showIdle = () =>  this.authService.setTyping(false);

  clearMessages() {
    this.db.list(this.basePath).remove();
  }
}
