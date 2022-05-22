// Exercise 6
function validate() {
  var error = 0;
  // Get the input fields
  var fName = document.getElementById("fName").value;
  var fEmail = document.getElementById("fEmail").value;
  var fAddress = document.getElementById("fAddress").value;
  var fLastN = document.getElementById("fLastN").value;
  var fPassword = document.getElementById("fPassword").value;
  var fPhone = document.getElementById("fPhone").value;

  // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorEmail = document.getElementById("errorEmail");

  // Validate fields entered by the user: name, phone, password, and email

  // First Name Validation
  if (fName == "" && fName.length < 3) {
    error++;
  }

  // Email Validation
  if (fEmail == "" && fEmail.length < 3) {
    error++;
  }

  // Address Validation
  if (fAddress == "" && fAddress.length < 3) {
    error++;
  }

  // Last Name Validation
  if (fLastN == "" && fLastN.length < 3) {
    error++;
  }

  // Password Validation
  if (fPassword == "" && fPassword.length < 3) {
    error++;
  }

  // Phone Number Validation
  if (fPhone == "" && fPhone.length < 3) {
    error++;
  }

  if (error > 0) {
    alert("Error");
  } else {
    alert("OK");
  }
}
