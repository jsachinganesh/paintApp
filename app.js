const canvas = document.querySelector('canvas');
const range = document.querySelector('#range');
const colors = document.querySelector('.colors-container');
const container = document.querySelector('.container');
const reset = document.querySelector('.reset');
const ear = document.querySelector('.ear');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'skyblue';

canvas.width = 800;
canvas.height = 450;



let save;

let painting = false;

function down(e) {
    painting = true;
    ctx.beginPath();
}

function move(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    if (painting) { 
        ctx.lineTo(x, y)
        ctx.lineWidth = range.value
        ctx.stroke();
        
    } 
}

function up(e) {
    painting = false;
}

function getColor(e) {
    const backgroundColor = e.target.style.backgroundColor;
    if (e.target.style.backgroundColor) {
        clear();
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // container.style.backgroundColor = backgroundColor;
    }
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function earser() {
    ear.classList.toggle('active')
    if (ear.classList.contains('active')) {
        ctx.globalCompositeOperation = 'destination-out';
    
    } else {
        console.log(ear.classList);
        ctx.globalCompositeOperation = 'source-over';
    }
}
canvas.addEventListener('mousemove', move);
canvas.addEventListener('mousedown', down);
canvas.addEventListener('mouseup', up);
colors.addEventListener('click', getColor);
reset.addEventListener('click', clear);
ear.addEventListener('click', earser);
