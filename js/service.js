let deliveryButton = document.querySelector(".delivery-button");
let garantyButton = document.querySelector(".garanty-button");
let creditButton = document.querySelector(".credit-button");
let delivery = document.querySelector(".delivery");
let garanty = document.querySelector(".garanty");
let credit = document.querySelector(".credit");


deliveryButton.addEventListener('click', function () {        
    deliveryButton.classList.add('service__active');
    garantyButton.classList.remove('service__active');
    creditButton.classList.remove('service__active');
    delivery.style.display = "block";
    garanty.style.display = "none";
    credit.style.display = "none";
});


garantyButton.addEventListener('click', function () {        
    deliveryButton.classList.remove('service__active');
    garantyButton.classList.add('service__active');
    creditButton.classList.remove('service__active');
    delivery.style.display = "none";
    garanty.style.display = "block";
    credit.style.display = "none";
});


creditButton.addEventListener('click', function () {        
    deliveryButton.classList.remove('service__active');
    garantyButton.classList.remove('service__active');
    creditButton.classList.add('service__active');;
    delivery.style.display = "none";
    garanty.style.display = "none";
    credit.style.display = "block";
});


