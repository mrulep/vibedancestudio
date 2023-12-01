"use strict"

// store user
let userName = document.getElementById("firstName");
let userEmail = document.getElementById("email");
        
document.getElementById("submit").addEventListener("click", function() {
	// store the user's information
   localStorage.setItem("firstName", userName.value);
   localStorage.setItem("email", userEmail.value);

   // display a message once the user clicks submit
   document.getElementById("message").innerHTML = "<p id='text'>Thank you for your interest, " + localStorage.getItem("firstName") + "! We'll get back to you soon. In the meantime, we've sent an email to <span class='italic'>" + localStorage.getItem("email") + ".</span></p>";
});
