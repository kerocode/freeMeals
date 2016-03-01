'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
'use strict';
var form = angular.module('myform', ['ngRoute', 'ngAria', 'ngAnimate', 'ngMaterial', 'ngMessages', 'DataCollector']);
form.config(function ($mdThemingProvider) {
	$mdThemingProvider.theme('altTheme')
		.accentPalette('purple'); // specify primary color, all
	// other color intentions will be inherited
	// from default
});



form.filter('capitalize', function () {
	return function (input, all) {
		var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
		return (!!input) ? input.replace(reg, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		}) : '';
	}
});
form.directive('phoneInput', function ($filter, $browser) {
	/*  Credits:
	  - Wade Tandy via
	  http://stackoverflow.com/questions/19094150/using-angularjs-directive-to-format-input-field-while-leaving-scope-variable-unc
	  
	  - kstep via
	  http://stackoverflow.com/questions/12700145/how-to-format-a-telephone-number-in-angularjs*/
	return {
		require: 'ngModel',
		link: function ($scope, $element, $attrs, ngModelCtrl) {
			var listener = function () {
				var value = $element.val().replace(/[^0-9]/g, '');
				$element.val($filter('tel')(value, false));
			};

			// This runs when we update the text field
			ngModelCtrl.$parsers.push(function (viewValue) {
				return viewValue.replace(/[^0-9]/g, '').slice(0, 10);
			});

			// This runs when the model gets updated on the scope directly and keeps our view in sync
			ngModelCtrl.$render = function () {
				$element.val($filter('tel')(ngModelCtrl.$viewValue, false));
			};

			$element.bind('change', listener);
			$element.bind('keydown', function (event) {
				var key = event.keyCode;
				// If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.
				// This lets us support copy and paste too
				if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40)) {
					return;
				}
				$browser.defer(listener); // Have to do this or changes don't get picked up properly
			});

			$element.bind('paste cut', function () {
				$browser.defer(listener);
			});
		}

	};
});
form.filter('tel', function () {
	return function (tel) {
		console.log(tel);
		if (!tel) {
			return '';
		}

		var value = tel.toString().trim().replace(/^\+/, '');

		if (value.match(/[^0-9]/)) {
			return tel;
		}

		var country, city, number;

		switch (value.length) {
		case 1:
		case 2:
		case 3:
			city = value;
			break;

		default:
			city = value.slice(0, 3);
			number = value.slice(3);
		}

		if (number) {
			if (number.length > 3) {
				number = number.slice(0, 3) + '-' + number.slice(3, 7);
			} else {
				number = number;
			}

			return ("(" + city + ") " + number).trim();
		} else {
			return "(" + city;
		}

	};
});


form.directive('exact',
	function () {

		var link = function ($scope, $element, $attrs, ctrl) {

			var validate = function (viewValue) {
				var comparisonModel = $attrs.exact;

				if (!viewValue || !comparisonModel) {
					// It's valid because we have nothing to compare against
					ctrl.$setValidity('exact', true);
				}

				if (parseInt(viewValue) != parseInt(comparisonModel)) {
					ctrl.$setValidity('exact', false);
					return viewValue;
				} else {
					ctrl.$setValidity('exact', true);
					return viewValue;
				}
			};

			ctrl.$parsers.unshift(validate);
			ctrl.$formatters.push(validate);

			$attrs.$observe('exact', function (comparisonModel) {
				return validate(ctrl.$viewValue);
			});

		};

		return {
			require: 'ngModel',
			link: link
		};

	}
);


form.controller('IntroCtrl', function ($scope, $location) {
	$scope.start = function () {
		$location.path('/step1'); // 'step1'
	}
});