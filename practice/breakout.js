const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const ballRadius = 10;

let x = Math.random()*800;
let y = Math.random()*800;

let dx = 2;
let dy = -2;

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
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}

function drawBall2() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
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

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius || y + dy > canvas.height - ballRadius) {
    dy = -dy;
  }

    if (x + dx2 > canvas.width - ballRadius || x + dx2 < ballRadius) {
        dx2 = -dx2;
    }
    if (y + dy2 < ballRadius || y + dy2 > canvas.height - ballRadius) {
        dy2 = -dy2;
    }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  //move the ball
  x += dx;
  y += dy;

  x += dx2;
  x += dy2;

  requestAnimationFrame(draw);
}

draw()