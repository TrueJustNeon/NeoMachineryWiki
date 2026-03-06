document.addEventListener("DOMContentLoaded", () => {

    /* ---------------- BACKGROUND ---------------- */
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


    /* ---------------- PARSER ---------------- */

    let html = document.body.innerHTML;


    /* WARNING */

    const warningRegex = /\{\{warning,name=(.*?),description=(.*?)\}\}/gs;

    html = html.replace(warningRegex, (_, name, desc) =>
        `<div class="warning-box">
            <img src="icons/warn.png" class="warning-icon">
            <div class="warning-text">
                <div class="warning-title">${name}</div>
                <div class="warning-desc">${desc}</div>
            </div>
        </div>`
    );


    /* INFO */

    const infoRegex = /\{\{info,name=(.*?),description=(.*?)\}\}/gs;

    html = html.replace(infoRegex, (_, name, desc) =>
        `<div class="info-box">
            <img src="icons/info.png" class="info-icon">
            <div class="info-text">
                <div class="info-title">${name}</div>
                <div class="info-desc">${desc}</div>
            </div>
        </div>`
    );
    /* ERROR */

    const errorRegex = /\{\{error,name=(.*?),description=(.*?)\}\}/gs;

    html = html.replace(errorRegex, (_, name, desc) =>
        `<div class="error-box">
            <img src="icons/error.png" class="error-icon">
            <div class="error-text">
                <div class="error-title">${name}</div>
                <div class="error-desc">${desc}</div>
            </div>
        </div>`
    );


    /* APPLY PARSED HTML */

    document.body.innerHTML = html;


    

});