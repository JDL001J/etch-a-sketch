grid = document.querySelector('.grid')
size = document.querySelector(".size");
btn = document.querySelector('.btn');

function getSize(){
    
    gridSize = size.value;
    return gridSize
}


function createGrid(){
    deleteGrid();
    gridSize = getSize();
  for(i = 0; i<gridSize; i++){
    div = document.createElement('div');
    div.classList.add("item");
    grid.appendChild(div);
    }
  }  

  function deleteGrid(){
    items = document.querySelectorAll(".item");
    elm = document.querySelector(".item");
    length = items.length;
    for(i = 0; i<length;i++){
        grid.removeChild(items[i])
    }
  }

  btn.addEventListener('click', createGrid);