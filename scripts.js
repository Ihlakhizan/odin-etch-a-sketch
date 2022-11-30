// Fetches grid slider and stores input value in currentGridSize
const gridSlider = document.getElementById("grid-size-selector");
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

// Clears the existing grid
function clearGrid() {
    let gridContainer = document.querySelector(".grid-container");
    gridContainer.textContent = "";
}

// Draws (grid size)^2 divs, gives them the correct width, and adds event listeners
function drawGrid(size) {
    size = Math.pow(currentGridSize,2);
    let gridContainer = document.querySelector(".grid-container");
    let width = (100 / currentGridSize);

    for (let i = 0; i < size; i++) {
        let newCell = document.createElement("div");
        newCell.setAttribute("style",`width: ${width}%;`);
        newCell.classList.add("grid-cell");
        newCell.addEventListener("mouseover", () => {
            colorCell(newCell);
        });
        gridContainer.appendChild(newCell);
    }
    return;
}

// Fetch the toggleable buttons + input
const toggleableButtons = document.querySelectorAll(".button-toggleable");
const colorButton = document.getElementById("color-button");
const acidButton = document.getElementById("acid-button");
const eraserButton = document.getElementById("eraser-button");
const clearButton = document.getElementById("clear-button");
const colorInput = document.getElementById("color-selector");
let currentColor = colorInput.value;

// Add a listener to update the current color when the input is changed
colorInput.addEventListener("change", () => {
    currentColor = colorInput.value;
})

// Add event listeners to color-button, acid-button, and eraser-button
toggleableButtons.forEach(button => {
    button.addEventListener("click", () => {
        setButtonActive(button);
    })
});

// Set button active
function setButtonActive(button) {
    toggleableButtons.forEach(button => {
        button.classList.remove("button-active");
    });
    button.classList.add("button-active");
    return;
}

// Colors the cell depending on the active button
function colorCell(cell) {
    let activeButtonID;

    toggleableButtons.forEach(button => {
        if (button.classList.contains("button-active")) {
            activeButtonID = button.getAttribute("id");
        }
    });

    switch(activeButtonID) {
        case "color-button": // Uses the current color
            cell.style.backgroundColor = currentColor;
            return;
        case "acid-button": // Uses a random color
            let red = Math.floor(Math.random() * (255 - 1 + 1) + 1);
            let blue = Math.floor(Math.random() * (255 - 1 + 1) + 1);
            let green = Math.floor(Math.random() * (255 - 1 + 1) + 1);
            cell.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
            return;
        case "eraser-button": // Uses white
            cell.style.backgroundColor = "white";
            return;
    }
    return;
}

// CLEAR BUTTON: clears grid and creates new one
clearButton.addEventListener("click", () => {
    clearGrid();
    drawGrid();
});

// Run after everything loads
drawGrid();