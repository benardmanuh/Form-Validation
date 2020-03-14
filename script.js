
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordcheck = document.getElementById('passwordcheck');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});
function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const passwordcheckValue = passwordcheck.value.trim();

if(usernameValue === '') {
  setErrorFor(username, 'Username cannot be blank.');
} else {
  setSuccessFor(username);
}

if(emailValue === '') {
  setErrorFor(email, 'Email cannot be blank.');
} else if(!isEmail(emailValue)) {
  setErrorFor(email, 'This email is not valid.');
} else {
    setSuccessFor(email);
}

if(passwordValue === '') {
  setErrorFor(password, 'Password cannot be blank.');
} else if(passwordValue.length < 6) {
  setErrorFor(password, 'Password requires 6 or more characters.');
} else {
  setSuccessFor(password);
}

if(passwordcheckValue === '') {
  setErrorFor(passwordcheck, 'password cannot be blank.');
} else if(passwordcheckValue !== passwordValue) {
  setErrorFor(passwordcheck, "Password does not match")
} else {
    setSuccessFor(passwordcheck);
}

function setErrorFor(input, message) {
const formControl = input.parentElement;
const small = formControl.querySelector('small');
formControl.className = 'form-control error';
small.innerText = message;
}


function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


}
