const canvas = document.getElementById("MyCanvas")
const ctx = canvas.getContext("2d")

let x = 3;
let y = 2;
let vx = 3;
let vy = 4;
let gravity = 1;

function move(){
    ctx.clearRect(x, 0, 800, 800);
    x = x + vx;
    y = y + vy;
    vy = vy + gravity;
    


    if (x > 750 || x < 0){
        vx = vx * -1;
    }
    if (y > 750 || y < 0){
        vy = vy * -1;
    }
    ctx.fillRect(x, y, 50, 50);
    requestAnimationFrame(move);
}
move();