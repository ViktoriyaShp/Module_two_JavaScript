'use strict'

function signIn() {
    const email = document.querySelector('#email-input').value
    const password = document.querySelector('#password-input').value

    // const user = { email, password }

    localStorage.setItem('userEmail', email)

	document.location.href = './home.html'
};