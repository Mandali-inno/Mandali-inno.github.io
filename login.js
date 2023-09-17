const loginForm = document.getElementById('loginForm');
const loginButton = document.getElementById('loginButton');
const signupButton = document.getElementById('signupButton');
const loginStatus = document.getElementById('loginStatus');
const loggedInUser = document.getElementById('loggedInUser');
const logoutButton = document.getElementById('logoutButton');

loginButton.addEventListener('click', () => {
 
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'demo' && password === 'password') {
    loginStatus.style.display = 'block';
    loggedInUser.textContent = username;
    loginForm.style.display = 'none';
  } else {
    alert('Invalid username or password.');
  }
});

logoutButton.addEventListener('click', () => {
  loginForm.style.display = 'block';
  loginStatus.style.display = 'none';
});
