const mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
const phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const address_format = /^[a-zA-Z0-9\s,.'-]{3,}$/;

function Validate() {
  if (
    AddressValidation() &&
    EmailValidation() &&
    NameValidation() &&
    PhoneNumberValidation()
  ) {
    document.getElementById("phone_number").value = "";
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    document.getElementById("prompt").innerHTML = "Form Submitted";
  }
}

function EmailValidation() {
  var enteredEmail = document.getElementById("email").value;
  if (mail_format.test(enteredEmail)) {
    return true;
  } else {
    document.getElementById("prompt").innerHTML = "Email Not Valid";
    document.getElementById("email").focus();
    return false;
  }
}

function NameValidation() {
  var name = document.getElementById("name").value;
  if (!regName.test(name) || name.length < 1) {
    document.getElementById("prompt").innerHTML =
      "Please enter your full name (first & last name).";
    document.getElementById("name").focus();
    return false;
  } else {
    return true;
  }
}

function AddressValidation() {
  var address = document.getElementById("address").value;
  if (address_format.test(address)) {
    return true;
  } else {
    document.getElementById("prompt").innerHTML =
      "Please enter a valid address";
    document.getElementById("address").focus();
    return false;
  }
}

function PhoneNumberValidation() {
  var number = document.getElementById("phone_number").value;

  if (phoneno.test(number)) {
    return true;
  } else {
    document.getElementById("prompt").innerHTML =
      "Please enter a valid phone number";
    document.getElementById("phone_number").focus();
    return false;
  }
}
