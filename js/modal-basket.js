var buyButton = [].slice.call(document.querySelectorAll(".buy"));
var basketPopup = document.querySelector(".modal-basket");
var close = document.querySelector(".button-close");
var close2 = document.querySelector(".continue")

buyButton.forEach(function(element) {
    element.addEventListener('click', function(evt){
        evt.preventDefault();       
        basketPopup.classList.add("modal-show");      
    });
});

    close.addEventListener('click', function(){
        basketPopup.classList.remove("modal-show");      
    });

    close2.addEventListener('click', function(){
        basketPopup.classList.remove("modal-show");      
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (basketPopup.classList.contains("modal-show")) {
            basketPopup.classList.remove("modal-show");        
          }         
        }
      });