import {Component, OnInit, Input} from '@angular/core';
import {ChatService} from '../../../services/chat.service';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css']
})
export class UserStatusComponent implements OnInit {
  @Input() user;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
  }
}
