import { Component, Inject } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import template from './some-component.tpl.html'

import {UserInfoComponent} from '../../common/component/user-info-component';

@Component({
	selector: 'some-component',
	template: template,
	directives: [ROUTER_DIRECTIVES, UserInfoComponent]
})

export class SomeComponent {

	constructor() {
		this.count = 0;
		this.property = 'My Component Property';
	}

	increment() {
		this.count++;
	}

}