angular.module('mathcraft')
	.component('navigation', {
		templateUrl: '../templates/navigation.html',
		controller: navigationCtrl,
		controllerAs: 'vm',

	});
function navigationCtrl() {
	console.log('hello');
} 