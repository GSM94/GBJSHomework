
"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const enterNumber = function () {
  const userNumber1 = +prompt("Enter first number");
  const userNumber2 = +prompt("Enter second number");
  const userNumber3 = +prompt("Enter third number");
  return [userNumber1, userNumber2, userNumber3];
};

// 1. if() statement
// const maxValue = function (...[nums]) {
//   const num1 = nums[0];
//   const num2 = nums[1];
//   const num3 = nums[2];

//   if (num1 >= num2 && num1 >= num3) {
//     console.log(
//       `Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${num1}.`
//     );
//     alert(`Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${num1}.`)
//   }
//   if (num2 > num1 && num2 >= num3) {
//     console.log(
//       `Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${num2}.`
//     );
//     alert(`Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${num2}.`)
//   }
//   if (num3 > num1 && num3 > num2) {
//     console.log(
//       `Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${num3}.`
//     );
//     alert(`Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${num3}.`)
//   }
// };

// maxValue(enterNumber(...[]));

// 2. with DOM
const maxNumberWithArray = function () {
  const nums = (enterNumber());
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
  if (nums[i] > nums[0]) {
    max = nums[i];
  }
  }
  alert(
    `Максимальное значение среди чисел ${nums.join(', ')} равно ${max}.`
  );
  console.log(
    `Максимальное значение среди чисел ${nums.join(', ')} равно ${max}.`
  );
};

// maxNumberWithArray();

document.querySelector("#max").addEventListener("click", maxNumberWithArray);
