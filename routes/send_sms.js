// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC7b52c9e288a9a128abe2da90a5026cac';
const authToken = '4636d2429edae909298d79888f9489b0';
const client = require('twilio')(accountSid, authToken);

var fs = require('fs');

fs.readFile('numbers.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
    var phoneNumber = "+1" + data;

    client.messages
      .create({
         body: 'Hi! You are now recieving text alerts from Destineed!',
         from: '+18313464554',
         to: phoneNumber
       })
      .then(message => console.log(message.sid));
});
