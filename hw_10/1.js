"use strict";

/*
Необходимо найти любой бесплатный api в интернете на произвольную тему, 
из которого нужно будет получить данные и сохранить их в файл data.js,
который необходимо создать рядом с текущим html-файлом. Внутри файла data.js 
создайте переменную, которая будет хранить данные из публичного api. Данные 
из api необходимо просто скопировать и вставить как значение данной переменной.
Минимальный набор данных, который нас интересует в api: загловок, картинка, 
параграф.

Создайте еще один файл main.js, в котором необходимо из значений переменной, 
которая создана в файле data.js, сформировать контент из данных.
Добавить данный контент на сайт, в div с классом app.

Можете добавить стили, если есть желание (не обязательно).
*/
const dataUsers = JSON.parse(data);
console.log(dataUsers);

const appEl = document.querySelector('.app');
const contentEl = document.createElement('div');
contentEl.classList.add('content');
appEl.append(contentEl);

const h1El = document.createElement('h1');
contentEl.classList.add('h1el');
contentEl.before(h1El);
h1El.textContent = 'Котики';


let content = "";

dataUsers.results.forEach((cat) => {
  content += `
    <div class="card-character">
        <img
          class="photo-person"
          src="${cat.image}"
        />
        <h2 class="name-character">${cat.name}</h2>
        <div class="description">
          <h3>${cat.city}</h3>
          <h3>${cat.gender}</h3>
        </div>
    </div>
      `;
});

contentEl.innerHTML = content;



