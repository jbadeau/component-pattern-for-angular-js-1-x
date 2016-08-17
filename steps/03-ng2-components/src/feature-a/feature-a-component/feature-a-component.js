import {Component, Inject} from 'angular2/core';
import template from './feature-a.tpl.html'

@Component({
	selector: 'feature-a-component',
	template: template
})

export class FeatureAComponent {

	constructor(@Inject('$state') $state) {
		this.$state = $state;
		this.property = 'My Controller Property';
	}

	go(routeId) {
		this.$state.go(routeId);
	}

}