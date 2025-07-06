function scrollHeader() {
  const logo = document.querySelector('.subheader__logo');
  const sticky = document.querySelector('.subheader-container__main');
  const triggerPoint = logo.offsetTop + logo.offsetHeight; 
  const catalog = document.querySelector('.catalog-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > triggerPoint) {
      logo.classList.add('fixed');
      sticky.classList.add('fixed');
      catalog.style.top = '91px';
      document.querySelector('.subheader-container__main-social').style.marginLeft = '52px'
    } else {
      logo.classList.remove('fixed');
      sticky.classList.remove('fixed');
      catalog.style.top = '153px';
      document.querySelector('.subheader-container__main-social').style.marginLeft = '19px'
    }
  });
}

export default scrollHeader;
