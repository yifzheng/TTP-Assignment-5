let box = 1;
let currentColor = "white";
let borderColor = "black";

// function to change color
function changeColor(){
    this.style.backgroundColor = currentColor;
    this.classList.remove("uncolored");
}
// create()  cell function
function create(){
    let cell = document.createElement("td");
    cell.classList.add("grid-cell");
    cell.classList.add("uncolored");
    cell.addEventListener("click", changeColor);
    return cell;
}

//function to add row
function addRow(){
    let table = document.getElementById("grid");
    let newRow = document.createElement("tr");
    newRow.classList.add("grid-row");
    
    table.appendChild(newRow);
    for (let i = 0; i < box; i++){
        newRow.appendChild(create());
    }
}

// add column
function addColumn(){
    box++;
    let table = document.getElementById("grid");
    let newCol = document.getElementsByClassName("grid-row");
    for (let i = 0; i < newCol.length; i++){
        newCol[i].appendChild(create());
    }
}