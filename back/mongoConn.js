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

const Vendor = mongoose.model('Vendor', VendorSchema);

// Connect to MongoDB
mongoose.connect('mongodb+srv://@aqnit.o1mc6xz.mongodb.net/aquanima?retryWrites=true&w=majority&appName=aqnit', {useNewUrlParser: true, useUnifiedTopology: true});

const vendorData = {
    vendorId: 'v51',
    vendorName: 'TestVendor',
    vendorType: 'IT',
    contactInformation: {
      address: '123 Test St',
      phone: '123-456-7890',
      email: 'testvendor@example.com',
      role: 'Sales Manager'
    }
  };
  
  createVendor(vendorData)
    .then(vendor => console.log(vendor))
    .catch(err => console.error(err));

getVendor('v1')
  .then(vendor => console.log(vendor))
  .catch(err => console.error(err));
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

