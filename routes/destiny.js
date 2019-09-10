const request = require('request');
const cron = require('node-cron');
const jp = require('jsonpath');

var access_token;

// Access Token -- POST
exports.getAccessToken = function(req, res) {
  const client_id = "29743";
  const client_secret = "1KQkDDBAX4Fg7R4MonEuikYz9LQWDTLNuKuDKXXSQfs"; //TODO
  const code = req.query.code;
  console.log("The req code is", req.query.code);

request.post({
    url: 'https://www.bungie.net/Platform/App/OAuth/Token/?grant_type=authorization_code&client_id=' + client_id + '&code=' + code,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-API-Key': "f966c6ece9324106b01d501a6d932ff6",
        'Authorization': 'Basic ' + (new Buffer(client_id + ":" + client_secret).toString('base64'))
    },
    form: {
        'grant_type': 'authorization_code',
        'client_id': client_id,
        'code': code
    }
  }, function(err, resp, body) {
    access_token =  JSON.parse(body)['access_token'];
    console.log('Access token is : ' + access_token);
    //console.log(body + " \nstatus code: " + resp.statusCode + "\ncookie: " + resp.headers['set-cookie']);
    getItemHashes();
    res.redirect("/");
  });
}

function getItemHashes(req, res){
  const charID = 2305843009299856596;
  const memID = 4611686018470735882;
  const memType = 4;
  const vendorHash = 1265988377;
  var itemHashes;
  var vendorList;

  request.get({
    url: 'https://www.bungie.net/Platform/Destiny2/' + memType + '/Profile/' + memID + '/Character/' + charID + '/Vendors/' + vendorHash + '?components=402',
    headers: {
      'X-API-Key': "f966c6ece9324106b01d501a6d932ff6",
      'Authorization': 'Bearer ' + access_token,
      'Host': 'www.bungie.net',
      'Connection': 'keep-alive'
    },
    }, function(err, resp, body){
      console.log('Printing vendor body.' + body);
      vendorList = JSON.parse(body);
      itemHashes = jp.query(vendorList, '$.Response.sales.data[?(@)].itemHash');
      console.log('These are the item hashes' + itemHashes);
      return itemHashes;

    });

}

exports.containsWep = function(req, res){
  var thisWeeksItems = getItemHashes();
  return thisWeeksItems.includes(1128225405);
}
