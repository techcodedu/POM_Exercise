document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === 'test@email.com' && password === 'password') {
        window.location.href = 'dogapi.html';
    } else {
        alert('Invalid email or password');
    }
});
