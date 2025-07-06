import lang from "./modules/lang";
import scrollHeader from "./modules/scrollHeader";
import showSubmenuOnHoverDesktop from "./modules/showSubmenuOnHoverDesktop";
import toggleDetails from "./modules/toggleDetails";
import toggleSubmenuOnClickMobile from "./modules/toggleSubmenuOnClickMobile";

document.addEventListener('DOMContentLoaded', () => {
  // Переключение языка
  lang('.subheader-container__main-lang', '.lang', 'active');  
  lang('.menu__lang', '.lang', 'active');  

  // Функция скролла
  scrollHeader();

  // Вызов функции при наведении на desktop
  showSubmenuOnHoverDesktop({
    buttonSelector: '.btn-catalog',
    menuSelector: '#catalogMenu',
    level1Selector: '.catalog-item',
    level2Selector: '.catalog-level-2',
  });

  showSubmenuOnHoverDesktop({
    buttonSelector: '.subheader-container__common-item:nth-child(3)',
    menuSelector: '#giftMenu',
    level1Selector: '.catalog-item',
    level2Selector: '.catalog-level-2',
  });

  showSubmenuOnHoverDesktop({
    buttonSelector: '.subheader-container__common-item:nth-child(4)',
    menuSelector: '#eventsMenu',
    level1Selector: '.catalog-item',
    level2Selector: '.catalog-level-2',
  });

  // Обработчик события на кнопке меню
  document.getElementById('showDetailsBtn').addEventListener('click', toggleDetails);

  // Вызов функции при клике на mobile
  toggleSubmenuOnClickMobile({
    buttonSelector: '.mobile-catalog #catalogLinkMob',  
    menuSelector: '#catalogMenuMob', 
    level1Selector: '.catalog-level-1 .subheader-container__common-item', 
    level2Selector: '.catalog-level-2', 
  });
  toggleSubmenuOnClickMobile({
    buttonSelector: '.mobile-catalog .subheader-container__common-item:nth-child(4)',
    menuSelector: '#giftMenuMob',
    level1Selector: '.catalog-item',
    level2Selector: '.catalog-level-2',
  });

  toggleSubmenuOnClickMobile({
    buttonSelector: '.mobile-catalog .subheader-container__common-item:nth-child(5)',
    menuSelector: '#eventsMenuMob',
    level1Selector: '.subheader-container__common-item',
    level2Selector: '.catalog-level-2',
  });
});


 