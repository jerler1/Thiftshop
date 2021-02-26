const mongoose = require("mongoose");
const Inventory = require("./inventory");
const Storefront = require("./storefront");

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
  storeID: {
    type: Schema.Types.ObjectId,
    ref: Storefront,
    required: true,
  },
  customerName: {
    type: String,
    trim: true,
    required: true,
  },
  customerEmail: {
    type: String,
    trim: true,
    required: true,
  },
  purchasedItems: [
    {
      type: Schema.Types.ObjectId,
      ref: Inventory,
    },
  ],
  status: {
    type: String,
    trim: true,
    required: true,
  },
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
