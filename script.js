const container= document.querySelector(".container");
const clear = document.getElementById("clear");
const red = document.getElementById("red");
const black = document.getElementById("black");
const size = document.querySelectorAll(".btn");

let grid=16;
let color='black';
document.getElementById('16').classList.add('active');
black.classList.add('active');
function createGrid(grid) {
    container.innerHTML = '';
    container.style.display='grid';
    container.style.gridTemplateRows=`repeat(${grid},1fr)`;
    container.style.gridTemplateColumns=`repeat(${grid},1fr)`;
    let width=576/grid;
        let height=576/grid;
        for(let i=0;i<grid*grid;i++){
            let box=document.createElement('div');
            box.classList.add('box')
            box.style.width=width+'px';
            box.style.height=height+'px';
            box.style.border="0.5px dashed #e5e7eb";
            container.appendChild(box);
        }
        const boxes=document.querySelectorAll(".box");
boxes.forEach((box)=>{
    box.addEventListener('mouseover',()=>{
        paintBox(box);
    })
})

}
createGrid(grid);

size.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        size.forEach((btn)=>btn.classList.remove('active'));
        e.target.classList.add('active');
        grid=Number(e.target.innerText);
        
        createGrid(grid);
        
        
    })
})

function paintBox(box) {
    if(color=='black'){
    box.style.backgroundColor='#1f2937';
    
    box.style.border='#1f2937';}
else if(color=='red'){
    box.style.backgroundColor="#d64545";
    
    box.style.border="#d64545";}
}



red.addEventListener('click',()=>{color='red';black.classList.remove('active');
    red.classList.add('active');})
black.addEventListener('click',()=>{color='black';black.classList.add('active');
    red.classList.remove('active');})
clear.addEventListener('click',()=>{
    const clearBox=document.querySelectorAll(".box");
    clearBox.forEach((box)=>{
        box.style.backgroundColor="";
    })
})




