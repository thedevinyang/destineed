
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
