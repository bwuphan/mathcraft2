angular.module('mathcraft', [])
	.component('app', {
		templateUrl: '../templates/app.html',
		controllerAs: 'vm',
		controller: appCtrl
	})
function appCtrl() {
	console.log('hello');
}