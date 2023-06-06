// Todo скролл 

const toSuculent = document.querySelector('#to-suculent');

toSuculent.addEventListener('click', (event) => {
  event.preventDefault();
  
  const targetElement = document.querySelector('.suculent-link');
  targetElement.scrollIntoView({ behavior: 'smooth' });
});


const toExotic = document.querySelector('#to-exotic');

toExotic.addEventListener('click', (event) => {
  event.preventDefault();
  
  const targetElement2 = document.querySelector('.exotic-link');
  targetElement2.scrollIntoView({ behavior: 'smooth' });
});

const toLevitation = document.querySelector('#to-levitation');

toLevitation.addEventListener('click', (event) => {
  event.preventDefault();
  
  const targetElement3 = document.querySelector('.levitation-link');
  targetElement3.scrollIntoView({ behavior: 'smooth' });
});

const toPotter = document.querySelector('#to-potter');

toPotter.addEventListener('click', (event) => {
  event.preventDefault();
  
  const targetElement4 = document.querySelector('.potter-link');
  targetElement4.scrollIntoView({ behavior: 'smooth' });
});

const toPalms = document.querySelector('#to-palms');

toPalms.addEventListener('click', (event) => {
  event.preventDefault();
  
  const targetElement5 = document.querySelector('.palms-link');
  targetElement5.scrollIntoView({ behavior: 'smooth' });
});


// Todo корзина 


const cardAddArr = Array.from(document.querySelectorAll(".card__add"));
const cartNum = document.querySelector("#cart_num");
const cart = document.querySelector("#cart");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector("#popup_close");
const body = document.body;
const popupContainer = document.querySelector("#popup_container");
const popupProductList = document.querySelector("#popup_product_list");
const popupCost = document.querySelector("#popup_cost");
const popupDiscount = document.querySelector("#popup_discount");
const popupCostDiscount = document.querySelector("#popup_cost_discount");



function toNum(str) {
    const num = Number(str.replace(/ /g, ""));
    return num;
  }
  
  function toCurrency(num) {
    const format = new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
    }).format(num);
    return format;
  }

  cart.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.add("popup--open");
    body.classList.add("lock");
  });
  
  popupClose.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.remove("popup--open");
    body.classList.remove("lock");
  });


   

// Todo динамичное изменение корзины при помощи jQuerry

// $(document).ready(function() {
//   $('.market').click(function() {
//     $('.almost-wrapper').append(`
//       <div class="popup__item" id="popup_product_list">
//         <div class="popup__product">
//           <div class="popup__product-wrap">
//             <img src="./img/succulent.jpg" alt="Apple IPhone 14 Pro Max 256Gb" class="popup__product-image" />
//             <h2 class="popup__product-title">Цветочек домашний</h2>
//           </div>
//           <div class="popup__product-wrap">
//             <div class="popup__quantity">
//               <button class="popup__quantity-plus">+</button>
//               <h1 class="popup__quantity-result">1</h1>
//               <button class="popup__quantity-minus">-</button>
//             </div>
//             <div class="popup__product-price">500</div>
//             <button class="popup__product-delete">✖</button>
//           </div>
//         </div>
//       </div>
//     `);

//     //! счётчик
//     const cartNumElement = document.querySelector("#cart_num");
//     cartNumElement.innerText = parseInt(cartNumElement.innerText) + 1;

//     updateTotalCost();
//   });

//   //! выполнение
//   $(document).on("click", ".popup__product-delete", function() {
//     $(this).closest(".popup__item").remove();

//     //! счётчик
//     const cartNumElement = document.querySelector("#cart_num");
//     cartNumElement.innerText = parseInt(cartNumElement.innerText) - 1;

//     updateTotalCost();
//   });

//   //! изменение значения при клике на плюс
//   $(document).on("click", ".popup__quantity-plus", function() {
//     const quantityElement = $(this).siblings(".popup__quantity-result");
//     let quantity = parseInt(quantityElement.text());
//     quantityElement.text(quantity + 1);

//     const priceElement = $(this).closest(".popup__product-wrap").find(".popup__product-price");
//     let price = parseInt(priceElement.text());
//     priceElement.text(price * (quantity + 1));

//     updateTotalCost();
//   });

//   //! изменение значения при клике на минус
//   $(document).on("click", ".popup__quantity-minus", function() {
//     const quantityElement = $(this).siblings(".popup__quantity-result");
//     let quantity = parseInt(quantityElement.text());
//     if (quantity > 1) {
//       quantityElement.text(quantity - 1);

