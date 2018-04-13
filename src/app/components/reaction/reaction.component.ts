import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ReactionService } from '../../services/reaction.service';
import * as _ from 'lodash';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.css']
})
export class ReactionComponent implements OnInit, OnDestroy {
  @Input() itemId: string;

  showEmojis = false;
  emojiList: string[];
  reactTitle = 'React';

  reactionCount: any;
  userReaction: any;

  subscription: any;

  constructor(
    private reactionSvc: ReactionService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.emojiList = this.reactionSvc.emojiList;

    this.subscription = this.reactionSvc
      .getReactions(this.itemId)
      .valueChanges()
      .subscribe(reactions => {
        this.reactionCount = this.reactionSvc.countReactions(reactions);
        this.userReaction = this.reactionSvc.userReaction(reactions);
      });
  }

  react(val) {
    if (!this.authService.user) {
      alert('You must login');
    } else {
      if (this.userReaction === val) {
        this.reactionSvc.removeReaction(this.itemId);
      } else {
        this.reactionSvc.updateReaction(this.itemId, val);
      }
      this.showEmojis = false;
    }
  }

  toggleShow() {
    this.showEmojis = !this.showEmojis;
    if (this.showEmojis) {
      this.reactTitle = 'Not react';
    } else {
      this.reactTitle = 'React';
    }
  }

  emojiPath(emoji) {
    return `assets/reactions/${emoji}.png`;
  }

  hasReactions(index) {
    return _.get(this.reactionCount, index.toString());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
