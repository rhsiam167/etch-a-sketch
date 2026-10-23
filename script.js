const container=document.querySelector('.container');
const random=document.querySelector('#random');
const reset=document.querySelector('#reset');
const black=document.querySelector('#black');
let isMouseDown=false;
window.addEventListener('mousedown',()=>{
    isMouseDown=true;
})
window.addEventListener('mouseup',()=>{
    isMouseDown=false;
})
let color='black'

black.addEventListener('click',()=>{
    color='black';
})
random.addEventListener('click',()=>{
    color='random';
})


function getRandomColor(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}
function paintBox(box){
    if(color=='black')box.style.backgroundColor='black';
    else if(color=='random')box.style.backgroundColor=getRandomColor();
}


function createGrid(num){
    container.innerHTML='';
    container.style.gridTemplateColumns= `repeat(${num},1fr)`;
    container.style.gridTemplateRows= `repeat(${num/2},1fr)`;
    const boxNum=num*num*2;
    for(let i=0;i<boxNum;i++){
        const box=document.createElement('div');
        box.classList.add('box');
        
        box.addEventListener('mouseover',()=>{
            if(!isMouseDown)return;
            paintBox(box);
        })
        box.addEventListener('mousedown',(e)=>{
            e.preventDefault();
            paintBox(box);
        })
        container.appendChild(box);
        
    }


}
reset.addEventListener('click',()=>{
    const boxes=document.querySelectorAll('.box');
    boxes.forEach(box=>{
    box.style.backgroundColor='';
})}
)
createGrid(100);
