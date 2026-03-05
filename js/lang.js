async function loadLang(lang) {
    const response = await fetch(`lang/${lang}.yml`);
    const text = await response.text();
    const lines = text.split("\n");

    const translations = {};

    lines.forEach(line => {
        if (line.includes(":")) {
            const parts = line.split(":");
            const key = parts[0].trim();
            const value = parts.slice(1).join(":").trim().replace(/"/g, "");
            translations[key] = value;
        }
    });

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[key]) {
            el.innerText = translations[key];
        }
    });

    localStorage.setItem("lang", lang);
}

window.onload = () => {
    const saved = localStorage.getItem("lang") || "en";
    loadLang(saved);
};