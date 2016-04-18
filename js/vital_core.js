window.onload = function() {
  var user_name = localStorage.getItem("username");
  if (user_name != null) {
    document.getElementById("email").style.display = 'none';
    document.getElementById("pwd").style.display = 'none';
    document.getElementById("signinButton").style.display = 'none';
    document.getElementById("loggedin").style.display = 'inline-block';
    document.getElementById("username").innerHTML = user_name;
  }
}

function signup(form) {

}

function signin(form) {
  var user = form.email.value;
  var pwd = form.pwd.value;
  if((user == "joaofbsm@hotmail.com" && pwd == "1234") || (user == localStorage.getItem("username") && pwd == localStorage.getItem("pwd"))) {
    document.getElementById("email").style.display = 'none';
    document.getElementById("pwd").style.display = 'none';
    document.getElementById("signinButton").style.display = 'none';
    document.getElementById("loggedin").style.display = 'inline-block';
    document.getElementById("username").innerHTML = "Joao Francisco";
    localStorage.setItem("username", "Joao Francisco");
    localStorage.setItem("pwd", pwd);
    localStorage.setItem("email", user)
  }
  user_name = user;
}

function signout() {
  localStorage.clear();
  document.getElementById("email").style.display = 'inline-block';
  document.getElementById("email").value = "";
  document.getElementById("pwd").style.display = 'inline-block';
  document.getElementById("pwd").value = "";
  document.getElementById("signinButton").style.display = 'inline-block';
  document.getElementById("loggedin").style.display = 'none';
}

function checkout() {
  var grandTotal = ($("span.simpleCart_grandTotal").text().trim()).substring(1);
  if(grandTotal == 0) {
    alert("Cart is empty.");
  }
  else if(localStorage.getItem("username") == null) {
    alert("You need to login before proceeding to payment.");
  }
  else {
    localStorage.setItem("grandTotal", grandTotal);
    window.location.href="payment.html";
  }
}

function updatePayment() {
  document.getElementById("finalValue").innerHTML = localStorage.getItem("grandTotal");
}

function pay() {
  simpleCart.empty();
  window.location.href="../index.html";
  alert("Payment Successful");
}