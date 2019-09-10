
const authURL = "https://www.bungie.net/en/oauth/authorize?client_id=29743&response_type=code&state=6i0mkLx79Hp91nzWVeHrzHG4&redirect_uri=" + "https://localhost:3000";


function validateNumber(){
    var checker = document.getElementById("userInput").value;
    console.log(checker.length + " is the length of the number inputted");
    if (checker.length != 10){
      alert("Please enter an 10 digit phone number with no dashes and parentheses.");
    } else {
      if(isNaN(checker)){
        console.log(checker);
        alert("Please enter an 10 digit phone number with no dashes and parentheses.");
      } else {
        numberGet();
      }
    }
  }


function numberGet() {
  var input = document.getElementById("userInput").value;
	alert(input + " will now recieve text alerts!");

  console.log("About to save the number");
  saveNumber(input);

};


function saveNumber(number) {
  console.log("About to make a POST request with info:", number);
  $.post('/savePhoneNumber', number, function(result) {
    // After POST, navigate to COMPLETE SCREEN
    console.log("in function.js saveNumber, about to navigate to home");
    navigateToComplete();
  });
}

function navigateToComplete(){
  console.log("About to nav to /complete");
  window.location.href = '/complete';

}

function navigateToAuth(){
  window.location.href = authURL;
}
