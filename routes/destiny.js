const request = require('request')

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
    console.log(body);
    access_token = body.access_token;
    //console.log(body + " \nstatus code: " + resp.statusCode + "\ncookie: " + resp.headers['set-cookie']);
    getVendors();
    res.redirect("/");
  });
}

exports.getVendors = function(req, res) {
  const charID = 2305843009299856596;
  const memID = 4611686018470735882;
  const memType = 4;
  const vendorHash = 1265988377;

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

  });
}
