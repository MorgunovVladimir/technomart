var deliveryButton=document.querySelector(".delivery-button"),guaranteeButton=document.querySelector(".guarantee-button"),creditButton=document.querySelector(".credit-button"),delivery=document.querySelector(".delivery"),guarantee=document.querySelector(".guarantee"),credit=document.querySelector(".credit");deliveryButton.addEventListener("click",function(){deliveryButton.classList.add("service__active"),guaranteeButton.classList.remove("service__active"),creditButton.classList.remove("service__active"),delivery.style.display="block",guarantee.style.display="none",credit.style.display="none"}),guaranteeButton.addEventListener("click",function(){deliveryButton.classList.remove("service__active"),guaranteeButton.classList.add("service__active"),creditButton.classList.remove("service__active"),delivery.style.display="none",guarantee.style.display="block",credit.style.display="none"}),creditButton.addEventListener("click",function(){deliveryButton.classList.remove("service__active"),guaranteeButton.classList.remove("service__active"),creditButton.classList.add("service__active"),delivery.style.display="none",guarantee.style.display="none",credit.style.display="block"});