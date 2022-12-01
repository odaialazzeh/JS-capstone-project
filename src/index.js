// import './style.css';
import getData from './module/display-home.js';
import showPopupCategories from './module/show-popup-categories.js';
import showPopupContacts from './module/show-popup-contacts.js';

getData();

const menuCat = document.getElementById('categories');
menuCat.addEventListener('click', () => {
  showPopupCategories();
});

const menuCont = document.getElementById('contacts');
menuCont.addEventListener('click', () => {
  showPopupContacts();
});
