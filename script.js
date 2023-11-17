grid = document.querySelector('.grid')
size = document.querySelector(".size");
btn = document.querySelector('.btn');

function getSize(){
    gridSize = size.target.value;
    createGrid(gridSize)
}


function createGrid(size){
gridSize = getSize();
  for(i = 0; i<size; i++){
    div = document.createElement('div');
    div.classList.add("item");
    grid.appendChild(div);
    }
  }  


  btn.addEventListener('click', getSize);