// vendor.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Contact Information Schema
const ContactInfoSchema = new Schema({
  address: String,
  phone: String,
  email: String,
  role: String
});

// Vendor Schema
const VendorSchema = new Schema({
  vendorId: { type: String, unique: true },
  vendorName: String,
  vendorType: String,
  contactInformation: ContactInfoSchema
});

const Vendor = mongoose.model('Vendor', VendorSchema, 'vendors');

// CRUD operations

// Create
function createVendor(vendorData) {
  const vendor = new Vendor(vendorData);
  return vendor.save();
}

// Read
function getVendor(vendorId) {
  return Vendor.findOne({ vendorId: vendorId });
}

// Update
function updateVendor(vendorId, updatedData) {
  return Vendor.findOneAndUpdate({ vendorId: vendorId }, updatedData, { new: true });
}

// Delete
function deleteVendor(vendorId) {
  return Vendor.findOneAndDelete({ vendorId: vendorId });
}

// Read all
function getAllVendors() {
  return Vendor.find({});
}

module.exports = {
  createVendor,
  getVendor,
  updateVendor,
  deleteVendor,
  getAllVendors
};