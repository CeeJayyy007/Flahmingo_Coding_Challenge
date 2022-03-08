function isValidEmail(value) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}

function validateEmail(value, setEmailError) {
  if (value == '') {
    setEmailError('');
  } else if (isValidEmail(value)) {
    setEmailError('');
  } else {
    setEmailError('Invalid Email');
  }
}

function validateUsername(value, setUsernameError) {
  if (value == '') {
    setUsernameError('');
  } else {
    setUsernameError('');
  }
}

function validatePassword(value, setPasswordError) {
  if (value.length < 6) {
    setPasswordError('Password must be 6 characters or more');
  } else {
    setPasswordError('');
  }
}

function isValidPhone(value) {
  const re =
    /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
  return re.test(value);
}

function validatePhone(value, setPhoneError) {
  if (value.length < 11) {
    setPhoneError('Phone number must be 11 characters or more');
  } else if (isValidPhone(value)) {
    setPhoneError('');
  } else {
    setPhoneError('Invalid Phone Number');
  }
}

function validateInput(value, minLength, setError) {
  if (value.length < minLength) {
    setError('Invalid Input');
  } else {
    setError('');
  }
}

function calculateAngle(coordinates) {
  let startLat = coordinates[0]['latitude'];
  let startLng = coordinates[0]['longitude'];
  let endLat = coordinates[1]['latitude'];
  let endLng = coordinates[1]['longitude'];
  let dx = endLat - startLat;
  let dy = endLng - startLng;

  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

const utils = {
  isValidEmail,
  validateEmail,
  validateUsername,
  validatePassword,
  validatePhone,
  validateInput,
  calculateAngle,
};

export default utils;
