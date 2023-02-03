'use strict'

const money = 50000;

const profit = 'Фриланс';

const expenses = `Квартплата, Питание, Бензин`;

const purpose = 100000;

const period = 5;

console.log(typeof money);
console.log(typeof profit);

console.log(expenses.length);

console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${purpose} рублей`);

const budgetDay = money / 30;
console.log(`${ Math.floor(budgetDay) }`);
