unction validateLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';
    if (!username || !password) {
      errorMessage.textContent = 'Please fill in all fields.';
      return false;
    }
    if (username.length < 4) {
      errorMessage.textContent = 'Username must be at least 4 characters long.';
      return false;
    }
    if (password.length < 6 || !/\d/.test(password)) {
      errorMessage.textContent = 'Password must be at least 6 characters long and include a number.';
      return false;
    }
    alert('Login Successful!');
    return true; 
  }