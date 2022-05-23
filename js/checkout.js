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
  let firstNameCheck = lettersOnly(fName);

  if (fName == "" || fName.length < 3 || !firstNameCheck) {
    error++;
    document.getElementById("errorName").style.display = "block";
    document.getElementById("fName").style.backgroundColor = "lightcoral";
    document.getElementById("fName").style.color = "white";
  } else {
    document.getElementById("errorName").style.display = "none";
    document.getElementById("fName").style.backgroundColor = "aquamarine";
    document.getElementById("fName").style.color = "black";
  }

  // Email Validation
  let emailCheck = emailRegex(fEmail);

  if (fEmail == "" || fEmail.length < 3 || !emailCheck) {
    error++;
    document.getElementById("errorEmail").style.display = "block";
    document.getElementById("fEmail").style.backgroundColor = "lightcoral";
    document.getElementById("fEmail").style.color = "white";
  } else {
    document.getElementById("errorEmail").style.display = "none";
    document.getElementById("fEmail").style.backgroundColor = "aquamarine";
    document.getElementById("fEmail").style.color = "black";
  }

  // Address Validation
  if (fAddress == "" || fAddress.length < 3) {
    error++;
    document.getElementById("errorAddress").style.display = "block";
    document.getElementById("fAddress").style.backgroundColor = "lightcoral";
    document.getElementById("fAddress").style.color = "white";
  } else {
    document.getElementById("errorAddress").style.display = "none";
    document.getElementById("fAddress").style.backgroundColor = "aquamarine";
    document.getElementById("fAddress").style.color = "black";
  }

  // Last Name Validation
  let lastNameCheck = lettersOnly(fLastN);

  if (fLastN == "" || fLastN.length < 3 || !lastNameCheck) {
    error++;
    document.getElementById("errorLastN").style.display = "block";
    document.getElementById("fLastN").style.backgroundColor = "lightcoral";
    document.getElementById("fLastN").style.color = "white";
  } else {
    document.getElementById("errorLastN").style.display = "none";
    document.getElementById("fLastN").style.backgroundColor = "aquamarine";
    document.getElementById("fLastN").style.color = "black";
  }

  // Password Validation
  let passwordCheck = numbersLettersOnly(fPassword);

  if (fPassword == "" || fPassword.length < 4 || fPassword.length > 8 || !passwordCheck) {
    error++;
    document.getElementById("errorPassword").style.display = "block";
    document.getElementById("fPassword").style.backgroundColor = "lightcoral";
    document.getElementById("fPassword").style.color = "white";
  } else {
    document.getElementById("errorPassword").style.display = "none";
    document.getElementById("fPassword").style.backgroundColor = "aquamarine";
    document.getElementById("fPassword").style.color = "black";
  }

  // Phone Number Validation
  let phoneCheck = numbersOnly(fPhone);

  if (fPhone == "" || fPhone.length !== 9 || !phoneCheck) {
    error++;
    document.getElementById("errorPhone").style.display = "block";
    document.getElementById("fPhone").style.backgroundColor = "lightcoral";
    document.getElementById("fPhone").style.color = "white";
  } else {
    document.getElementById("errorPhone").style.display = "none";
    document.getElementById("fPhone").style.backgroundColor = "aquamarine";
    document.getElementById("fPhone").style.color = "black";
  }

  // if (error > 0) {
  //   alert("Error");
  // } else {
  //   alert("OK");
  // }
}

function lettersOnly(str) {
  // Returns true if the string passed as the argument only contains letters.
  return /^[a-zA-Z]+$/.test(str);
}
function numbersOnly(str) {
  // Returns true if the string passed as the argument only contains numbers.
  return /^[0-9]+$/.test(str);
}
function numbersLettersOnly(str) {
  // Returns true if the string passed as the argument only contains numbers &/OR letters.
  return /^[a-zA-Z0-9]+$/.test(str);
}
function emailRegex(str) {
  // Returns true if the string passed as the argument has the correct email format.
  return /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(str);
}
