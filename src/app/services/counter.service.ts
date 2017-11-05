export class CounterService {
	
	activeUserCount = [];
	inactiveUserCount = [];
	
	updateActiveUserCount(id:number) {
		let currentCount = this.activeUserCount[id];
		currentCount = currentCount
			? currentCount++ : 1;
		
		this.activeUserCount[id] = currentCount;
		console.log('active count for user id ' + id 
			+ ' = ' + currentCount);
	}
	
	updateInactiveUserCount(id:number) {
		let currentCount = this.inactiveUserCount[id];
		currentCount = currentCount
			? currentCount++ : 1;

		this.inactiveUserCount[id] = currentCount;
		console.log('active count for user id ' + id 
			+ ' = ' + currentCount);
	}
}