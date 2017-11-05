import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers = [];
  inactiveUsers = [];

  constructor(private userservice:UsersService,
			  private counterService:CounterService){
  }

  ngOnInit() {
	  this.activeUsers = this.userservice.getActiveUsers();
	  this.inactiveUsers = this.userservice.getInactiveUsers();
  }

  getTransitionCount() {
	  return this.counterService.getTransitionCount();
  }
}
