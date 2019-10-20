window.onload = draw();
function draw() {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(75,250);
  ctx.lineTo(150,50);
  ctx.lineTo(225,250);
  ctx.lineTo(50,120);
  ctx.lineTo(250,120);
  ctx.lineTo(75,250);
  ctx.fillStyle = 'red';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(375,250);
  ctx.lineTo(450,50);
  ctx.lineTo(525,250);
  ctx.lineTo(350,120);
  ctx.lineTo(550,120);
  ctx.lineTo(375,250);
  ctx.fillStyle = 'blue';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(375,550);
  ctx.lineTo(450,350);
  ctx.lineTo(525,550);
  ctx.lineTo(350,420);
  ctx.lineTo(550,420);
  ctx.lineTo(375,550);
  ctx.fillStyle = 'black';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(75,550);
  ctx.lineTo(150,350);
  ctx.lineTo(225,550);
  ctx.lineTo(50,420);
  ctx.lineTo(250,420);
  ctx.lineTo(75,550);
  ctx.fillStyle = 'yellow';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(225,400);
  ctx.lineTo(300,200);
  ctx.lineTo(375,400);
  ctx.lineTo(200,270);
  ctx.lineTo(400,270);
  ctx.lineTo(225,400);
  ctx.fillStyle = 'green';
  ctx.fill();


  canvas.addEventListener('click', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    const img_data = ctx.getImageData(x, y, 1, 1);
    const pix = img_data.data;

    const smallCanvas = document.getElementById('small-canvas');
    smallCanvas.style.backgroundColor = `rgba(${pix.join(',')})`;
  });
}