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



exports.getAccessToken = function(req, res){

  console.log(res)
  const client_id = "29743";
  const client_secret = "1KQkDDBAX4Fg7R4MonEuikYz9LQWDTLNuKuDKXXSQfs"; //TODO
  const code = res.get("code"); // TODO

  request.post({
    url: "https://www.bungie.net/platform/app/oauth/token/?grant_type=authorization_code&client_id=29743&code=142a4e57bd3c6f8451cd46cf4574a944",
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-API-Key": "f966c6ece9324106b01d501a6d932ff6",
      "Authorization": "Basic " + base64encode(client_id+":"+client_secret)
    },
    data: {
      "grant_type": "authorization_code",
      "client_id": client_id,
      "code": code
    }
  }, function(err, res, body){
    console.log(body);
  });
}
