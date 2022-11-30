const gridSlider = document.getElementById("grid-size-selector");

// Fetches current grid size input from #grid-size-selector
let currentGridSize = gridSlider.value

// Add a listener to update the grid size when the slider is moved
gridSlider.addEventListener("change", () => {
    updateGridSize();
    clearGrid();
    drawGrid(currentGridSize);
});

// Update grid size and label
function updateGridSize() {
    currentGridSize = gridSlider.value;
    let gridLabel = document.querySelector("#grid-selector-label");
    gridLabel.textContent = `Grid Size: ${gridSlider.value} x ${gridSlider.value}`;
    return;
}

// Draws (grid size)^2 divs and gives them the correct width
function drawGrid(size) {
    size = Math.pow(currentGridSize,2);
    let gridContainer = document.querySelector(".grid-container");
    let width = (100 / currentGridSize);
    console.log(width);

    for (let i = 0; i < size; i++) {
        let newCell = document.createElement("div");
        newCell.setAttribute("style",`width: ${width}%;`);
        newCell.classList.add("grid-cell");
        gridContainer.appendChild(newCell);
    }
    return;
}

// Clears the grid
function clearGrid() {
    let gridContainer = document.querySelector(".grid-container");
    gridContainer.textContent = "";
}

drawGrid();