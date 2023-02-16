'use strict'

const money = Number.parseFloat(prompt('Ваш месячный доход?')); 
document.write(`Месячный доход ${money} ₽`);

document.write("<br \/>");

const expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
document.write(`Расходы: ${expenses}`);

document.write("<br \/>");

const amount = Number.parseFloat(prompt('Во сколько обойдуться обязательные статьи расходов?'));
document.write(`Сумма расходов: ${amount} ₽`);

document.write("<br \/>");

const purpose = Number.parseFloat(prompt('Введите сумму которую желаете накопить?')); 
document.write(`Целевая сумма: ${purpose} ₽`);

const deposit = confirm('Есть ли у вас вклад в банке?');
console.log(deposit);

const budgetMonth = money-amount;
console.log(`Бюджет на месяц: ${budgetMonth} ₽`);

const budgetDay = budgetMonth / 30;
console.log(`Бюджет на день: ${ Math.floor(budgetDay) } ₽`);

const period = purpose / budgetMonth;
console.log(`Cрок накопления: ${ Math.ceil(period) } мес.`);

    if (budgetDay > 6000){
        console.log('У вас высокий уровень дохода');
    } if (6000 > budgetDay > 3000){
        console.log('У вас средний уровень дохода');
    } if (3000 > budgetDay > 0){
        console.log('К сожалению у вас уровень дохода ниже среднего');
    } if (budgetDay < 0){
        console.log('Что то пошло не так');
    }