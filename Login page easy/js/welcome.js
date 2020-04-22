function verifyToken() {
  var token = localStorage.getItem("token");
  var email = localStorage.getItem("email");
  if (token != null) {
    document.getElementById('email').innerHTML = email;
    document.getElementById('token').innerHTML = token;
  }else {
    location.replace('index.html');
  }
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  location.replace('index.html');
}
