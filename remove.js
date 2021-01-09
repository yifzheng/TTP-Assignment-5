// remove rows 1 by 1
function removeRow(){
    // if row value is 1, while column is greater than -1, removeColumn function is called
    if (row === 1){
        while (col > -1){
            removeColumn();
        }
    }
    // decrements row
    row -= 1;
    // sets DOM element with id grid to table
    let table = document.getElementById("grid");
    // sets the lengh of the row - 1 for index uses
    let finalRow = table.rows.length - 1;
    // the grid element removes the last child
    table.deleteRow(finalRow);
}

// removes columns 1 by 1
function removeColumn(){
    // if col === 1, while row !== 0, removeRow() function is called
    if (col === 1){
        while (row > -1){
            removeRow();
        }
    }
    // decrement col
    col -= 1;
    // sets DOM element with id grid to table
    let table = document.getElementById("grid");
    // allCol is number of all td elements in each tr element - 1 for index uses.
    let allCol = table.rows[0].cells.length - 1;
    // for every tr element, remove the last child
    for (let i = 0; i < table.rows.length; i++){
        table.rows[i].deleteCell(allCol);
    }
}
/*
The first few lines of each remove function was added with the intent to remove any bugs user would have when removeing rows and columns. These functions will remove cells 
until 1 is left. Prior code would allow user to remove all cells however there is a bug in the code where user can press add row or add column and the html file would not
display them unless the other add button is pressed. e.g. row = 6 and col = 1. removeColumn is called and all cells would be remvoed from display. However, pressing add row
would not display any cell on screen. isntead it would put row = 7 and only by pressing add column would cells appear. However, certain columns will have extra rows than others.
*/
