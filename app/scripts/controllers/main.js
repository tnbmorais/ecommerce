'use strict';

/**
 * @ngdoc function
 * @name ecommerceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ecommerceApp
 */
angular.module('ecommerceApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
