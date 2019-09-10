var cron = require('node-cron');

// Check every Tuesday at 12:00pm
// Cron: * * * * * [command]
cron.schedule('0 12 * * Tuesday', () => {
  // Check Desntiny here
  console.log('Running every Tuesday at 12:00pm');
  var url = "Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Vendors/{vendorHash}/""
 $.get(url, function(result){

 }
});
