let col = 1;
let row = 0;
let currentColor = "azure";
let borderColor = "black";
let color = false;
// function to change color
/* function changeColor() {
    this.style.backgroundColor = currentColor;
    this.classList.remove("uncolored");
} */

// create()  cell function
function create() {
    let cell = document.createElement("td");
    cell.classList.add("grid-cell");
    cell.classList.add("uncolored");
    /* if user clicks the cell, the the arrow function will run and change the background of the cell to current color. If the cell is already colored it will
        change the color to current color. The second line in function is for uncolored cells in table
    */
    cell.addEventListener("click", e => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    });
    /* The following three event listeners solves the last prompt for this project where if the action is mousedown, the vaiable color becomes true. While mouse down, 
    if the mouse moves over the cell, those cells which the mouse hovers over has the color changed regardless if they are empty or already have been colored. If the
    mouseup event is called, color becomes false and the cells will no longer change the color when the mosue moves over them.
    */
    cell.addEventListener("mousedown", e => color = true);
    cell.addEventListener("mousemove", e => {
        if (color) {
            cell.style.backgroundColor = currentColor;
            cell.classList.remove("uncolored");
        }
    });
    cell.addEventListener("mouseup", e => {
        if (color) {
            color = false;
        }
    })
    return cell;
}

//function to add row
function addRow() {
    row++;
    // let tale element == DOM tag with id grid
    let table = document.getElementById("grid");
    // newRow is the table row list
    let newRow = document.createElement("tr");
    // each newRow has a class name added grid-row
    newRow.classList.add("grid-row");
    // appends the element to the parent node
    table.appendChild(newRow);
    // for every column available, the tr element will append a new cell as its child. e.g. col = 3. the new tr element created will append 3 cells as its child
    for (let i = 0; i < col; i++) {
        newRow.appendChild(create());
    }

}

// add column
function addColumn() {
    // column variable increments to allow add row to know how many columns are available
    col++;
    // table is the div with id grid
    let table = document.getElementById("grid");
    // newCol is nodeList of elements with class name grid-row
    let newCol = document.getElementsByClassName("grid-row");
    // for every grid-row element, they will append 1 cell to make a new column.
    for (let i = 0; i < newCol.length; i++) {
        newCol[i].appendChild(create());
    }
}
