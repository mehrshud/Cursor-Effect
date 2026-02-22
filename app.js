let cursorEffect = document.getElementById('cursor-effect');
let ctx = cursorEffect.getContext('2d');

// Set the canvas dimensions to the window size
(cursorEffect.width = window.innerWidth), (cursorEffect.height = window.innerHeight);

// Define the cursor object
let cursor = {
  x: 0,
  y: 0,
  size: 10,
  color: 'rgba(255, 0, 0, 0.5)'
};

// Update the cursor position on mouse move
document.addEventListener('mousemove', (e) => {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
});

// Draw the cursor on the canvas
function drawCursor() {
  ctx.clearRect(0, 0, cursorEffect.width, cursorEffect.height);
  ctx.beginPath();
  ctx.arc(cursor.x, cursor.y, cursor.size, 0, Math.PI * 2);
  ctx.fillStyle = cursor.color;
  ctx.fill();
}

// Animate the cursor effect
function animate() {
  drawCursor();
  requestAnimationFrame(animate);
}

// Start the animation
animate();