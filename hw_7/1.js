'use strict';

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс
"super-dropdown", необходимо использовать методы forEach, querySelectorAll и
свойство classList у элементов.
*/

const dropdownItem = document.querySelectorAll('.dropdown-item');
dropdownItem.forEach((element) => element.classList.add('super-dropdown'));

/*
2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он
присутствует у этого элемента, либо добавить, если такого класса у элемента
не было.
*/
const removeBtn = document.querySelector('.btn');
removeBtn.classList.toggle('btn-secondary');

/*
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого
присутствует класс "menu".
*/
document.querySelector('.menu').classList.remove('dropdown-menu');

/*
4. Используя метод insertAdjacentHTML добавьте после div'a с классом
"dropdown" следующую разметку:
  <a href="#">link</a>
*/
const dropdown = document.querySelector('div.dropdown');
dropdown.insertAdjacentHTML('afterend', '<a href="#">link</a>');

/*
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
*/
document.querySelector('#dropdownMenuButton').id = 'superDropdown';

/*
6. Добавьте атрибут data-dd со значением 3 элементу у которого существует
атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
*/
document.querySelector('[aria-labelledby="dropdownMenuButton"]').dataset.dd = 3;

/*
7. Удалите атрибут type у элемента с классом "dropdown-toggle".
*/
document.querySelector('.dropdown-toggle').removeAttribute('type');
