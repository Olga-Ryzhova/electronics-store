function showSubmenuOnHoverDesktop({buttonSelector, menuSelector, level1Selector, level2Selector, itemHasSubAttribute = 'data-sub', blockIdAttribute = 'data-id'}) {
  const btn = document.querySelector(buttonSelector);
  const menu = document.querySelector(menuSelector);
  const level1Items = menu.querySelectorAll(level1Selector);
  const level2Blocks = menu.querySelectorAll(level2Selector);

  // Показ / скрытие меню по кнопке
  btn?.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('active');
  });

  // Наведение на 1 уровень — показать 2 уровень
  level1Items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const subId = item.getAttribute(itemHasSubAttribute);

      level2Blocks.forEach(block => {
        block.classList.remove('active');
        if (block.getAttribute(blockIdAttribute) === subId) {
          block.classList.add('active');
        }
      });
    });

    // Клик по пункту без подкатегории — закрытие меню
    item.addEventListener('click', (e) => {
      const hasSub = item.hasAttribute(itemHasSubAttribute);
      const link = item.querySelector('a');

      // Если нет вложенных уровней — закрыть меню
      if (!hasSub && link) {
        menu.classList.remove('active');
      }
    });
  });

  // Клик по 2 уровню — закрытие
  level2Blocks.forEach(block => {
    block.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        menu.classList.remove('active');
      }
    });
  });

  // Клик вне меню — закрытие
  document.addEventListener('click', (e) => {
    const isClickInside = menu.contains(e.target);
    const isClickOnButton = btn.contains(e.target);
    if (!isClickInside && !isClickOnButton) {
      menu.classList.remove('active');
    }
  });
}

export default showSubmenuOnHoverDesktop;