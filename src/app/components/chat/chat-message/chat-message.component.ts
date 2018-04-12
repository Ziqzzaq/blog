import { AuthService } from './../../../auth/auth.service';
import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  items: Observable<any[]>;
  name: any;
  msgVal = '';
  basePath = '/messages';
  typing = false;
  input$;

  constructor(
    public db: AngularFireDatabase,
    private angularFire: AngularFireAuth,
    private authService: AuthService
  ) {
    this.items = db
      .list(this.basePath)
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const message = a.payload.val();
          message.date = new Date(message.date);
          return message;
        });
      });

    this.angularFire.authState.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });

    this.authService.isTyping().subscribe( value => {
     this.typing = value.toString() == 'true';
    });
  }

  ngOnInit() {}

  // tslint:disable-next-line:use-life-cycle-interface
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
      name: this.name.displayName,
      date: new Date().toString()
    });
    this.msgVal = '';
  }

  showTyping = () => this.authService.setTyping(true);

  showIdle = () =>  this.authService.setTyping(false);

  clearMessages() {
    this.db.list(this.basePath).remove();
  }
}
