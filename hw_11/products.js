'use strict';

const product = JSON.parse(json);
console.log(product);

const featuredItems = document.querySelector('.featuredItems');

let content = '';
product.goods.forEach((data) => {
  content += `
  <div class="featuredItem">
          <div class="featuredImgWrap">
              <img src="${data.img}" alt="${data.name}">
              <div class="featuredImgDark">
                  <button class="addToCart" data-id="${data.id}">
                      <img src="images/cart.svg" alt="">
                      Add to Cart
                  </button>
              </div>
          </div>
          <div class="featuredData">
              <div class="featuredName">
                  ${data.name}
              </div>
              <div class="featuredText">
                  ${data.description}
              </div>
              <div class="featuredPrice">
                  ${data.price} руб.
              </div>
          </div>
      </div>
  `;
});

featuredItems.innerHTML = content;


