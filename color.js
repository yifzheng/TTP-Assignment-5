function selectColor(color) {
    currentColor = color;
}

function fillAll() {
    let cells = document.getElementsByClassName("grid-cell");
    let arr = Array.from(cells);
    arr.forEach(cell => {
        if (cell.classList.contains("uncolored")) {
            cell.style.backgroundColor = currentColor;
            cell.classList.remove("uncolored");
        }
    });
}