function toggleSubmenuOnClickMobile({buttonSelector, menuSelector, level1Selector, level2Selector, itemHasSubAttr = 'data-sub',level2BlockWrapperSelector = '.catalog-level-2-wrapper'}) {
  const btn = document.querySelector(buttonSelector);
  const menu = document.querySelector(menuSelector);
  const level1Items = menu.querySelectorAll(level1Selector);
  const level2Blocks = menu.querySelectorAll(level2Selector);
  const level2Wrapper = menu.querySelector(level2BlockWrapperSelector);
  const list = document.querySelector('.mobile-catalog .subheader-container__common-list');
  const backButtonContainer = document.querySelector('.back-button-container');
  const backButton = backButtonContainer.querySelector('.back-button');

  // Открытие/закрытие меню при клике на кнопку
  btn?.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('active');
    btn.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
      list.style.display = 'none';  
      backButtonContainer.style.display = 'block';  
      backButton.textContent = `${btn.querySelector('.subheader-container__common-item_menu').textContent.trim()}`;  
    }
  });

  // Обработка кликов на элементы 1 уровня
  level1Items.forEach(item => {
    item.addEventListener('click', (e) => {
      const subAttrValue = item.getAttribute(itemHasSubAttr);

      // Если есть подкатегории
      if (subAttrValue) {
        // Открыть подкатегории
        level2Wrapper.classList.add('active');
        const targetLevel2Block = menu.querySelector(`${level2Selector}[data-id="${subAttrValue}"]`);
        if (targetLevel2Block) {
          targetLevel2Block.classList.add('active');
        }

        // Скрыть элементы 1 уровня
        level1Items.forEach(lvl1Item => lvl1Item.style.display = 'none');

        // Обновить текст кнопки "Назад"
        backButton.textContent = `${item.textContent.trim()}`;
        backButtonContainer.style.display = 'block';
      } else {
        // Если подкатегорий нет, закрыть меню
        menu.classList.remove('active');
        btn.classList.remove('active');
      }
    });
  });

  // Обработка кликов по кнопке Назад
  backButton.addEventListener('click', () => {
    // Вернуться к списку категорий
    level2Wrapper.classList.remove('active');
    backButtonContainer.style.display = 'none';
    list.style.display = 'block';  
    menu.classList.remove('active'); 
    btn.classList.remove('active');
    
    // Вернуть отображение элементов 1 уровня
    level1Items.forEach(lvl1Item => lvl1Item.style.display = 'flex');

    // Очищаем все активные подкатегории, чтобы сбросить их состояние
    level2Blocks.forEach(block => {
      block.classList.remove('active');  
    });

    backButton.textContent = 'Назад';  
  });

  // Обработка кликов по элементам 2 уровня
  level2Blocks.forEach(block => {
    block.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        menu.classList.remove('active');
        btn.classList.remove('active');
        level2Wrapper.classList.remove('active');
        level1Items.forEach(lvl1Item => lvl1Item.style.display = 'block');
      }
    });
  });
}

export default toggleSubmenuOnClickMobile;