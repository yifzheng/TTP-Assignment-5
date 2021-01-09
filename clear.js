// function to clear all background color
function clearAll(){
    // nodeList of every cell in the grid
    let cells = document.getElementsByClassName("grid-cell");
    // makes and array from the nodeList
    let arr = Array.from(cells);
    // for every cell in the list we make the background color null, remove all class names available, adds 2 new class names grid-cell and uncolored
    arr.forEach(cell =>
    {
        cell.style.backgroundColor = null;
        cell.classList.remove(...cell.classList);
        cell.classList.add("grid-cell");
        cell.classList.add("uncolored");
    });
}
