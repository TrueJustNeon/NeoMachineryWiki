async function loadLanguage(lang) {
  try {
    const response = await fetch(`/languages/${lang}.yml`);
    const yamlText = await response.text();
    const translations = jsyaml.load(yamlText);

    document.getElementById("nav-home").textContent = translations.navHome;
    document.getElementById("nav-articles").textContent = translations.navArticles;
    document.getElementById("nav-categories").textContent = translations.navCategories;
    document.getElementById("nav-about").textContent = translations.navAbout;
    document.getElementById("welcome").textContent = translations.welcome;
    document.getElementById("intro-text").textContent = translations.introText;
    document.getElementById("sample-article-title").textContent = translations.sampleArticleTitle;
    document.getElementById("sample-article-text").textContent = translations.sampleArticleText;
    document.getElementById("footer-text").textContent = translations.footerText;
  } catch (error) {
    console.error("Error cargando idioma:", error);
  }
}

// Listener para el selector
document.getElementById("language").addEventListener("change", (e) => {
  loadLanguage(e.target.value);
});

// Idioma por defecto: inglés
loadLanguage("en");
