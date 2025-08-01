const languageSelect = document.getElementById("language-selection");

languageSelect.onchange = (event) => {
  const selectedOption = event.target.options[event.target.selectedIndex];
  console.log(selectedOption);

  const newUrl = selectedOption.getAttribute("data-url");
  console.log(newUrl);

  const currentURL = window.location;

  window.location.pathname = "/es/index.html";
};
