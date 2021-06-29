import 'modern-normalize/modern-normalize.css';
import menuEvents from './menu.json';
import eventsTemplates from './templates/events.hbs';
import './sass/main.scss';



const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const menu = document.querySelector('.js-menu');
menu.insertAdjacentHTML('afterbegin', eventsTemplates(menuEvents));

const body = document.querySelector('body');
const input = document.querySelector('#theme-switch-toggle');

const setItem = (addItemList, removeItemList) => {
    body.classList.add(`${addItemList}`);
    body.classList.remove(`${removeItemList}`);
};

const onInputTheme = (e) => {
    if (input.checked) {
        setItem(Theme.DARK, Theme.LIGHT);
    } else {
        setItem(Theme.LIGHT, Theme.DARK);
    }   
};

const settingThemeLocalhost = (e) => {
    if (input.checked) {
        localStorage.setItem('theme', Theme.DARK);
    } else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.LIGHT);
    }
};

if (localStorage.getItem('theme') === Theme.DARK) {
    body.classList.add(Theme.DARK);
    input.checked = true;
};

input.addEventListener('change', onInputTheme);
input.addEventListener('change', settingThemeLocalhost);



// // Установка темной темы
// function checkedInput() {
//   document.body.classList.add(Theme.DARK);
//   document.body.classList.remove(Theme.LIGHT);
//   localStorage.setItem('theme', Theme.DARK);
//   inputRef.checked = true;
// }

// // Установка светлой темы
// function notCheckedInput() {
//   document.body.classList.add(Theme.LIGHT);
//   document.body.classList.remove(Theme.DARK);
//   localStorage.setItem('theme', Theme.LIGHT);
//   inputRef.checked = false;
// }


// const theme = document.localStorage('theme') || Theme.LIGHT;
// document.body.classList.add(theme);
// swichToggleTheme.checked = theme === Theme.DARK;