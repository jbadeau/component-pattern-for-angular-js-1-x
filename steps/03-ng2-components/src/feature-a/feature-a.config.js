export function routing($stateProvider) {

	$stateProvider.state('app.feature-a', {
		url : '/feature-a',
		template : '<feature-a-component></feature-a-component>'
	});
}