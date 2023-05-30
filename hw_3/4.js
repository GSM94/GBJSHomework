
"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

// Здесь пишем решение, данный комментарий необходимо стереть.

const sumNumber = function () {
  const num1 = +prompt("Enter first number");
  const num2 = +prompt("Enter second number");
  if (!Number.isFinite(num1) && !Number.isFinite(num1)) {
    alert("Please, enter type number!");
    console.log("Please, enter type number!");
  } else {
    alert(`Result of summation: ${num1 + num2}`);
    console.log(`Result of summation: ${num1 + num2}`);
  }
};

const difference = function () {
  const num1 = +prompt("Enter first number");
  const num2 = +prompt("Enter second number");
  let dif = 0;
  if (num1 > num2) {
    dif = num1 - num2;
  } else {
    dif = num2 - num1;
  } 
  if (!Number.isFinite(num1) && !Number.isFinite(num1)) {
    alert("Please, enter type number!");
    console.log("Please, enter type number!");
  } else {
    alert(`Result of defference: ${dif}`);
    console.log(`Result of defference: ${dif}`);
  }
};

const multiplication = function () {
  const num1 = +prompt("Enter first number");
  const num2 = +prompt("Enter second number");
  if (!Number.isFinite(num1) && !Number.isFinite(num1)) {
    alert("Please, enter type number!");
    console.log("Please, enter type number!");
  } else {
    alert(`Result of multiplication: ${num1 * num2}`);
    console.log(`Result of multiplication: ${num1 * num2}`);
  }
};

const division = function () {
  const num1 = +prompt("Enter first number");
  const num2 = +prompt("Enter second number");
  if (!Number.isFinite(num1) && !Number.isFinite(num1)) {
    alert("Please, enter type number!");
    console.log("Please, enter type number!");
  } else {
    alert(`Result of division: ${num1 / num2}`);
    console.log(`Result of division: ${num1 / num2}`);
  }
};

// sumNumber();
// difference();
// multiplication();
// division();

document.querySelector("#sum").addEventListener("click", sumNumber);
document.querySelector("#dif").addEventListener("click", difference);
document.querySelector("#mult").addEventListener("click", multiplication);
document.querySelector("#div").addEventListener("click", division);
