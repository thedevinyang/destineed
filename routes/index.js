/*
 * GET home page.
 */

exports.viewHome = function(req, res){
  res.render('index');
};

exports.savePhoneNumber = function(req, res){
  // Obtain phone number from req body, which is always a JSON
  // Use Object.keys to extract the number
  var number = Object.keys(req.body)[0];

  // Write to numbers.txt
  var fs = require('fs');
  console.log("In server about to write number: ", number);
  fs.writeFile("numbers.txt", number, (err) => {
    if (err) {
        console.error(err);
        res.send(400);
        return;
    };
    console.log("File has been created in", __dirname);
    res.send(200);
  });
}
