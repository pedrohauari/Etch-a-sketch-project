const container = document.querySelector("#container")
const button = document.querySelector("#prompt")

function createNewGrid(linhas, colunas) {
    container.style.setProperty('--grid-rows', linhas);
    container.style.setProperty('--grid-cols', colunas);
    let i = 0;
    for (i = 0; i < (linhas * colunas); i++) {
        let rows = document.createElement('div');
        rows.innerText = (i + 1);
        container.appendChild(rows).className = "new-grid-item"
    }
}

button.addEventListener('click', () => {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }
    let linhas = 0
    let colunas = 0

    linhas = prompt("Linhas: ")
    colunas = prompt('Colunas: ')

    if (linhas > 80 || colunas > 80) {
        alert('LINHAS OU COLUNAS NAO PODEM SER MAIOR QUE 80')
        return
    }

    return createNewGrid(linhas, colunas)
})