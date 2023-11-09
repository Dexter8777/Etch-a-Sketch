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

    }

function createButton() {
    let gridSquares = document.querySelectorAll('.grid-cell');

    const newBtn = document.createElement('button');
    console.log(newBtn);

        gridContainer.addEventListener('mouseover', () =>{
            for (i = 0; i < 1; i++){
                newBtn.classList.add('new');
                newBtn.textContent = 'New';
                document.body.append(newBtn);
            }
        })
    
    
    
    // gridSquares.forEach((square) => {
    //     if (square.classList.contains('change-color')) {
    //         console.log('yes');
    //     }
        
    // })

     console.log(gridSquares);
}


    
    


createGrid();
addHoverEffect();
createButton();
