

btn = document.querySelector('.btn');
color = document.querySelector(".color-wheel");
eraserBtn = document.querySelector('.eraser');
draw = false;
eraser = false;



color.addEventListener("mouseleave", ()=>{
  drawFunc()
 
}

)


function createItems(){
  items = document.querySelectorAll('.item');
  return items
}

function getSize(){
  grid = document.querySelector('.grid');
  size = document.querySelector(".size");
  
    gridSize = size.value;
    if (gridSize >= 2 || gridSize <= 100){
      grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
      grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
      return gridSize
    }
  }



function createGrid(){
    deleteGrid();
    gridSize = getSize();
  for(i = 0; i<gridSize*gridSize; i++){
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
          if (draw == true){
            elm.style.backgroundColor = `${color}`;
            
          }
          else {}
          });

        elm.addEventListener("mouseup",()=>{
          // getValid(false)
          draw = false
            
        })
        elm.addEventListener("mousedown",()=>{
          draw = true
          // getValid(true)
            
        })
        
      
    });
  };

function clearGrid(){
  createItems();
  items.forEach(elm => {
    elm.style.backgroundColor = '#ffffff'
  })

}


function getColor(){
  color = document.querySelector(".color-wheel");
  color = color.value;
  console.log(color);
if (eraser == true){
  color = '#ffffff'
}

  


return color

}
 


eraserBtn.addEventListener('click',()=>{
  if(eraser == false){
    eraserBtn.style.backgroundColor = 'yellow'
    eraser = true
  }
  else if(eraser == true){
    eraserBtn.style.backgroundColor = 'white'
    eraser = false
  }
})

  btn.addEventListener('click', createGrid);
  clear = document.querySelector('.clear');
  clear.addEventListener('click', ()=> {
    clearGrid()
  })

  createGrid()