//       const priceElement = $(this).closest(".popup__product-wrap").find(".popup__product-price");
//       let price = parseInt(priceElement.text());
//       priceElement.text(price / (quantity - 1));

//       updateTotalCost();
//     }
//   });

//   function updateTotalCost() {
//     let totalCost = 0;
//     $(".popup__product-price").each(function() {
//       totalCost += parseInt($(this).text());
//     });
//     $(".popup__cost-value").text(totalCost);
//   }

//   // Изначальное значение popup__product-price умножается на popup__quantity-result
//   const initialPrice = parseInt($(".popup__product-price").text());
//   const initialQuantity = parseInt($(".popup__quantity-result").text());
//   $(".popup__product-price").text(initialPrice * initialQuantity);

//   updateTotalCost();
// });


$(document).ready(function() {
  $('.market').click(function() {
    $('.almost-wrapper').append(`
      <div class="popup__item" id="popup_product_list">
        <div class="popup__product">
          <div class="popup__product-wrap">
            <img src="./img/succulent.jpg" alt="Apple IPhone 14 Pro Max 256Gb" class="popup__product-image" />
            <h2 class="popup__product-title">Цветочек домашний</h2>
          </div>
          <div class="popup__product-wrap">
            <div class="popup__quantity">
              <button class="popup__quantity-plus">+</button>
              <h1 class="popup__quantity-result">1</h1>
              <button class="popup__quantity-minus">-</button>
            </div>
            <div class="popup__product-price">500</div>
            <button class="popup__product-delete">✖</button>
          </div>
        </div>
      </div>
    `);

    //! счётчик
    const cartNumElement = document.querySelector("#cart_num");
    cartNumElement.innerText = parseInt(cartNumElement.innerText) + 1;

    updateTotalCost();
  });

  //! выполнение
  $(document).on("click", ".popup__product-delete", function() {
    $(this).closest(".popup__item").remove();

    //! счётчик
    const cartNumElement = document.querySelector("#cart_num");
    cartNumElement.innerText = parseInt(cartNumElement.innerText) - 1;

    updateTotalCost();
  });

  //! изменение значения при клике на плюс
  $(document).on("click", ".popup__quantity-plus", function() {
    const quantityElement = $(this).siblings(".popup__quantity-result");
    let quantity = parseInt(quantityElement.text());
    quantityElement.text(quantity + 1);

    const priceElement = $(this).closest(".popup__product-wrap").find(".popup__product-price");
    const initialPrice = 500; // Set the initial price value (500 in this case)
    priceElement.text(initialPrice * (quantity + 1));

    updateTotalCost();
  });

  //! изменение значения при клике на минус
  $(document).on("click", ".popup__quantity-minus", function() {
    const quantityElement = $(this).siblings(".popup__quantity-result");
    let quantity = parseInt(quantityElement.text());
    if (quantity > 1) {
      quantityElement.text(quantity - 1);

      const priceElement = $(this).closest(".popup__product-wrap").find(".popup__product-price");
      const initialPrice = 500; // Set the initial price value (500 in this case)
      priceElement.text(parseInt(priceElement.text()) - initialPrice);

      updateTotalCost();
    }
  });

  function updateTotalCost() {
    let totalCost = 0;
    $(".popup__product-price").each(function() {
      totalCost += parseInt($(this).text());
    });
    $(".popup__cost-value").text(totalCost);
  }

  // Set the initial total cost based on the initial price and quantity
  const initialPrice = 500; // Set the initial price value (500 in this case)
  const initialQuantity = parseInt($(".popup__quantity-result").text());
  $(".popup__product-price").text(initialPrice * initialQuantity);

  updateTotalCost();
});








// <div class="popup__item" id="popup_product_list">
//                     <div class="popup__product">
//                     <div class="popup__product-wrap">
//                         <img
//                         src="./img/succulent.jpg"
//                         alt="Apple IPhone 14 Pro Max 256Gb"
//                         class="popup__product-image"
//                         />
//                         <h2 class="popup__product-title">
//                         Цветочек домашний
//                         </h2>
//                     </div>
//                     <div class="popup__product-wrap">
//                         <div class="popup__quantity"><button>+</button><h1>1</h1><button>-</button></div>
//                         <div class="popup__product-price">135000</div>
//                         <button class="popup__product-delete">✖</button>
//                     </div>
//                     </div>
//                 </div>



