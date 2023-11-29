




draw = false;
rainbowFlag = false






function createItems(){
  items = document.querySelectorAll('.item');
  return items
}

function rainbow(){
  if (rainbowFlag == false){
    rainbowFlag = true
  }
  else if(rainbowFlag == true){
    rainbowFlag = false
  }



    

}
size = document.querySelector(".size");
size.addEventListener('change', ()=>{
  
  createGrid()
})

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

          // elm.addEventListener('mouseover', ()=>{
          //   color = document.querySelector(".color-wheel");
          //   if (rainbowFlag == true ){
          //     random = Math.floor(Math.random()*16777215).toString(16);
          //       color.value = random;
          //     elm.style.backgroundColor = `${color.value}`;
            
          //   }
          //   else {
          //     console.log(draw);
          //     console.log(rainbowFlag)
             
          //   }
          //   });

         

        elm.addEventListener("mouseup",()=>{
          
          draw = false
            
        })
        elm.addEventListener("mousedown",()=>{
          draw = true
          
            
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
 
return color

}
 



eraserBtn = document.querySelector('.eraser');


eraserBtn.addEventListener('click',()=>{
 
  color = document.querySelector(".color-wheel");
  color.value = '#ffffff'

})


// btn = document.querySelector('.btn');

// btn.addEventListener('click', createGrid);

  clear = document.querySelector('.clear');
  clear.addEventListener('click', ()=> {
    clearGrid()
  })

rainbowBtn = document.querySelector('.rainbow');
rainbowBtn.addEventListener("click", ()=>{
  rainbow();
  
})
  
  
  
  createGrid()