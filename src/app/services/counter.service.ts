export class CounterService {
	
	transitionCount:number = 0;

	updateTransitionCount() {
		this.transitionCount++;
		console.log('updated transition count: ' + this.transitionCount);
	}
	
	getTransitionCount() {
		return this.transitionCount;
	}
}