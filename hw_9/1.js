'use strict';

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. При изменении значения в input с id="from", значение содержащееся в нем
должно моментально отображаться в span. То есть при печати в input'е тег span
также должен меняться.
*/
const fromEl = document.querySelector('#from');
const spanEl = document.querySelector('span');
fromEl.addEventListener('input', () => {
  spanEl.textContent = fromEl.value;
});

/*
2. При клике на кнопку с классом messageBtn необходимо элементу с классом
message:
1) добавить два класса: animate__animated и animate__fadeInLeftBig
2) поставить данному элементу стиль visibility в значение 'visible'.
*/

// const messageBtnEl = document.querySelector('.messageBtn');
const messageEl = document.querySelector('.message');
document.querySelector('.messageBtn').addEventListener('click', () => {
  messageEl.classList.add('animate__animated', 'animate__fadeInLeftBig');
  messageEl.style.visibility = 'visible';
});
/*
3. Необходимо при отправке формы проверить, заполнены ли все поля в этой
форме. Если какое-либо поле не заполнено, форма не должна отправляться, также
должны быть подсвечены незаполненные поля (необходимо поставить класс error
незаполненным полям).
Как только пользователь начинает заполнять какое-либо поле, необходимо,
при вводе в данное поле, произвести проверку:
Если поле пустое, необходимо данное поле подсветить (поставить класс error
данному полю).
Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
*/

const formEl = document.querySelector('form');
const formControl = document.querySelectorAll('.form-control');

formEl.addEventListener('submit', (e) => {
  formControl.forEach((element) => {
    if (element.value === '') {
      element.classList.add('error');
      e.preventDefault();
    }
  });
});
formControl.forEach((element) => {
  element.addEventListener('input', (e) => {
    if (!e.target.classList.contains('form-control')) {
      return;
    }
    e.target.value === ''
      ? e.target.classList.add('error')
      : e.target.classList.remove('error');
  });
});

// formEl.addEventListener('input', e => {
//   if (!e.target.classList.contains('form-control')) {
//     return;
//   }
//   e.target.value === ''
//     ? e.target.classList.add('error')
//     : e.target.classList.remove('error');
// });
