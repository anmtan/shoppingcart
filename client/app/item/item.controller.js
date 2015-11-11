'use strict';

angular.module('shoppingcartApp')
  .controller('ItemCtrl', function ($scope, $location, $http) {
    var productId = $location.search().productId;
    var version = $location.search().v;

    console.log("productId :" + productId + " version :" + version);

    //For version 1 this is making all calls to different micro services
    if(version=='2'){
        // Getting products from product catalog service
        $http.get('https://i2rlz3cz8e.execute-api.us-west-2.amazonaws.com/dev/product?productId=' + productId).success(function(data) {
          $scope.item = data.products;
          $scope.inventory = data.inventorys;
          $scope.reviews = data.reviews;
        });
    }
    else if(version=='1'){
        // Getting products from product catalog service
        $http.get('https://i2rlz3cz8e.execute-api.us-west-2.amazonaws.com/dev/products/' + productId).success(function(item) {
          $scope.item = item;
        });

        // Getting inventory from inventory service
        $http.get('https://i2rlz3cz8e.execute-api.us-west-2.amazonaws.com/dev/inventorys/' + productId).success(function(inventory) {
          $scope.inventory = inventory;
        });

        // Getting reviews from review service
        $http.get('https://i2rlz3cz8e.execute-api.us-west-2.amazonaws.com/dev/reviews/' + productId).success(function(reviews) {
          $scope.reviews = reviews;
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
