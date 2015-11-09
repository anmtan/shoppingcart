'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  productId: Number,
  rating: Number,
  review: String
});

module.exports = mongoose.model('Review', ReviewSchema);