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
   let cells = document.querySelectorAll('.grid-cell');

    cells.forEach((cell) => {
       cell.addEventListener('mouseover', () => {
        cell.classList.add('change-color');
       })
    })
       return cells

    }

function createButton() {
    let gridSquares = addHoverEffect();
    console.log(gridSquares);

}


    
    


createGrid();
createButton();
