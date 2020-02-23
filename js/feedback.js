let feedBack = document.querySelector(".feedback-button");
let mapLink = document.querySelector(".map-link");

let popup = document.querySelector(".modal-feedback");
let map = document.querySelector(".modal-map");
let close = document.querySelectorAll(".button-close");

feedBack.addEventListener("click", function(evt){
    evt.preventDefault();   
    popup.classList.add("modal-show");
});

mapLink.addEventListener("click", function(evt){
    evt.preventDefault();   
    map.classList.add("modal-show");
});

close.forEach(element => {
    element.addEventListener('click', function(){
        popup.classList.remove("modal-show");
        map.classList.remove("modal-show");
    });
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");        
      }
      if (map.classList.contains("modal-show")) {
        map.classList.remove("modal-show");        
      }
    }
  });