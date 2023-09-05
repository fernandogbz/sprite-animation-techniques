const canvas = document.getElementById("#canvas1");
const ctx = canvas.getContext("2d");
console.log(ctx);

const canvasWidth = canvas.width = 600;
const canvasHeight = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "player image";

function animate() {
  ctx.clearRect(0,0, canvasWidth, canvasHeight);
  ctx.fillRect(50, 50, 100, 100);
  requestAnimationFrame(animate);
}
