'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  productId: Number,
  name: String,
  info: String
});

module.exports = mongoose.model('Product', ProductSchema);
