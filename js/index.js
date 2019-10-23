window.onload = draw();

function draw() {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  let color =  ['red','blue','green','black','yellow'];

  for(let i = 0,j = 0; i < color.length,j < 5; i++, j++) {
    let colorStar = color[i];
    ctx.save();
    ctx.translate(100 - Math.floor(Math.random() * 100),
                  100 - Math.floor(Math.random() * 100));
    ctx.beginPath();
    ctx.save();
    ctx.moveTo(75,250);
    ctx.lineTo(150,50);
    ctx.lineTo(225,250);
    ctx.lineTo(50,120);
    ctx.lineTo(250,120);
    ctx.lineTo(75,250);
    ctx.fillStyle = colorStar;
    ctx.fill();
    ctx.restore();
  }

  

  // ctx.beginPath();
  // ctx.save();
  // ctx.moveTo(75,250);
  // ctx.lineTo(150,50);
  // ctx.lineTo(225,250);
  // ctx.lineTo(50,120);
  // ctx.lineTo(250,120);
  // ctx.lineTo(75,250);
  // ctx.fillStyle = 'red';
  // ctx.fill();
  // ctx.restore();
  
  // ctx.beginPath();
  // ctx.save();
  // ctx.translate(300,0);
  // ctx.moveTo(75,250);
  // ctx.lineTo(150,50);
  // ctx.lineTo(225,250);
  // ctx.lineTo(50,120);
  // ctx.lineTo(250,120);
  // ctx.lineTo(75,250);
  // ctx.fillStyle = 'blue';
  // ctx.fill();
  // ctx.restore();

  // ctx.beginPath();
  // ctx.save();
  // ctx.translate(0,300);
  // ctx.moveTo(75,250);
  // ctx.lineTo(150,50);
  // ctx.lineTo(225,250);
  // ctx.lineTo(50,120);
  // ctx.lineTo(250,120);
  // ctx.lineTo(75,250);
  // ctx.fillStyle = 'black';
  // ctx.fill();
  // ctx.restore();

  // ctx.beginPath();
  // ctx.save();
  // ctx.translate(300,300);
  // ctx.moveTo(75,250);
  // ctx.lineTo(150,50);
  // ctx.lineTo(225,250);
  // ctx.lineTo(50,120);
  // ctx.lineTo(250,120);
  // ctx.lineTo(75,250);
  // ctx.fillStyle = 'yellow';
  // ctx.fill();
  // ctx.restore();

  // ctx.beginPath();
  // ctx.save();
  // ctx.translate(150,150);
  // ctx.moveTo(75,250);
  // ctx.lineTo(150,50);
  // ctx.lineTo(225,250);
  // ctx.lineTo(50,120);
  // ctx.lineTo(250,120);
  // ctx.lineTo(75,250);
  // ctx.fillStyle = 'green';
  // ctx.fill();
  // ctx.restore();

  canvas.addEventListener('click', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    const img_data = ctx.getImageData(x, y, 1, 1);
    const pix = img_data.data;
  
    const smallCanvas = document.getElementById('small-canvas');
    smallCanvas.style.backgroundColor = `rgba(${pix.join(',')})`;
  });
};