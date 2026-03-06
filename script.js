document.addEventListener("DOMContentLoaded", () => {
    const contentArea = document.getElementById("content-area");
    
    contentArea.innerHTML = contentArea.innerHTML.replace(/\{\{warning,\s*name=(.*?),\s*description=(.*?)\}\}/g, (_, name, description) => {
        return `
        <div class="warning">
            <img src="icons/warn.png" alt="Warning" class="warning-icon">
            <div class="warning-text">
                <div class="warning-title">${name.trim()}</div>
                <div class="warning-desc">${description.trim()}</div>
            </div>
        </div>
        `;
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const bg = document.querySelector("background");

    if (!bg) return;

    const image = bg.getAttribute("image");
    const blur = bg.getAttribute("blur") || 0;
    const dark = bg.getAttribute("dark") || 0;

    const overlay = dark > 0
        ? `linear-gradient(rgba(0,0,0,${dark}), rgba(0,0,0,${dark})),`
        : "";

    document.body.style.background =
        `${overlay} url("backgrounds/${image}") center / cover no-repeat fixed`;

    if (blur > 0) {
        const blurLayer = document.createElement("div");
        blurLayer.style.position = "fixed";
        blurLayer.style.inset = "0";
        blurLayer.style.background = `url("backgrounds/${image}") center / cover no-repeat`;
        blurLayer.style.filter = `blur(${blur}px)`;
        blurLayer.style.zIndex = "-1";
        document.body.prepend(blurLayer);
    }

    bg.remove(); // remove the tag after applying
});