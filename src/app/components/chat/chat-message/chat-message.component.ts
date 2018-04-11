import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';

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

  constructor(
    public db: AngularFireDatabase,
    private angularFire: AngularFireAuth
  ) {
    console.log(new Date());
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
  }

  ngOnInit() {}

  chatSend(theirMessage: string) {
    this.db
      .list(this.basePath)
      .push({
        message: theirMessage,
        name: this.name.displayName,
        date: new Date().toString()
      });
    this.msgVal = '';
  }
}
