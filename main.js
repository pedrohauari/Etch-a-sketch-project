const container = document.querySelector("#container")
const button = document.querySelector("#prompt") 

button.addEventListener('click', () => { 
    return prompt("Type your Grid Size")
})

function createNewGrid(linhas, colunas) { 
    container.style.setProperty('--grid-rows', linhas);
    container.style.setProperty('--grid-cols', colunas);
    let i = 0;
    let j = 0;
    for (i = 0; i < linhas.length; i++) { 
        let linhas = document.createElement('div'); 
        linhas.innerText = (i + 1); 
        container.appendChild(linhas).className = "new-grid-item"
    }
    for ( j = 0; colunas.length; j++) { 
        let colunas = document.createElement('div'); 
        colunas.innerText = (j + 1);
        container.appendChild(colunas).className = "new-grid-item"
        
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
// createNewGrid(2,2)
