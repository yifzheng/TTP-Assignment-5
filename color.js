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
        cell.style.backgroundColor = currentColor;
    });
}
function fillRest(){
    let cells = document.getElementsByClassName("grid-cell");
    let arr = Array.from(cells);
    arr.forEach(cell => {
        if (cell.classList.contains("uncolored")) {
            cell.style.backgroundColor = currentColor;
            cell.classList.remove("uncolored");
        }
    });
}

function changeOrange(){
    currentColor = "orange";
    let element = document.getElementById("btn");
    element.style.backgroundColor = 'orange';
}
function changeRed(){
    currentColor = "red";
    let element = document.getElementById("btn");
    element.style.backgroundColor = 'red';
}
function changeBlue(){
    currentColor = "blue"
    let element = document.getElementById("btn");
    element.style.backgroundColor = 'blue';
}
function changeGreen(){
    currentColor = "green"
    let element = document.getElementById("btn");
    element.style.backgroundColor = 'green';
}