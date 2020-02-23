let carousel = document.querySelector(".offers__category-carousel");
let left = document.querySelector(".arrowleft");
let right = document.querySelector(".arrowright");
let heading = document.querySelector(".offers__category-carousel-heading");
let description = document.querySelector(".offers__category-carousel-description");

left.addEventListener('click', function(){
    carousel.classList.remove('end');
    carousel.classList.add('start');
    heading.innerHTML = "Дрели";
    description.innerHTML = "Соседям на радость!"
});

right.addEventListener('click', function(){
    carousel.classList.remove('start');
    carousel.classList.add('end');
    heading.innerHTML = "Перфораторы";
    description.innerHTML = "Настоящие мужские игрушки"
});