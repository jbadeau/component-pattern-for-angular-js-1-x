export function routing($stateProvider) {

	$stateProvider.state('app.feature-b', {
		url : '/feature-b',
		template : '<some-component></some-component>'
	});
}