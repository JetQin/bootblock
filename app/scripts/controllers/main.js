'use strict';

/**
 * @ngdoc function
 * @name bootblockApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bootblockApp
 */
angular.module('bootblockApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
