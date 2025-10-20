function setLanguage(lang) {
  document.querySelectorAll('.lang').forEach(el => {
    el.textContent = el.dataset[lang];
  });
}
