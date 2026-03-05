function createRecipe(containerId, recipe) {
    const container = document.getElementById(containerId);

    const grid = document.createElement("div");
    grid.className = "recipe-grid";

    recipe.inputs.forEach(item => {
        const slot = document.createElement("div");
        slot.className = "slot";

        if (item) {
            const img = document.createElement("img");
            img.src = item;
            slot.appendChild(img);
        }

        grid.appendChild(slot);
    });

    container.appendChild(grid);

    const output = document.createElement("div");
    output.className = "recipe-output";

    const outputImg = document.createElement("img");
    outputImg.src = recipe.output;
    outputImg.width = 48;

    output.appendChild(outputImg);
    container.appendChild(output);
}