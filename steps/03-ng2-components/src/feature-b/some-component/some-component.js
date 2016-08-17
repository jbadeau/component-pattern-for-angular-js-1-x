import {Component, Inject} from 'angular2/core';
import template from './some-component.tpl.html'

@Component({
	selector: 'some-component',
	template: template
})

export class SomeComponent {

	constructor(@Inject('$state') $state) {
		this.$state = $state;
		this.count = 0;
		this.property = 'My Component Property';
	}

	increment() {
		this.count++;
	}

	go(routeId) {
		this.$state.go(routeId);
	}


}