// 'use strict'
// console.log('-----------');
// console.log('-----Варинт № 1-----');
// console.log('-----------');

// // Получение данных
// let post = fetch('https://reqres.in/api/users?per_page=12');
// post.then((response) => {
//   return response.json()
// }).then((result) => {
//   console.log('result', result);

//   console.log('-----------');
//   console.log('-----Фамилии всех пользователей-----');
//   console.log('-----------');

// //Фамилии всех пользователей
//   result.data.forEach(element => {
//     console.log(element.last_name)
//   }); 

//   console.log('-----------');
//   console.log('-----Данные пользователей, фамилия которых начинается на F-----');
//   console.log('-----------');

// // Данные пользователей, фамилия которых начинается на F
//   result.data.filter(item=>item.last_name.startsWith('F')).forEach(element => {
//     console.log(`Имя: ${element.first_name}`); 
//     console.log(`Фамилия: ${element.last_name}`); 
//     console.log(`Почта: ${element.email}`); 
//     console.log(`ID: ${element.id}`); 
//     console.log(`Аватар: ${element.avatar}`);
//   });

// // Метод reduce
//   console.log('-----------');
//   console.log('-----Метод reduce-----');
//   console.log('-----------');

//   console.log(result.data.reduce((acc, item) => acc + item.first_name + " " + item.last_name +', ', "Наша база содержит данные следующих пользователей:"));
  
//   console.log('-----------');
//   console.log('-----Ключи каждого пользователя-----');
//   console.log('-----------');

// // Ключи каждого пользователя 
//   Object.keys(result).forEach(element=>
//     console.log(element)
//   );

// });

// console.log('post', post);

console.log('-----------');
console.log('-----Варинт № 2-----');
console.log('-----------');

// Получение данных
const getUsers = () => {
  const url = 'https://reqres.in/api/users?per_page=12';

  return fetch(url)
    .then(response => response.json())
}

// //Фамилии всех пользователей
const printSurnames = (users) => {
  users.forEach(({last_name: surname}) => console.log(surname))
  
  return users
}

// Данные пользователей, фамилия которых начинается на F
const printUserWithSurnameStartsF = (users) => {
  users.filter(({last_name: surname}) => surname.startsWith('F'))
    .forEach(user => console.log(user))
  
  return users
}

const printDatabase = (users) => {
  const result = users.map(({first_name: name, last_name: surname}) => `${surname} ${name}`)
    .join(', ');

  console.log(`Наша база содержит данные следующих пользователей: ${result}`)

    return users[0]
}
// Метод reduce
// const printDatabase = (users) => {
//   const result = users.reduce((string, {first_name, last_name}) =>{
//     return string.concat(`${surname} ${name}, `)

//   }, 'Наша база содержит данные следующих пользователей: ')
//     .trimEnd()
//     .slice(0, -1)

//     console.log(result);

//     return users[0]

// }

// Ключи каждого пользователя
const printKeys = (user) => {
  Object.keys(user).forEach(key => console.log(key))
}

//Вывод данных
getUsers()
    .then(({data: users}) => users)
    .then(printSurnames)
    .then(printUserWithSurnameStartsF)
    .then(printDatabase)
    .then(printKeys)
