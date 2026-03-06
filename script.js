document.addEventListener("DOMContentLoaded", () => {

    /* WARNING PARSER */
    const bodyHTML = document.body.innerHTML;

    const warningRegex = /\{\{warning,name=(.*?),description=(.*?)\}\}/gs;

    document.body.innerHTML = bodyHTML.replace(warningRegex, (_, name, desc) => {
        return `
        <div class="warning-box">
            <img src="icons/warn.png" class="warning-icon">
            <div class="warning-text">
                <div class="warning-title">${name}</div>
                <div class="warning-desc">${desc}</div>
            </div>
        </div>
        `;
    });

});