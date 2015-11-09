/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

//var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Product = require('../api/product/product.model');
var Inventory = require('../api/inventory/inventory.model');
var Review = require('../api/review/review.model');

// Thing.find({}).remove(function() {
//   Thing.create({
//     name : 'Development Tools',
//     info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
//   }, {
//     name : 'Server and Client integration',
//     info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
//   }, {
//     name : 'Smart Build System',
//     info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
//   },  {
//     name : 'Modular Structure',
//     info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
//   },  {
//     name : 'Optimized Build',
//     info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
//   },{
//     name : 'Deployment Ready',
//     info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
//   });
// });

Product.find({}).remove(function() {
  Product.create({
    productId : 1001,
    name : 'Sceptre LED HDTV',
    info : 'Sceptre E555BV-FMQR 55" 1080p 60Hz Class LED HDTV.'
  }, {
    productId : 1002,
    name : '65" Samsung 4K  TV',
    info : '65" Samsung Class 4K Ultra HD Smart Curved LED LCD TV.'
  }, {
    productId : 1003,
    name : 'KitchenAid Stand Mixer',
    info : 'Brand New kitchenAid Stand Mixer Tilt 4.5-Quart ksm85pb All Metal 4 Colors.'
  },  {
    productId : 1004,
    name : 'Electric Scooter Skateboard',
    info : 'Self Balancing 2 Wheels Mini Hover Board Electric Scooter Skateboard.'
  },  {
    productId : 1005,
    name : 'Milwaukee Hammer Kit',
    info : 'Milwaukee M12 Fuel 5/8 in. SDS-Plus Rotary Hammer Kit.'
  },{
    productId : 1006,
    name : 'Keurig offeemaker Brewing System',
    info : 'Keurig Elite K40 Single Serve Coffeemaker Brewing System.'
  });
});

Review.find({}).remove(function() {
  Review.create({
    productId : 1001,
    rating : 3,
    review : 'The quality of this TV is average'
  }, {
    productId : 1001,
    rating : 4,
    review : 'I love this TV'
  }, {
    productId : 1001,
    rating : 4,
    review : 'It\'s pretty sharp'
  }, {
    productId : 1002,
    rating : 4,
    review : 'An excellent smart TV'
  }, {
    productId : 1006,
    rating : 5,
    review : 'This is the best Coffeemaker'
  }, {
    productId : 1006,
    rating : 3,
    review : 'It works'
  });
});

Inventory.find({}).remove(function() {
  Inventory.create({
    productId : 1001,
    price : 399,
    count : 20
  }, {
    productId : 1002,
    price : 799,
    count : 30
  }, {
    productId : 1003,
    price : 149,
    count : 100
  },  {
    productId : 1004,
    price : 199,
    count : 5
  },  {
    productId : 1005,
    price : 99,
    count : 50
  },{
    productId : 1006,
    price : 29,
    count : 200
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});