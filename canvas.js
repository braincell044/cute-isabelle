
// Get the canvas element
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Function to draw a circle
function drawCircle(x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

// Function to draw a rectangle
function drawRectangle(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

// Function to draw an ellipse
function drawEllipse(x, y, width, height, color) {
  ctx.beginPath();
  ctx.ellipse(x, y, width/2, height/2, 0, 0, 2 * Math.PI);
  ctx.strokeStyle = color;
  ctx.stroke();
}

// Event listener for mouse movement
canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Clear previous drawings
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw a circle where the mouse is
  drawCircle(x, y, 20, 'red');

  // Draw a rectangle following the mouse
  drawRectangle(x - 50, y - 50, 100, 50, 'blue');

  // Draw ellipses at specific coordinates
  drawEllipse(212, 206, 383, 318, 'green');
  drawEllipse(212, 250, 100, 73, 'orange');
  drawEllipse(150, 150, 30, 30, 'purple');
  drawEllipse(278, 150, 30, 30, 'yellow');
});

// Initial drawing
drawCircle(canvas.width / 2, canvas.height / 2, 50, 'pink');


