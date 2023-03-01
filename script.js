'use strict'

//генерируем случайное число из диапазона [0, 1]
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//проверка форматa ответов в текстовом поле
const validateAnswer = (answer) => {
    if (answer === '') alert('Необходимо ввести число!');
    else if (isNaN(answer)) alert('Введите число!');
    else return true;
};

const start = () => {
    const MIN_VALUE = 1;
    const MAX_VALUE = 10;
// //количество попыток
    const ATTEMPTS_COUNT = 5;

    let attemptsLeft = ATTEMPTS_COUNT;

    const searchNumber = getRandomNumber(MIN_VALUE, MAX_VALUE);
    console.log(searchNumber);

    const loop = () => {
        if (attemptsLeft === 0) {
            const runAgain = confirm('Попытки кончились :( Хотите сыграть еще раз?');
            //окно с текстом и кнопками «Ок» и «Отмена».

            if (runAgain) start ();
            else alert('Игра окончена!');
            return;
        }
        
        // ответ пользователя
        const userAnswer = prompt(`Компьютер загадал число от ${MIN_VALUE} до ${MAX_VALUE}. Ваша задача угадать его за ${attemptsLeft} попыток`);
        
        if (userAnswer === null) {
            alert('Игра окончена!');
            return;
        }

        if (validateAnswer(userAnswer)) {
            const answer = Number.parseInt(userAnswer);
            if (answer > searchNumber) {
                attemptsLeft--;
                alert(`Вы ввели число больше! Попыток осталось: ${attemptsLeft}`);
                loop();
            } else if (answer < searchNumber) {
                attemptsLeft--;
                alert(`Вы ввели число меньше! Попыток осталось: ${attemptsLeft}`);
                loop();
            } else if (answer === searchNumber) {
                const runAgain = confirm(`Вы угадали с ${ATTEMPTS_COUNT - attemptsLeft + 1} раза! Хотите сыграть еще раз?`);
                if (runAgain) start();
                else alert('Игра окончена!');
            }
        } else loop();
    };

    loop();
};