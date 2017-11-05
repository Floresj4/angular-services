import { OnInit, Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Felicia'];
  inactiveUsers = ['Erica', 'Carl'];
	
  constructor(private counterService:CounterService) {}

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.updateInactiveUserCount(id);
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.updateActiveUserCount(id);
  }
	
  getActiveUsers() {
	  return this.activeUsers;
  }

  getInactiveUsers() {
	  return this.inactiveUsers;
  }
}