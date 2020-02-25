let feedBack = document.querySelector(".feedback-button");
let mapLink = document.querySelector(".map-link");


let popup = document.querySelector(".modal-feedback");
let map = document.querySelector(".modal-map");
let closeButtons = document.querySelectorAll(".button-close");

let userName = popup.querySelector("[name=name]");
let form = popup.querySelector(".modal-feedback-form");
let email = popup.querySelector("[name=email]");

let isStorageSupport = true;
let storage = "";

let buyButton = document.querySelectorAll(".buy");
let basketPopup = document.querySelector(".modal-basket");
let close2 = document.querySelector(".continue")

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}


feedBack.addEventListener("click", function(evt){
    evt.preventDefault();   
    popup.classList.add("modal-show");

    if (storage) {
      userName.value = storage;
      email.focus();
    } else {
      userName.focus();
    }   
});

form.addEventListener("submit", function (evt)  {
  if (!userName.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести логин и пароль");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", userName.value);
    }
  }
});

mapLink.addEventListener("click", function(evt){
    evt.preventDefault();   
    map.classList.add("modal-show");
});



for (var i=0; i<closeButtons.length; i++){
  closeButtons[i].addEventListener('click', function(){
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-show");
    map.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    basketPopup.classList.remove("modal-show");
    });
}

// closeButtons.forEach(function (element) {
//   element.addEventListener('click', function(){
//   popup.classList.remove("modal-show");
//   popup.classList.remove("modal-show");
//   map.classList.remove("modal-show");
//   popup.classList.remove("modal-error");
//   basketPopup.classList.remove("modal-show");
//   });
// });

// closeButtons.forEach(element => {
//     element.addEventListener('click', function(){
//         popup.classList.remove("modal-show");
//         map.classList.remove("modal-show");
//         popup.classList.remove("modal-error");
//         basketPopup.classList.remove("modal-show"); 
//     });
// });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");        
      }
      if (map.classList.contains("modal-show")) {
        map.classList.remove("modal-show");        
      }
      if (basketPopup.classList.contains("modal-show")) {
        basketPopup.classList.remove("modal-show");        
      }        
    }
  });

  for (var i=0; i<buyButton.length; i++){
    buyButton[i].addEventListener('click', function(evt){
      evt.preventDefault(); 
      basketPopup.classList.add("modal-show");      
      });
  }

//   buyButton.forEach(function(element) {
//     element.addEventListener('click', function(evt){
//         evt.preventDefault();       
//         basketPopup.classList.add("modal-show");      
//     });
// });

 
// buyButton.forEach(element => {
//     element.addEventListener('click', function(evt){
//         evt.preventDefault();       
//         basketPopup.classList.add("modal-show");      
//     });
// });

close2.addEventListener('click', function(){
  basketPopup.classList.remove("modal-show");      
});   
