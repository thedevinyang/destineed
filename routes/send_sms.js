// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC7b52c9e288a9a128abe2da90a5026cac';
const authToken = '4636d2429edae909298d79888f9489b0';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+18313464554',
     to: '+14089300543'
   })
  .then(message => console.log(message.sid));
