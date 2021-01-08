// when clicking on the options from drop down button, changes the currentColor based on select color
function selectColor(color) {
    currentColor = color;
}

// fills all the cells with currentColor disregarding if the cell already has a non-initial background color
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

// similar to fillAll() in which it fills all cells that don't have a colored background
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

// function that changes the currentColor as well as the color of the button to let users know what the current color is 
function changeAzure(){
    currentColor = "azure";
    let element = document.getElementById("btn");
    element.style.backgroundColor = 'azure';
}

// function that changes the currentColor as well as the color of the button to let users know what the current color is
function changeOrange(){
    currentColor = "orange";
    let element = document.getElementById("btn");
    element.style.backgroundColor = 'orange';
}

// function that changes the currentColor as well as the color of the button to let users know what the current color is
function changeRed(){
    currentColor = "red";
    let element = document.getElementById("btn");
    element.style.backgroundColor = 'red';
}

// function that changes the currentColor as well as the color of the button to let users know what the current color is
function changeBlue(){
    currentColor = "blue"
    let element = document.getElementById("btn");
    element.style.backgroundColor = 'blue';
}

// function that changes the currentColor as well as the color of the button to let users know what the current color is
function changeGreen(){
    currentColor = "green"
    let element = document.getElementById("btn");
    element.style.backgroundColor = 'green';
}
