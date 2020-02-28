let carousel = document.querySelector(".offers__category-carousel");
let left = document.querySelector(".arrowleft");
let right = document.querySelector(".arrowright");
let heading = document.querySelector(".offers__category-carousel-heading");
let description = document.querySelector(".offers__category-carousel-description");
let dot1 = document.querySelector(".dot-1");
let dot2 = document.querySelector(".dot-2");

left.addEventListener('click', function(){
    carousel.classList.remove('end');
    carousel.classList.add('start');
    heading.innerHTML = "Дрели";
    description.innerHTML = "Соседям на радость!";
    dot2.classList.remove("dot-active");
    dot1.classList.add("dot-active");
});

right.addEventListener('click', function(){
    carousel.classList.remove('start');
    carousel.classList.add('end');
    heading.innerHTML = "Перфораторы";
    description.innerHTML = "Настоящие мужские игрушки";
    dot1.classList.remove("dot-active");
    dot2.classList.add("dot-active");
});

dot1.addEventListener('click', function(){
    carousel.classList.remove('end');
    carousel.classList.add('start');
    heading.innerHTML = "Дрели";
    description.innerHTML = "Соседям на радость!";
    dot2.classList.remove("dot-active");
    dot1.classList.add("dot-active");
});

dot2.addEventListener('click', function(){
    carousel.classList.remove('start');
    carousel.classList.add('end');
    heading.innerHTML = "Перфораторы";
    description.innerHTML = "Настоящие мужские игрушки";
    dot1.classList.remove("dot-active");
    dot2.classList.add("dot-active");
});