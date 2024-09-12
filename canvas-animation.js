// Get the canvas element
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables
let leftX = 150;
let rightX = 300;

// Animation loop
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background
  ctx.fillStyle = 'rgb(184, 236, 255)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Clouds
  ctx.fillStyle = 'white';
  
  // Left cloud
  ctx.beginPath();
  ctx.moveTo(leftX, 150);
  ctx.quadraticCurveTo(leftX + 62, 150, leftX - 62, 150);
  ctx.quadraticCurveTo(leftX + 62, 150, leftX + 62, 150);
  ctx.quadraticCurveTo(leftX - 62, 150, leftX - 62, 150);
  ctx.closePath();
  ctx.fill();

  // Right cloud
  ctx.beginPath();
  ctx.moveTo(rightX, 100);
  ctx.quadraticCurveTo(rightX + 62, 100, rightX - 62, 100);
  ctx.quadraticCurveTo(rightX + 62, 100, rightX + 62, 100);
  ctx.quadraticCurveTo(rightX - 62, 100, rightX - 62, 100);
  ctx.closePath();
  ctx.fill();

  // Update cloud positions
  leftX -= 1;
  rightX += 1;

  // Request next frame
  requestAnimationFrame(animate);
}

// Start the animation
animate();