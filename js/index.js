if (!localStorage.getItem('cookieConsent')) {
  document.getElementById('cookieConsent').style.display = 'block';
}

document
  .getElementById('cookieConsentButton')
  .addEventListener('click', function () {
    localStorage.setItem('cookieConsent', 'true');

    document.getElementById('cookieConsent').style.display = 'none';
  });

const selectedCookie = localStorage.getItem('cookieConsent');
if (selectedCookie === 'true') {
  document.getElementById('cookieConsent').style.display = 'none';
}
