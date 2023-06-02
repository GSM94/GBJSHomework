/*
Дан объект numbers. 
Необходимо в консоль вывести все значения объекта, которые больше или равны 3.
*/
const message = 'Homework 5';
console.log(message.padStart(50, '-').padEnd(100, '-'));
console.log('');
console.log('1. Задание');
const numbers = {
  key1: 12,
  key2: 2,
  key3: 4,
  key4: 1,
  key5: -244,
  key6: 0,
  key7: 7,
};

for (const key in numbers) {
  // console.log(numbers[key]);
  if (numbers[key] > 3) {
    console.log(numbers[key]);
  }
}