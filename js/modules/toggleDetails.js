// Основная функция для переключения видимости секций и состояния кнопки
function toggleDetails(e) {
  e.preventDefault(); // Предотвращаем стандартное поведение кнопки, если оно необходимо

  const infoSection = document.getElementById('infoSection');
  const mobileCatalog = document.querySelector('.mobile-catalog');
  const showDetailsBtn = document.getElementById('showDetailsBtn');

  // Переключение видимости секций
  if (infoSection.style.display === "none" || infoSection.style.display === "") {
    infoSection.style.display = "block";
    infoSection.classList.remove('hidden');
    infoSection.classList.add('visible');

    mobileCatalog.style.display = "block";
    mobileCatalog.classList.remove('hidden');
    mobileCatalog.classList.add('visible');
  } else {
    infoSection.style.display = "none";
    infoSection.classList.remove('visible');
    infoSection.classList.add('hidden');

    mobileCatalog.style.display = "none";
    mobileCatalog.classList.remove('visible');
    mobileCatalog.classList.add('hidden');
  }

  // Переключение активности на кнопке
  showDetailsBtn.classList.toggle('active');
}

export default toggleDetails;
