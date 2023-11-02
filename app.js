const gridContainer = document.querySelector('.grid-container');
let gridCell;

function createGrid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            gridCell = document.createElement('div');
            gridCell.classList.add('grid-cell');
            gridContainer.appendChild(gridCell);
        } 
    } 
   
}

// function addHoverEffect(){
//     gridContainer.addEventListener('mouseover', () => {
//         gridContainer.classList.add('change-color');
//     })
// }

createGrid();
// addHoverEffect();