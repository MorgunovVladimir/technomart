var feedBack = document.querySelector('.feedback-button');
var mapLink = document.querySelector('.map-link');


var popup = document.querySelector('.modal-feedback');
var map = document.querySelector('.modal-map');
var closeButtons = [].slice.call(document.querySelectorAll('.button-close'));

var userName = popup.querySelector('[name=name]');
var form = popup.querySelector('.modal-feedback-form');
var email = popup.querySelector('[name=email]');

var isStorageSupport = true;
var storage = '';

var buyButton = [].slice.call(document.querySelectorAll('.buy'));
var basketPopup = document.querySelector('.modal-basket');
var close2 = document.querySelector('.continue')

try {
  storage = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = false;
}


feedBack.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  if (storage) {
    userName.value = storage;
    email.focus();
  } else {
    userName.focus();
  }
});

form.addEventListener('submit', function (evt) {
  if (!userName.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
    console.log('Нужно ввести логин и пароль');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', userName.value);
    }
  }
});

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  map.classList.add('modal-show');
});


closeButtons.forEach(function (element) {
  element.addEventListener('click', function () {
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-show');
    map.classList.remove('modal-show');
    popup.classList.remove('modal-error');
    basketPopup.classList.remove('modal-show');
  });
});


window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
    }
    if (map.classList.contains('modal-show')) {
      map.classList.remove('modal-show');
    }
    if (basketPopup.classList.contains('modal-show')) {
      basketPopup.classList.remove('modal-show');
    }
  }
});


buyButton.forEach(function (element) {
  element.addEventListener('click', function (evt) {
    evt.preventDefault();
    basketPopup.classList.add('modal-show');
  });
});


close2.addEventListener('click', function () {
  basketPopup.classList.remove('modal-show');
});

