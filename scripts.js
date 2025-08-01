const languageSelect = document.getElementById("language-selection");

languageSelect.onchange = (event) => {
  const selectedOption = event.target.options[event.target.selectedIndex];

  const newUrl = selectedOption.getAttribute("data-url");

  window.location.href = newUrl;
};
