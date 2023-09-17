
const signupForm = document.getElementById('signupForm');
const signupSubmitButton = document.getElementById('signupSubmitButton');
const signupBackButton = document.getElementById('signupBackButton');

signupSubmitButton.addEventListener('click', () => {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const dateOfBirth = document.getElementById('dateOfBirth').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const zipcode = document.getElementById('zipcode').value;

  if (!isValidName(firstName)) {
    alert('Please enter a valid first name.');
  } else if (!isValidName(lastName)) {
    alert('Please enter a valid last name.');
  } else if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
  } else if (!isValidPhoneNumber(phoneNumber)) {
    alert('Please enter a valid phone number.');
  } else if (!isValidPassword(password)) {
    alert('Password must be at least 8 characters long.');
  } else if (password !== confirmPassword) {
    alert('Passwords do not match.');
  } else if (!isValidDateOfBirth(dateOfBirth)) {
    alert('Please enter a valid date of birth.');
  } else if (!isValidAddress(address)) {
    alert('Please enter a valid address.');
  } else if (!isValidCity(city)) {
    alert('Please enter a valid city.');
  } else if (!isValidZipcode(zipcode)) {
    alert('Please enter a valid ZIP code.');
  } else {
    alert('Signup successful!');
  }
});

signupBackButton.addEventListener('click', () => {
  window.location.href = 'login.html';
});

function isValidName(name) {
  return name.length >= 2;
}

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

function isValidPhoneNumber(phoneNumber) {
  const phoneNumberPattern = /^\d{10,}$/;
  return phoneNumberPattern.test(phoneNumber);
}

function isValidPassword(password) {
  return password.length >= 8;
}

function isValidDateOfBirth(dateOfBirth) {
  const dateOfBirthPattern = /^\d{4}-\d{2}-\d{2}$/;
  return dateOfBirthPattern.test(dateOfBirth);
}

function isValidAddress(address) {
  return address.trim() !== '';
}

function isValidCity(city) {
  return city.trim() !== '';
}

function isValidZipcode(zipcode) {
  const zipcodePattern = /^\d{5}$/;
  return zipcodePattern.test(zipcode);
}
