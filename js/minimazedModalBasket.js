var buyButton=[].slice.call(document.querySelectorAll(".buy")),basketPopup=document.querySelector(".modal-basket"),close=document.querySelector(".button-close"),close2=document.querySelector(".continue");buyButton.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),basketPopup.classList.add("modal-show")})}),close.addEventListener("click",function(){basketPopup.classList.remove("modal-show")}),close2.addEventListener("click",function(){basketPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),basketPopup.classList.contains("modal-show")&&basketPopup.classList.remove("modal-show"))});