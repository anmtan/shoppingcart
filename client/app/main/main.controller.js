'use strict';

angular.module('shoppingcartApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.data = {
        products : [],
        availableOptions : [
          {id: '0', name: 'Monolithic'},
          {id: '1', name: 'Microservices-api-gateway-multi-request'},
          {id: '2', name: 'Microservices-api-gateway-single-request'}
        ],
        selectedOption : {id: '0', name: 'Monolithic'}
    }; 

    $http.get('/api/products').success(function(products) {
      $scope.data.products = products;
    });


  });
