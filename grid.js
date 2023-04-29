const container = document.querySelector("#container")
let button = document.querySelector("#prompt") 

button.addEventListener('click', () => { 
    return prompt("Type your Grid Size")
})

function newGrid(newRows, newCols) {
    let newRows = 0; 
    let newCols = 0;
    container.style.setProperty('--grid-rows', newRows); 
    container.style.setProperty('--grid-cols', newCols); 
    for (i = 0; i < (newRows * newCols); i++) { 
        let cells = document.createElement('div'); 
        cells.innerText = (i + 1); 
        container.appendChild(cells).className = "new-grid-item"
    }
}

function showNewGrid() { 

}

function makeRows(rows, cols) { 
    container.style.setProperty('--grid-rows', rows); 
    container.style.setProperty('grid-cols', cols); 
    for (c = 0 ; c < (rows * cols); c++) { 
        let cell = document.createElement('div'); 
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};
makeRows(10,10)
