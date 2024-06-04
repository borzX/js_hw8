/* +++ Задание 1 +++ */

// let numLength = 10

// for (let i = 0; i <= numLength; i++) {
//   if (i === 0) {
//     console.log(`${i} - это ноль`)
//     continue  
//   }
//   if (i % 2 === 1) {
//     console.log(`${i} - не четное число`)    
//   }
//   if (i % 2 === 0) {
//     console.log(`${i} - четное число`)
//   }  
// }


/* +++ Задание 2 +++ */

// const arr = [1, 2, 3, 4, 5, 6, 7]

// arr.splice(3, 2)
// console.log(arr);


/* +++ Задание 3 +++ */

// const arr = []
// let arrLength = 5
// let arrElementSum = 0
// let arrElementMin = 10
// let statys = 'Нет'

// for (let i = 0; i < arrLength; i++) {
//   let arrElement = getRandomInt(0, 10)
//   arr.push(arrElement)
//   console.log(arrElement);
//   arrElementSum = arrElementSum + arrElement
//   if (arrElement < arrElementMin) {
//     arrElementMin = arrElement
//   }
//   if (arr[i] === 3) {
//     statys = 'Да'
//   }
// }

// console.log(arr);
// console.log(`Сумма всех элементов массива: ${arrElementSum}`)
// console.log(`Наминимальное число: ${arrElementMin}`);
// console.log(`Массив содержит число "3"?: ${statys}`);

// function getRandomInt(min, max) {// Максимум не включается, минимум включается
//   min = Math.ceil(0);
//   max = Math.floor(10);
//   return Math.floor(Math.random() * (max - min) + min); 
// }


/* +++ Задание 4 +++ */

// const arrHash = []
// const arrHashLenght = 20

// for (let i = 0; i < arrHashLenght; i++) {
//   arrHash.push('x')
//   console.log(arrHash.join(''));  
// }
