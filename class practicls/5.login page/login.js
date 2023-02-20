function validation() {
  let emailid = document.getElementById("email");
  if (emailid.value == "" || emailid.value == null) {
    document.getElementById("eml").innerHTML = "*Enter Mail Id*";
    return false;
  } else if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailid.value)
  ) {
    document.getElementById("eml").innerHTML = "";
  } else {
    document.getElementById("eml").innerHTML = "*Invalid Email ID*";
    return false;
  }

  // password validation

  let pass = document.getElementById("pass");
  let cpass = document.getElementById("cpass");
  let passex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (pass.value == "") {
    document.getElementById("ps").innerHTML = "*Enter Password*";
    return false;
  } else if (pass.value.match(passex)) {
    document.getElementById("cps1").innerHTML = "";
  } else {
    document.getElementById("ps").innerHTML =
      "* Mini 8 char, 1 uppercase, 1 lowercase and 1 number";
    document.getElementById("ps").style.color = "green";
    return false;
  }
}
