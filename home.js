

function getUsername() {
    const email = localStorage.getItem('userEmail')

	const messageElement = document.querySelector('#message')

	if (email) {
		messageElement.textContent = `Добро пожаловать, ${email}. Мы ждали тебя ( ͡° ͜ʖ ͡°)`
	} else {
		messageElement.textContent = `Чтобы продолжить, вам необходимо войти в систему (ಠ_ಠ)`
	}
};

function logout() {
	localStorage.removeItem('userEmail');
};
