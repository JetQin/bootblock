'use strict';

/**
 * @ngdoc function
 * @name bootblockApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bootblockApp
 */
angular.module('bootblockApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
