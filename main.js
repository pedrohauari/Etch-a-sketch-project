const container = document.querySelector("#container")
let button = document.querySelector("#prompt") 

button.addEventListener('click', () => { 
    return prompt("Type your Grid Size")
})

function createNewGrid(linhas, colunas) { 
    let i = 0; 
    let j = 0;
    for (i = 0; i < 100; i++) { 
        return linhas
    }
    for ( j = 0; j < 100; j++) { 
        return colunas
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

makeRows(4,4)
