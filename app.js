const gridContainer = document.querySelector('.grid-container');
const btnContainer = document.querySelector('.btn-container');
const newBtn = document.createElement('button');

newBtn.addEventListener('click', createUsrGrid)

function createGrid(gridNum) {

    let gridCell;

    if (gridNum === undefined) {
        gridNum = 16;
    } 

    let width = 624/gridNum + 'px';
    let height = 624/gridNum + 'px';
    

    for (let i = 0; i < gridNum; i++) {
        for (let j = 0; j < gridNum; j++) {
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

        gridContainer.addEventListener('mouseover', () =>{
            for (i = 0; i < 1; i++){
                newBtn.classList.add('new');
                newBtn.textContent = 'New';
                btnContainer.append(newBtn);
            }
        })
    }

function createUsrGrid() {

        gridContainer.replaceChildren();
        let usrGrid = prompt('Enter your new grid');
        usrGrid = Number(usrGrid);

        createGrid(usrGrid);
        addHoverEffect();

}


createGrid();
addHoverEffect();
createButton();
