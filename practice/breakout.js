const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const ballRadius = 100

const balls = [];

for(let i = 0; i < 10; i+=1){
    const ball1 = {
        x:Math.random()*800,
        y:Math.random()*800,
        dx:2,
        dy:-2
    };
    balls.push(ball1);
}

//ball2
let x2 = Math.random()*800;
let y2 = Math.random()*800;
let dx2 = 2;
let dy2 = -2;

const paddleHeight = 10;
const paddleWidth = 75;

let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

let interval = 0;

const brickRowCount = 3;
const brickColumnCount = 8;
const brickWidth = 75;
const brickHeight = 30;
const brickPadding = 15;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;


function drawBricks(){
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
        ctx.fillRect(
            brickOffsetLeft + (brickWidth + brickPadding) * c,
            brickOffsetTop + (brickWidth + brickPadding) * r,
            brickWidth,
            brickHeight,
        );


    }
  }
}

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function drawBall() {
    for(const b of balls){
        ctx.beginPath();
        ctx.arc(b.x, b.y, ballRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}

function drawBall2() {
  ctx.beginPath();
  ctx.arc(x2, y2, ballRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawBall2();
  drawPaddle();
  drawBricks();

    for(const b of balls){
        if (b.x + b.dx > canvas.width - ballRadius || b.x + b.dx < ballRadius) {
            b.dx = -b.dx;
        }
        if (b.y + b.dy < ballRadius || b.y + b.dy > canvas.height - ballRadius) {
            b.dy = -b.dy;
        }
    }

    if (x2 + dx2 > canvas.width - ballRadius || x2 + dx2 < ballRadius) {
        dx2 = -dx2;
    }
    if (y2 + dy2 < ballRadius || y2 + dy2 > canvas.height - ballRadius) {
        dy2 = -dy2;
    }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  //move the ball
  for(const b of balls){
    b.x += b.dx;
    b.y += b.dy;

  }

  x2 += dx2;
  y2 += dy2;

  requestAnimationFrame(draw);
}

draw()