'use strict';

angular.module('shoppingcartApp')
  .controller('ItemCtrl', function ($scope, $location, $http) {
    var productId = $location.search().productId;
    var version = $location.search().v;

    console.log("productId :" + productId + " version :" + version);

    //For version 1 this is making all calls to different micro services
    if(version=='1'){
        // Getting products from product catalog service
        $http.get('/api/products/' + productId).success(function(item) {
          $scope.item = item;
        });
    }
    else {
        // Getting products from product catalog service
        $http.get('/api/products/' + productId).success(function(item) {
          $scope.item = item;
        });

        // Getting inventory from inventory service
        $http.get('/api/inventorys/' + productId).success(function(inventory) {
          $scope.inventory = inventory;
        });

        // Getting reviews from review service
        $http.get('/api/reviews/' + productId).success(function(reviews) {
          $scope.reviews = reviews;
        });
    }
    

  });
