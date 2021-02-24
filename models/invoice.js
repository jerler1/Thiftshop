const mongoose = require("mongoose");
const Inventory = require("./inventory");

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    storeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Storefront
    },
    customerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Customer
    },
    purchasedItems: [
        {
            itemID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: Inventory,
            },
            description: {
                type: String,
                ref: Inventory,
            }
        }
    ]
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
