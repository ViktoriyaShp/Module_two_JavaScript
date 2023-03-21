'use strict'

let money = document.querySelector('#income');
money.addEventListener('input', (e) => {money = Number.parseFloat(e.target.value);console.log(e.target.value);});

let profit = document.querySelector('#additionalIncome');
profit.addEventListener('input', (e) => {profit = String(e.target.value);console.log(e.target.value);});

let extraMoney = document.querySelector('#sumAdditionalIncome');
extraMoney.addEventListener('input', (e) => {extraMoney = Number.parseFloat(e.target.value);console.log(e.target.value);});

let expenses = document.querySelector('#expenses');
expenses.addEventListener('input', (e) => {expenses = String(e.target.value);console.log(e.target.value);});

let amount = 10000 // расходы

let purpose = document.querySelector('#savings');
purpose.addEventListener('input', (e) => {purpose = Number.parseFloat(e.target.value);console.log(e.target.value);});

let period = document.querySelector('#period');
period.addEventListener('input', (e) => {period = Number.parseFloat(e.target.value);console.log(e.target.value);});

let deposit = true

btn.addEventListener('click',(e) => {
  
let getAccumulatedIncome = (money, extraMoney, amount) => (money  + extraMoney) - amount;


let getTargetMonth = (accumulatedIncome, purpose) => Math.ceil(purpose  / accumulatedIncome);

let getBudgetPerDay = (accumulatedIncome) => Math.floor(accumulatedIncome  / 30);
// document.getElementById('sumMoneyDay').innerHTML = getBudgetPerDay;

let accumulatedIncome = getAccumulatedIncome (money, extraMoney, amount);
document.getElementById('sumMoney').innerHTML = accumulatedIncome;

let targetMonth = getTargetMonth (accumulatedIncome, purpose);
document.getElementById('purpose').innerHTML = targetMonth;

let budgetPerDay = getBudgetPerDay(accumulatedIncome);
document.getElementById('sumMoneyDay').innerHTML = budgetPerDay;

document.getElementById('sumMoneyPurpose').innerHTML = purpose;

if (budgetPerDay >= 6000){
    document.getElementById("incomeLevel").textContent = 'У вас высокий уровень дохода';
}  else if (budgetPerDay >= 3000 && budgetPerDay < 6000) {
    document.getElementById("incomeLevel").textContent = 'У вас средний уровень дохода';
} else if (budgetPerDay >= 0 && budgetPerDay < 3000) {
  document.getElementById("incomeLevel").textContent = 'К сожалению у вас уровень дохода ниже среднего';
} else if (budgetPerDay < 0) {
  document.getElementById("incomeLevel").textContent = 'Что то пошло не так';
};

  console.log('Ваш бюджет на месяц с учетом ваших расходов составляет: ', accumulatedIncome);
  console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через`, targetMonth + ' месяца');
  console.log('Дневной бюджет', budgetPerDay);
});