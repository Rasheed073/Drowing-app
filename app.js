const canvas = document.getElementById("canvas")
const increasBtn = document.getElementById("increase")
const decreasBtn = document.getElementById("decrease")
const sizeEl = document.getElementById("size")

const clearEl = document.getElementById("clear")
const colorEl = document.getElementById('color')
const ctx = canvas.getContext("2d")

let size = 20;
let isPressed = false;
let color = "black"
let x= undefined
let y = undefined;

canvas.addEventListener("mousedown",(e)=>{
    isPressed = true

    x = e.offsetX;
    y = e.offsetY;
    
})   

canvas.addEventListener("mouseup",(e)=>{
    isPressed = false

    x = undefined;
    y = undefined; 
    
})
canvas.addEventListener("mousemove",(e)=>{
    if (isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY;

        drawCircle(x2,y2)
        drowLine(x,y, x2,y2)
        x = x2;
        y = y2;
    }
   
})


function drawCircle(x,y){
    ctx.beginPath()
    ctx.arc(x,y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill();
}



function drowLine(x1, y1, x2, y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.fillStyle = color
    ctx.lineWidth = size
    ctx.stroke();
}

increasBtn.addEventListener("click", () =>{
    size+= 5

    if (size>50){
        size= 50
    }
    updateSizeOnScreen()
})

decreasBtn.addEventListener("click", () =>{
    size-= 5

    if (size <5 ){
        size = 5
    }
    updateSizeOnScreen()
    
})

colorEl.addEventListener('change', (e)=>{
 color = e.target.value;
})

clearEl.addEventListener('click', () => {
    ctx.clearRect(0,0, canvas.width,canvas.height)
})

function updateSizeOnScreen(){
    sizeEl.innertext = size
}

//7/5