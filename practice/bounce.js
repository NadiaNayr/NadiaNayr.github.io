const canvas = document.getElementById("MyCanvas")
const ctx = canvas.getContext("2d")

let x = 0;
let y = 2;
let vx = 0;
let vy = 2;

function move(){
    ctx.clearRect(x, 0, 800, 800);
    x = x + vx;
    y = y + vy;

    if (x > 700 || x < 0){
        x = x * -1;
    }
    if (y > 700 || y < 0){
        y = y * -1;
    }
    ctx.fillRect(x, y, 50, 50);
    requestAnimationFrame(move);
}
move();