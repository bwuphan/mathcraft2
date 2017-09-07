angular.module('mathcraft', [])
	.component('app', {
		templateUrl: '../templates/app.html',
		controllerAs: 'vm',
		controller: appCtrl,
		require: {
			ngModelCtrl: 'ngModel'
		},
		bindings: {
			ngModel: '<',
		}
	})
function appCtrl() {
	let vm     = this;
	vm.$onInit = onInit;


	function onInit() {
		vm.ngModelCtrl.$setViewValue('hasdf');
		console.log(vm.ngModelCtrl)
	}
}