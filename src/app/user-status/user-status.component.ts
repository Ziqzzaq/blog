import { Component, OnInit, Input } from '@angular/core';
import { User } from 'firebase';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css']
})
export class UserStatusComponent implements OnInit {

  constructor() { }

  @Input() user;
  
  ngOnInit() {
  }

}


  

