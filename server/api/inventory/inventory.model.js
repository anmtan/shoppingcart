'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InventorySchema = new Schema({
  productId: Number,
  count: Number
});

module.exports = mongoose.model('Inventory', InventorySchema);