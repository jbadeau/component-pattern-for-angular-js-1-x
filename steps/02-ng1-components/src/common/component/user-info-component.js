
class UserInfoComponent {

    constructor() {
        this.name = 'Tomas';
    }

}

export default {
	template: '<span style="color: #0088cc;">{{$ctrl.name}}</span>',
	controller: UserInfoComponent
};
