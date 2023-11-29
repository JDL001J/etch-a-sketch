grid = document.querySelector('.grid')
size = document.querySelector(".size");
btn = document.querySelector('.btn');
color = document.querySelector(".color-wheel");
color.addEventListener("mouseleave", ()=>{
  drawFunc()
 
}

)


function createItems(){
  items = document.querySelectorAll('.item');
  return items
}

function getSize(){
    
    // gridSize = size.value;
    gridSize = 900;
   

   
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
    drawFunc();
  }  

  function deleteGrid(){
    
   createItems();
    length = items.length;
    for(i = 0; i<length;i++){
        grid.removeChild(items[i])
    }
  }
function drawFunc(){
createItems();
getColor();
    items.forEach(elm => {
      
        
        elm.addEventListener('mouseover', ()=>{
          getColor();
          
          elm.style.backgroundColor = `${color}`;
        });

        elm.addEventListener("mouseup",()=>{

        })
        
      
    });
  };

function getColor(){
  color = document.querySelector(".color-wheel");
color = color.value;
return color

}
 
 function getValid(){
  
 }


  btn.addEventListener('click', createGrid);

  createGrid()