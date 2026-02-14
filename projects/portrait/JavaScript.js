alert("oooga booga");
const bob = "bob";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//draw a green rectangle
ctx.fillStyle = "green";
ctx.fillRect(100, 100, 200, 300);

//draw a red sqaure
ctx.fillStyle = "red";
ctx.fillRect(350, 100, 50, 50);

//draw a circle
const ctx = document.getElementById('canvas').getContext('2d');
ctx.arc(50, 50, 40, 0, 7); ctx.fill(); 