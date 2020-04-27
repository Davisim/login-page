document.body.onload = function(){
  verifyToken();
  document.getElementById('logout').addEventListener("click", logout);
};
function verifyToken() {
  var token = localStorage.getItem("token");
  var email = localStorage.getItem("email");
  if (token != null) {
    document.getElementById('email').innerHTML = email;
    document.getElementById('token').innerHTML = token;
  }else {
    console.log('Not logged in!');
    location.replace('index.html');
  }
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  location.replace('index.html');
}
