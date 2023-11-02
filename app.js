const gridContainer = document.querySelector('.grid-container');


function createGrid() {
    let gridCell;

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            gridCell = document.createElement('div');
            gridCell.classList.add('grid-cell');
            gridContainer.appendChild(gridCell);
        } 
    } 
    return gridCell;
}

function addHoverEffect(){
    createGrid();
    const cell = gridContainer.querySelectorAll('.grid-cell')
    console.log(cell)
    
    cell.addEventListener('mouseover', () => {
        cell.classList.add('change-color');
    })
}


addHoverEffect();