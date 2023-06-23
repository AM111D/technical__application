document.addEventListener('DOMContentLoaded', function () {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  const labelUA = document.querySelector('#language-ua');
  const labelRU = document.querySelector('#language-ru');

  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
      const selectedValue = document.querySelector(
        'input[type="radio"]:checked'
      ).value;

      if (selectedValue === 'ua') {
        labelUA.style.color = '#FFFFFF';
        labelRU.style.color = '#000000';
      } else if (selectedValue === 'ru') {
        labelUA.style.color = '#000000';
        labelRU.style.color = '#FFFFFF';
      }

      localStorage.setItem('selectedLanguage', selectedValue);
    });
  });

  const selectedLanguage = localStorage.getItem('selectedLanguage');
  if (selectedLanguage === 'ua') {
    radioButtons[0].checked = true;
    labelUA.style.color = '#FFFFFF';
    labelRU.style.color = '#000000';
  } else if (selectedLanguage === 'ru') {
    radioButtons[1].checked = true;
    labelUA.style.color = '#000000';
    labelRU.style.color = '#FFFFFF';
  }
});
