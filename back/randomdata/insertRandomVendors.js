const faker = require('faker');
const fs = require('fs');

// List of vendor names
const vendorNames = ['IBM', 'Microsoft', 'Salesforce', 'Oracle', 'Broadcom', 'HP', 'Appian', 'ServiceNow', 'SAP', 'VMware', 'Cisco', 'Dell', 'Red Hat', 'Adobe', 'Symantec', 'Splunk', 'Juniper', 'NetApp', 'Citrix', 'F5 Networks', 'Fortinet', 'FireEye', 'Palo Alto Networks'];

// Generate random data for 50 vendors
let vendors = [];
for (let i = 0; i < 50; i++) {
  vendors.push({
    vendorId: 'v' + (i + 1),
    vendorName: vendorNames[i % vendorNames.length], // Cycle through vendorNames
    vendorType: 'IT',
    contactInformation: {
      address: faker.address.streetAddress(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      role: 'Sales Manager'
    }
  });
}

// Write data to a JSON file
fs.writeFileSync('vendors.json', JSON.stringify(vendors, null, 2));