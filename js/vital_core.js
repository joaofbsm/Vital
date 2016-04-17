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

function signin(form) {
  var user = form.email.value;
  var pwd = form.pwd.value;
  if(user == "joaofbsm@hotmail.com" && pwd == "1234") {
    document.getElementById("email").style.display = 'none';
    document.getElementById("pwd").style.display = 'none';
    document.getElementById("signinButton").style.display = 'none';
    document.getElementById("loggedin").style.display = 'inline-block';
    document.getElementById("username").innerHTML = "Joao Francisco";
    localStorage.setItem("username", "Joao Francisco");
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