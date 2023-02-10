'use strict'

const oneNumber = Number.parseFloat(prompt('Введите первое число'));
const twoNumber = Number.parseFloat(prompt('Введите второе число'));

console.log(oneNumber, twoNumber);

let result1 = oneNumber + twoNumber;
console.log(`При сложении чисел: ${result1.toFixed(1)}`);

let result2 = oneNumber - twoNumber;
console.log(`При вычитании чисел: ${result2.toFixed(1)}`);

let result3 = oneNumber / twoNumber;
console.log(`При делении чисел: ${result3.toFixed(1)}`);

let result4 = oneNumber * twoNumber;
console.log(`При умножении чисел: ${result4.toFixed(1)}`);

let result5 = oneNumber % twoNumber;
console.log(`Остаток от деления: ${result5.toFixed(1)}`);