/**
 * Created by vlads on 18/5/2015.
 */
angular.module('main', ['sw.components'])
	.controller('mainCtrl', function ($scope) {
		$scope.duration = '3m';//'2015.01-2015.04'
		$scope.options = {
			cssClass: 'sw-duration-selector',
			presets: [
				{
					buttonText: "Last 28 Days",
					displayText: "Last 28 Days (As of May 15)",
					enabled: false,
					value: "28d"
				},
				{
					buttonText: "1 month",
					displayText: "Apr, 2015 - Apr, 2015 (1 month)",
					enabled: true,
					value: "1m"
				},
				{
					buttonText: "3 month",
					displayText: "Feb, 2015 - Apr, 2015 (3 month)",
					enabled: true,
					value: "3m"
				},
				{
					buttonText: "Custom",
					displayText: "Apr, 2015 - Apr, 2015 (1 month)",
					enabled: true,
					value: "custom"
				}
			],
			minDate: moment('2013-01-01T00:00:00'),
			maxDate: moment('2015-04-30T00:00:00')
		}
	});