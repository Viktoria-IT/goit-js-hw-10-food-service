import 'modern-normalize/modern-normalize.css';
import menuEvents from './menu.json';
import eventsTemplates from './templates/events.hbs';
import './sass/main.scss';




const menuOrder = document.querySelector('.js-menu');
menuOrder.insertAdjacentHTML('afterbegin', eventsTemplates(menuEvents));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const swichToggleTheme = document.querySelector('.js-theme-switch__toggle');
const bodyTheme = document.querySelector('body');
// upCurrentTheme();
let isLightTheme = true;
swichToggleTheme.addEventListener('change', (e) => {
   // swichToggleTheme.checked;
   const savedTheme = e.target.value;
   e.preventDefault();
   
   if (isLightTheme) {
      //dark
      upCurrentTheme();
      bodyTheme.classList.remove('light-theme');
      bodyTheme.classList.add('dark-theme');
      localStorage.removeItem('light-theme', savedTheme);
      localStorage.getItem('dark-theme');
      localStorage.setItem('dark-theme', savedTheme)
      swichToggleTheme.checked = true;
   }
   else  {
   //light
      bodyTheme.classList.remove('dark-theme');
      bodyTheme.classList.add('light-theme');
      localStorage.removeItem('dark-theme', savedTheme);
      upCurrentTheme();
      localStorage.setItem('light-theme', savedTheme);
   }
   isLightTheme = !isLightTheme;
});

function upCurrentTheme() {
   let currentTheme = bodyTheme.getAttribute('dark-theme');
   let theme = "";
   if (currentTheme == Theme.DARK) {
      currentTheme = Theme.DARK;
    
   }
   else {
      currentTheme = Theme.LIGHT;
    
   }
   bodyTheme.setAttribute('dark-theme', currentTheme);
return theme
   
   // bodyTheme.value = localStorage.getItem('dark-theme');
   //  let currentThemedark = Theme.DARK;
   //    if (currentThemedark === 'dark-theme') {
   //    bodyTheme.classList.add('dark-theme');
   //    }
};
 
 
   