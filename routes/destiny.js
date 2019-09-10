const request = require('request')
// Authentication Request -- Consent --  GET
// const authURL = "https://www.bungie.net/en/oauth/authorize?client_id=29743&response_type=code&state=6i0mkLx79Hp91nzWVeHrzHG4&redirect_uri=" + "localhost:3000/destinyAccessToken";
// var auth_code;
// console.log(authURL);
//
// request.get(authURL, function(response) {
//   console.log("Sending get request, got response", response);
//   auth_code = response.data.code;
//   console.log(auth_code);
// });
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
        'Authorization': 'Basic ' + new Buffer(client_id + ":" + client_secret).toString('base64'))
    },
    form: {
        'grant_type': 'authorization_code',
        'client_id': client_id,
        'code': code
    }
  }, function(err, res, body) {
    console.log(body + " \nstatus code: " + res.statusCode + "\ncookie: " + res.headers['set-cookie']);
    res.redirect("/");
});

}
//
// exports.getAccessToken = function(req, res){
//   var accessToken;
//   // console.log(res)
//   const client_id = "29743";
//   const client_secret = "1KQkDDBAX4Fg7R4MonEuikYz9LQWDTLNuKuDKXXSQfs"; //TODO
//   const code = req.query.code;
//   console.log("The req code is", req.query.code);
//
//   request.post({
//     url: "https://www.bungie.net/platform/app/oauth/token/?grant_type=authorization_code&client_id=29743&code="+code,
//     header: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       "X-API-Key": "f966c6ece9324106b01d501a6d932ff6",
//       "Authorization": "Basic " + (new Buffer(client_id + ":" + client_secret).toString('base64'))
//     },
//     data: {
//       "grant_type": "authorization_code",
//       "client_id": client_id,
//       "code": code
//     }
//   }, function(error, resp, body){
//     // On Success
//     console.log("The response from that request is ", resp);
//     console.log("The result from that request is ", body);
//
//     if (error) {
//      console.error("The error from that request is ", error)
//     }
//     // Save token globally
//     // TODO
//     res.redirect("/");
//
//   });

}
