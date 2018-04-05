import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ReactionService } from '../services/reaction.service';
import * as _ from "lodash";
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.css']
})
export class ReactionComponent implements OnInit, OnDestroy {

  @Input() itemId: string;

  showEmojis = false;
  emojiList: string[];

  reactionCount: any;
  userReaction: any;

  subscription: any;

  constructor(private reactionSvc: ReactionService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.emojiList = this.reactionSvc.emojiList

    this.subscription = this.reactionSvc.getReactions(this.itemId).valueChanges()
      .subscribe(reactions => {

        this.reactionCount = this.reactionSvc.countReactions(reactions)
        this.userReaction = this.reactionSvc.userReaction(reactions)

      })
  }


  react(val) {
    if (!this.authService.user) {
      alert("You must login");
    } else {
      if (this.userReaction === val) {
        this.reactionSvc.removeReaction(this.itemId)
      } else {
        this.reactionSvc.updateReaction(this.itemId, val)
      }
    }
  }

  toggleShow() {
    this.showEmojis = !this.showEmojis
  }


  emojiPath(emoji) {
    return `assets/reactions/${emoji}.png`
  }

  hasReactions(index) {
    return _.get(this.reactionCount, index.toString())
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}