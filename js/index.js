// Проверяем, было ли уже дано согласие на использование куки
if (!localStorage.getItem('cookieConsent')) {
  // Если согласия нет, показываем сообщение
  document.getElementById('cookieConsent').style.display = 'block';
}

// Обработчик события для кнопки согласия
document
  .getElementById('cookieConsentButton')
  .addEventListener('click', function () {
    // Сохраняем согласие в localStorage
    localStorage.setItem('cookieConsent', 'true');
    // Скрываем сообщение
    document.getElementById('cookieConsent').style.display = 'none';
  });

const selectedCookie = localStorage.getItem('cookieConsent');
if (selectedCookie === 'true') {
  // Если значение равно 'true', скрываем уведомление
  document.getElementById('cookieConsent').style.display = 'none';
}
