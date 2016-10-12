//jeff palmer

function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  //validate password.
  //  The username must be at least 6 characters long

 if (userEntered.length < 6) {
   document.getElementById("usernameGroup").classList.add("has-error");
   document.getElementById("usernameError").innerHTML="Bad username.";
   document.getElementById("usernameError").classList.remove("hidden-message");
   document.getElementById("usernameError").classList.add("shown-message");
 }
 else {
     //green
     document.getElementById("usernameGroup").classList.add("has-success");
 }
  //  The password cannot be "password"
if (passEntered == "password") {
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  document.getElementById("passwordGroup").classList.add("has-error");
}
  else {
    // green
    document.getElementById("passwordGroup").classList.add("has-success");
  }
}
