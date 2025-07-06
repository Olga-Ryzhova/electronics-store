function lang(parentSelector, langSelector, activeClass) {
  const parent = document.querySelector(parentSelector); 
  const langs = parent.querySelectorAll(langSelector);   

  langs.forEach((lang) => {
    lang.addEventListener('click', (e) => {
      langs.forEach(l => l.classList.remove(activeClass));
      e.target.classList.add(activeClass);
    });
  });
}

export default lang;
