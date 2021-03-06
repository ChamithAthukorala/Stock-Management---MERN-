const mongoose = require('mongoose');

const SupplierSchema = mongoose.Schema({
	supplierId: {
		type: String,
		require: true,
		unique: true
	},
	supplierName: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true,
		unique: true
	},
	phoneNumber: {
		type: String,
		require: true,
		unique: true
	},
	address: {
		type: String,
		require: true
	},
	supplyItem: {
		type: String,
		require: true
	},
	address: {
		type: String,
		require: true
	},
	product_name: {
		type: String,
		require: true
	},
	product_price: {
		type: String,
		require: true
	},
	br_number: {
		type: String,
		require: true
	}

});

module.exports = mongoose.model('Supplier', SupplierSchema);
