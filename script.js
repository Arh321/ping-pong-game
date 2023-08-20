let int1 = null;
let int2 = null;
let int3 = null;

let right = null;
let left1 = null;
let up1 = null;
let down1 = null;



function upleft (){

    const moveup = document.getElementById('target')
    let i = moveup.offsetTop;
    if( i < 11 ){
        i = 13
        moveup.style.top = `${i}px`
    }
    moveup.style.top = `${i - 25}px`
    
}

function upRight (){

    const moveup = document.getElementById('target1')
    let i = moveup.offsetTop;
    if( i < 11 ){
        i = 13
        moveup.style.top = `${i}px`
    }
    moveup.style.top = `${i - 25}px`
    
}

function downLeft (){
    const moveDown = document.getElementById('target')
    let i = moveDown.offsetTop;
    if( i > 180){
        i = 179
        moveDown.style.top = `${i}px`
    }
    moveDown.style.top = `${i + 25}px`
}

function downRight (){
    const moveDown = document.getElementById('target1')
    let i = moveDown.offsetTop;
    if( i > 180){
        i = 179
        moveDown.style.top = `${i}px`
    }
    moveDown.style.top = `${i + 25}px`
}

function rightColid (x,y,i){
    movingBall.style.top = `${y+i1}px`
    movingBall.style.left = `${x+i2}px`
}
function upColid (x,y,i){
    movingBall.style.top = `${y+i1}px`
    movingBall.style.left = `${x+i2}px`
}
function leftColid (x,y,i){
    movingBall.style.top = `${y+i1}px`
    movingBall.style.left = `${x+i2}px`
}
function downColid (x,y,i){
    movingBall.style.top = `${y+i1}px`
    movingBall.style.left = `${x+i2}px`
}

let i1 = 1;
let i2 = 1;
let scores1 = 0
let scores2 = 0
const player1 = document.getElementById('player1') 
const player2 = document.getElementById('player2')  
function ballMove (){
    const positionLefPadle = document.getElementById('target')
    let x1 = positionLefPadle.offsetLeft;
    let y1 = positionLefPadle.offsetTop;
    let movingBall =  document.getElementById('ball')
    let x = movingBall.offsetLeft;
    let y = movingBall.offsetTop;
    document.getElementById('lost').style.display = 'none'
    const positionRightPadle = document.getElementById('target1')
    let x2 = positionRightPadle.offsetLeft;
    let y2 = positionRightPadle.offsetTop;
    
    if(y > 232){
        i1 =  -1
    }
    if(y < 1){
        i1 = i1 * -1  
    }
    
    if(x == x1 && y1 <= y && y < y1 + 48 ){
        i2 = i2 * -1
    }
    if(x == 389 && y2 <= y && y < y2 + 48 ){
        i2 = i2 * -1
    }
    if(x < 2 ){
        i2 = i2 * -1
        scores2++;
        player2.innerText = `${scores1}`
        clearInterval(int3)
        document.getElementById('lost').style.display = 'block'
    }
    if(x > 390){
        i2 = i2 * -1
        scores1++;
        player1.innerText = `${scores1}`
        clearInterval(int3)
        document.getElementById('lost').style.display = 'block'
    }
    movingBall.style.top = `${y+i1}px`
    movingBall.style.left = `${x+i2}px`
}

document.getElementById('up')
.addEventListener("click",() => {
    upleft();
})
document.addEventListener("keypress" , (event) => {
    
    if(event.key == 'w'){
        setTimeout(upleft,5)
    }
    if(event.key == 's'){
        downLeft();
    }
    if(event.key == 'p'){
        upRight();
    }
    if(event.key == 'l'){
        downRight();
    }
    
})
document.getElementById('down')
.addEventListener('click',() => {
    downLeft();
})

document.getElementById('start')
.addEventListener('click',() => {
    int3 = setInterval(ballMove,5)
})


