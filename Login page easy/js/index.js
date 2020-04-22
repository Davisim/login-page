function signIn() {
  var email = document.getElementById('email').value;
  var pwd = document.getElementById('password').value
  console.log(email);

  fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        "email": email,
        "password": pwd
      })})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('email', email);
      localStorage.setItem('password', pwd);
      location.replace('welcome.html')
    }
    console.log(data);
  });
}
