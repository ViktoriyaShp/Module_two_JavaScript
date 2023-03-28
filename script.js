'use strict'

//Проверка email на валидность с помощью регулярного выражения
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// const onInputUsernameHandler = ({target}) => {
//     const {value} = target;

//     const inputWrapperElement = document.querySelector('.input-wrapper_one')

//     if (!validateEmail(value)) inputWrapperElement.classList.add('error-boxone')
//     else inputWrapperElement.classList.remove('error-boxone')
// };

// const onInputUsername = ({target}) => {
//     const {value} = target;

//     const inputWrapperElement = document.querySelector('.input-wrapper_two')

//     if (value.length > 0 && value.length < 8 ) inputWrapperElement.classList.add('error-boxtwo')
//     else inputWrapperElement.classList.remove('error-boxtwo')
// };

// function myFunction(id,pid) {
//     var checkBox = document.getElementById(id);
//     var text = document.getElementById(pid);
//     if (checkBox.checked == true) {
//         text.style.display = "none";
//     } else {
//         text.style.display = "block";
//     }
// }

const inputEmail = document.getElementById('email-input');
const inputPassword = document.getElementById('password-input');
const inputCheckbox = document.getElementById('checkbox-input');
const inputCheckboxCustom = document.getElementById('custom-checkbox');

const emailMandatory = document.getElementById('email-mandatory');
const passwordMandatory = document.getElementById('password-mandatory');
const checkboxMandatory = document.getElementById('checkbox-mandatory');

const checkboxLogin = document.getElementById('login-form-checkbox');

const starEmail = document.getElementById('star-email');
const starPassword = document.getElementById('star-password');
const starCheckbox = document.getElementById('star-checkbox');

const labelEmail = document.getElementById('label-email');
const labelPassword = document.getElementById('label-password');

const invalidEmail = document.getElementById('email-invalid');

const lengthPassword = document.getElementById('password-length');

const button = document.querySelector('.button-wrapper_btn');

//Проверка введенных данных в поле “Email”

button.addEventListener('click', (event) => {
    emailMandatory.style.display = 'none';
    invalidEmail.style.display = 'none';
    passwordMandatory.style.display = 'none';
    lengthPassword.style.display = 'none';
    checkboxMandatory.style.display = 'none';

    let emailBool = false;

	if (inputEmail.value === '' || validateEmail(inputEmail.value) === false) {
		inputEmail.style.border = "	2px solid red";
		starEmail.style.color = 'red';
		labelEmail.style.color = 'red';
		if (inputEmail.value === '') {
			emailMandatory.style.display = 'contents';
		} else if (validateEmail(inputEmail.value) === false) {
			invalidEmail.style.display = 'contents';
		}
		emailBool = false;
	} else {
		inputEmail.style.border = "2px solid #787878";
		starEmail.style.color = '#787878';
		labelEmail.style.color = '#787878';
		emailMandatory.style.display = 'none';
		invalidEmail.style.display = 'none';
		emailBool = true;
	}
//Проверка введенных данных в поле “Пароль” 
    let passwordBool = false;

	if (inputPassword.value === '' || inputPassword.value.length < 8) {
		inputPassword.style.border = "2px solid red";
		if (inputPassword.value === '') {
			passwordMandatory.style.display = 'contents';
		} else if (inputPassword.value.length < 8) {
			lengthPassword.style.display = 'contents';
		} 
		starPassword.style.color = 'red';
		labelPassword.style.color = 'red';
		checkboxLogin.style.margin = '6px 45px 0 45px';
		passwordBool = false;
	} else {
		inputPassword.style.border = "2px solid #787878";
		passwordMandatory.style.display = 'none';
		lengthPassword.style.displsy = 'none';
		starPassword.style.color = '#787878';
		labelPassword.style.color = '#787878'
		checkboxLogin.style.margin = '16px 45px 0 45px';
		passwordBool = true;
	}
//Проверка чекбокса
    let checkboxBool = false;

	if (document.getElementById('checkbox-input').checked === false) {
		inputCheckboxCustom.style.border = "2px solid red";
		starCheckbox.style.color = 'red';
		checkboxMandatory.style.display = 'contents';
		checkboxBool = false;
	} else {
		inputCheckboxCustom.style.border = "2px solid #787878";
		starCheckbox.style.color = '#787878';
		checkboxMandatory.style.display = 'none';
		checkboxBool = true;
	}
//Вывод данных в консоль
	if (emailBool && passwordBool && checkboxBool) {
		console.log(`Email:${inputEmail.value}`)
        console.log(`Password:${inputPassword.value}`)
	}
    
	event.preventDefault();
});
