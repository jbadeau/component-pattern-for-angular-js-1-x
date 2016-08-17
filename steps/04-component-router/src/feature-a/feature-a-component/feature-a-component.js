import { Component, Inject } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import template from './feature-a.tpl.html'

@Component({
	selector: 'feature-a-component',
	template: template,
	directives: [ROUTER_DIRECTIVES]
})

export class FeatureAComponent {

	constructor() {
		this.property = 'My Controller Property';
	}

}