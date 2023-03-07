'use strict'

function print(text){
    document.write(`<div>${text}</div>`);
}

const getAccumulatedIncome = (money, extraMoney, amount) => (money + extraMoney) - amount;

const getTargetMonth = (accumulatedIncome, purpose) => Math.ceil(purpose / accumulatedIncome);

const monthToYear = (month) => {
    if (month < 12) return `${month} месяцев`;
    else {
        const years = Math.floor(month / 12);
        const monthRest = month - years * 12;

        return `${years} лет и ${monthRest} месяцев`;
    }
};

const getBudgetPerDay = (accumulatedIncome) => Math.floor(accumulatedIncome / 30);

const init = () => {
//Месячный доход
let money = Number.parseFloat(prompt('Ваш месячный доход?'));

while (isNaN(money)) { 
    alert("Это не число"); 
    money = Number.parseFloat(prompt('Ваш месячный доход?'));
};
print(`Месячный доход ${money} ₽`);

//Дополнительный доход
let extraMoney = Number.parseFloat(prompt('Ваш дополнительный доход?')); 

while (isNaN(extraMoney)) { 
    alert("Это не число"); 
    extraMoney = Number.parseFloat(prompt('Ваш дополнительный доход?'));
};
print(`Дополнительный доход ${extraMoney} ₽`);

//Расходы
let expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
print(`Расходы: ${expenses}`);

//Сумма расходов
let amount = Number.parseFloat(prompt('Во сколько обойдуться обязательные статьи расходов?'));

while (isNaN(amount)) { 
    alert("Это не число"); 
    amount = Number.parseFloat(prompt('Во сколько обойдуться обязательные статьи расходов?'));
};
print(`Сумма расходов: ${amount} ₽`);

//Целевая сумма
let purpose = Number.parseFloat(prompt('Введите сумму которую желаете накопить?')); 

while (isNaN(purpose)) { 
    alert("Это не число"); 
    purpose = Number.parseFloat(prompt('Введите сумму которую желаете накопить?'));
};
print(`Целевая сумма: ${purpose} ₽`);

const accumulatedIncome = getAccumulatedIncome (money, extraMoney, amount);

const targetMonth = getTargetMonth (accumulatedIncome, purpose);

if (targetMonth > 0) {
    print(`Нужная сумма будет накоплена через ${monthToYear(targetMonth)}`);
} else if (targetMonth < 0) {
    print(`Цель не будет достигнута`);
};

const budgetPerDay = getBudgetPerDay(accumulatedIncome);

if (budgetPerDay >= 6000){
    print('У вас высокий уровень дохода');
}  else if (budgetPerDay >= 3000 && budgetPerDay < 6000) {
    print('У вас средний уровень дохода');
} else if (budgetPerDay >= 0 && budgetPerDay < 3000) {
    print('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetPerDay < 0) {
    print('Что то пошло не так');
}
};

