var deliveryButton = document.querySelector('.delivery-button');
var guaranteeButton = document.querySelector('.guarantee-button');
var creditButton = document.querySelector('.credit-button');
var delivery = document.querySelector('.delivery');
var guarantee = document.querySelector('.guarantee');
var credit = document.querySelector('.credit');


deliveryButton.addEventListener('click', function () {
    deliveryButton.classList.add('service__active');
    guaranteeButton.classList.remove('service__active');
    creditButton.classList.remove('service__active');
    delivery.style.display = 'block';
    guarantee.style.display = 'none';
    credit.style.display = 'none';
});


guaranteeButton.addEventListener('click', function () {
    deliveryButton.classList.remove('service__active');
    guaranteeButton.classList.add('service__active');
    creditButton.classList.remove('service__active');
    delivery.style.display = 'none';
    guarantee.style.display = 'block';
    credit.style.display = 'none';
});


creditButton.addEventListener('click', function () {
    deliveryButton.classList.remove('service__active');
    guaranteeButton.classList.remove('service__active');
    creditButton.classList.add('service__active');;
    delivery.style.display = 'none';
    guarantee.style.display = 'none';
    credit.style.display = 'block';
});


