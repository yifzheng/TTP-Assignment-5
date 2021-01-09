// when clicking on the options from drop down button, changes the currentColor based on select color
function selectColor(color) {
    currentColor = color;
}

// fills all the cells with currentColor disregarding if the cell already has a non-initial background color
function fillAll() {
    // cells is nodelist of all elements with class name grid-cell
    let cells = document.getElementsByClassName("grid-cell");
    // makes an array from the node list
    let arr = Array.from(cells);
    // for each element in the array
    arr.forEach(cell => {
        // if the element is uncolored (they contain the class name uncolored), the we style the cell with the current color and remove the class name uncolored
        if (cell.classList.contains("uncolored")) {
            cell.style.backgroundColor = currentColor;
            cell.classList.remove("uncolored");
        }
        // If the cell already has a background color, then the background color will update with current currentColor
        cell.style.backgroundColor = currentColor;
    });
}

// similar to fillAll() in which it fills all cells that don't have a colored background
function fillRest(){
    // cells is nodelist of all elements with class name grid-cell
    let cells = document.getElementsByClassName("grid-cell");
    // makes an array from the node list
    let arr = Array.from(cells);
     // for each element in the array
    arr.forEach(cell => {
        // if statement checks if the cell contains class name uncolored. If true, the background color will change to currentColor and the class name uncolored is removed
        if (cell.classList.contains("uncolored")) {
            cell.style.backgroundColor = currentColor;
            cell.classList.remove("uncolored");
        }
    });
}

// function that changes the currentColor as well as the color of the button to let users know what the current color is 
function changeAzure(){
    // sets currentColor to azure
    currentColor = "azure";
    // gets the element with id btn
    let element = document.getElementById("btn");
    // changes the color of the button to azure
    element.style.backgroundColor = 'azure';
}

// function that changes the currentColor as well as the color of the button to let users know what the current color is
function changeOrange(){
    // sets current color to orange
    currentColor = "orange";
    // gets the element with id btn
    let element = document.getElementById("btn");
    // changes color of button to orange
    element.style.backgroundColor = 'orange';
}

// function that changes the currentColor as well as the color of the button to let users know what the current color is
function changeRed(){
    // sets current color to red
    currentColor = "red";
    // gets the element with id btn
    let element = document.getElementById("btn");
    // changes color of button to red
    element.style.backgroundColor = 'red';
}

// function that changes the currentColor as well as the color of the button to let users know what the current color is
function changeBlue(){
    // sets current color to blue
    currentColor = "blue"
    // gets the element with id btn
    let element = document.getElementById("btn");
    // changes color of button to blue
    element.style.backgroundColor = 'blue';
}

// function that changes the currentColor as well as the color of the button to let users know what the current color is
function changeGreen(){
    // sets current color to green
    currentColor = "green"
    // gets the element with id btn
    let element = document.getElementById("btn");
    // changes color of button to green. 
    element.style.backgroundColor = 'green';
}
