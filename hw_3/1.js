"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/
// 1. по заданию
// const getCube = function(num) {
//   return Math.pow(num, 3);
// }
// console.log(getCube(prompt('Enter number')));

// 2. with DOM

const makeCube = function() {
  const cube = prompt('Enter number')
  alert(`Cube of number ${cube} is ${Math.pow(cube, 3)}`);
  console.log(`Cube of number ${cube} is ${Math.pow(cube, 3)}`);
}
document.querySelector("#cube").addEventListener("click", makeCube);
// Здесь пишем решение, данный комментарий необходимо стереть.
