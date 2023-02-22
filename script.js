'use strict'

const days = ['Sunday', 'Monday', 'Tuesday ', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const weekendDayIndex = [0, 6];
const currentDayIndex = new Date().getDay();

function printDay(day, index) {
    const classes =`text ${currentDayIndex === index ? 'italic' : ''} ${weekendDayIndex.includes(index) ? 'bold' : '' }`

    document.writeln(`<div class='${classes}'> ${day} </div>`)
}

days.forEach(printDay);

// for (let i=0; i < days.length; i++) {
//     printDay(i);
// }

let arr = ['42', '351543', '76534', '249', '318567', '7659', '565678'];
console.log(arr);

for (let i = 0; i < 7; i++) {
    if (arr[i].startsWith('3') || arr[i].startsWith('7')) {
    console.log(arr[i]);
    }
};