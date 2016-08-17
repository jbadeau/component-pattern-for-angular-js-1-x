import { Component, Inject } from '@angular/core';

@Component({
	selector: 'user-info-component',
	template: '<span style="color: #0088cc;">{{name}}</span>',
})

export class UserInfoComponent {

    constructor() {
        this.name = 'Tomas';
    }

}