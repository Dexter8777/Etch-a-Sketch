const gridContainer = document.querySelector('.grid-container');

function createGrid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add('grid-cell');
            gridContainer.appendChild(gridCell);
        }
    }
}

function addHoverEffect(){
    
}

createGrid();