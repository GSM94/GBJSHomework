"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*

1. Найти по id, используя getElementById, элемент с id равным "super_link" и
вывести этот элемент в консоль.
*/
const message = 'Homework 6';
console.log(message.padStart(50, '-').padEnd(100, '-'));
console.log('');
console.log('1. Задание');

const superLink = document.getElementById("super_link");
console.log(document.getElementById("super_link"));
console.log(superLink.textContent);
/*
2. Внутри всех элементов на странице, которые имеют класс "card-link",
поменяйте текст внутри элемента на "ссылка".
*/
console.log('');
console.log('2. Задание');

const text = 'ссылка'
const link = document.querySelectorAll('.card-link');
for (let i = 0; i < link.length; i++) {
 link[i].textContent = text;
} 
console.log('В html у элементов с классом card-link заменили текст на "ссылка"');


/*
3. Найти все элементы на странице с классом "card-link", которые лежат в
элементе с классом "card-body" и вывести полученную коллекцию в консоль.
*/
console.log('');
console.log('3. Задание');

const cardBody = document.querySelectorAll('.card-body .card-link');
// console.log(cardBody);
for (let i = 0; i < cardBody.length; i++) {
  console.log(cardBody[i]);
}
/*
4. Найти первый попавшийся элемент на странице у которого есть атрибут
data-number со значением 50 и вывести его в консоль.
*/
console.log('');
console.log('4. Задание');

console.log(document.querySelector('[data-number="50"]'));

/*
5. Выведите содержимое title страницы в консоль.
*/
console.log('');
console.log('5. Задание');

console.log(document.querySelector('title').textContent);

/*
6. Получите элемент с классом "card-title" и выведите его родительский узел
в консоль.
*/
console.log('');
console.log('6. Задание');

const cardTitleEl = document.querySelector('.card-title').parentNode;
console.log(cardTitleEl);


/*
7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный
тег в начало элемента, который имеет класс "card".
*/
console.log('');
console.log('7. Задание');

const pEl = document.createElement('p');
pEl.textContent = 'Привет';
document.querySelector('.card').prepend(pEl);
console.log('текст "Привет" в html');

/*
8. Удалите тег h6 на странице.
*/
console.log('');
console.log('8. Задание');

document.querySelector('h6').remove();
console.log('Удален тег h6');

