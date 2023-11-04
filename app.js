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
}

function addHoverEffect(){
    cells = document.querySelectorAll('.grid-cell');

    
    for(i = 0; i < cells.length; i++) {
        cells[i].classList.add('change-color');

        // cells[i].addEventListener('mouseover', () => {
            
        // })
    }
    console.log(cells);
}


createGrid()
addHoverEffect();