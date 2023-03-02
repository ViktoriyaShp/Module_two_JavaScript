'use strict'

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
//суммирование всех зарплат
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
};

console.log(`Cуммa всех зарплат ${sum}`);

let studentScores = {
    Коля: '99',
    Вася: '35',
    Петя: '70',
    Таня: '95',
    Оля: '50',
    Саша: '20'
};

let key = 0;
for (key in studentScores) {
    if (+studentScores[key] < 80) {
        console.log(`Студент ${key} не проходит отбор`);
        delete studentScores[key];
    }
};

console.log(studentScores);