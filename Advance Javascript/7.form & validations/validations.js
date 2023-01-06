function Formvalidation() {
  //  Text Validation :-

  let fname1 = document.getElementById("fname");
  if (fname1.value == "" || fname1.value == null) {
    document.getElementById("fnm").style.visibility = "visible";
    return false;
  } else if (!isNaN(fname1.value)) {
    document.getElementById("fnm").innerHTML = "*Enter Alphabates*";
    return false;
  } else {
    document.getElementById("fnm").innerHTML = "";
  }

  //  Text Validation

  let mname1 = document.getElementById("mname");
  if (mname1.value == "" || mname.value == null) {
    document.getElementById("mnm").innerHTML = "*Enter Middle Name*";
    return false;
  } else if (!isNaN(mname1.value)) {
    document.getElementById("mnm").innerHTML = "*Enter Alphabates*";
    return false;
  } else {
    document.getElementById("mnm").innerHTML = "";
  }

  //  Radio Button Validation

  let y = document.getElementById("male");
  let z = document.getElementById("female");
  let a = document.getElementById("other");
  if (y.checked == false && z.checked == false && a.checked == false) {
    // alert("hello");
    document.getElementById("rdio1").style.visibility = "visible";
    // document.getElementById("rdio1").innerHTML = "*Select Gender*";
    return false;
  } else {
    document.getElementById("rdio1").innerHTML = "";
  }

  //  Checkbox Button Validation
  let std = document.getElementById("study");
  let trv = document.getElementById("Travel");
  let msc = document.getElementById("music");
  if (std.checked == false && trv.checked == false && msc.checked == false) {
    document.getElementById("cked").innerHTML = "*Select Hobbies*";
    return false;
  } else {
    document.getElementById("cked").innerHTML = "";
  }

  //  Select-Option Button Validation

  let city = document.getElementById("city");
  if (city.value == -1) {
    document.getElementById("slct1").innerHTML = "*Select City*";
    return false;
  } else {
    document.getElementById("slct1").innerHTML = "";
  }

  // Mobile Number Validation

  let telno = document.getElementById("telnum");
  if (telno.value == "") {
    document.getElementById("telnbr").style.visibility = "visible";
    return false;
  } else if (isNaN(telno.value)) {
    document.getElementById("telnbr").innerHTML = "*Enter Digit Only*";
    return false;
  } else if (telno.value.length < 10) {
    document.getElementById("telnbr").innerHTML = "*Enter 10 Digit*";
    return false;
  } else if (telno.value.length > 10) {
    document.getElementById("telnbr").innerHTML = "*Enter 10 Digit*";
    return false;
  } else {
    document.getElementById("telnbr").innerHTML = "";
  }

  // Password Validation

  let pass = document.getElementById("pass");
  let cpass = document.getElementById("cpass");
  let passex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (pass.value == "") {
    document.getElementById("ps").innerHTML = "*Enter Password*";
    return false;
  } else if (pass.value.match(passex)) {
    if (pass.value != cpass.value) {
      document.getElementById("cps1").innerHTML = "*Password Not Match*";
      return false;
    } else {
      document.getElementById("cps1").innerHTML = "";
    }
  } else {
    document.getElementById("ps").innerHTML =
      "** Minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number";
    document.getElementById("ps").style.color = "green";
    return false;
  }

  // Email Validation

  let emailid = document.getElementById("email");
  if (emailid.value == "" || emailid.value == null) {
    document.getElementById("eml").innerHTML = "*Enter Mail Id*";
    return false;
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailid.value)) {
    return true;
  } else {
    document.getElementById("eml").innerHTML = "*Invalid Email ID*";
    return false;
  }
}
function abc() {
  let shwpass = document.getElementById("pass");
  if (shwpass.type == "password") {
    shwpass.type = "text";
  } else {
    shwpass.type = "password";
  }
}
