'use strict';

angular.module('shoppingcartApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('item', {
        url: '/item',
        templateUrl: 'app/item/item.html',
        controller: 'ItemCtrl'
      });
  });