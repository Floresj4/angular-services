import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {
  activeUsers = [];
  inactiveUsers = [];

  constructor(private userservice:UsersService){}

  ngOnInit() {
	  this.activeUsers = this.userservice.getActiveUsers();
	  this.inactiveUsers = this.userservice.getInactiveUsers();
  }
}
