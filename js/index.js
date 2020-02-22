function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const color =  ['red','blue','green','yellow','black'];

  for(let i = 0; i < 5; i++) {
    const colorStar = color[i];
    const step = Math.PI / spikes;
    let rotation = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;

    ctx.translate(Math.floor(Math.random()*(100)), Math.floor(Math.random()*(100)));
    ctx.beginPath();
    ctx.save();

    for (k = 0; k < spikes; k++) {
      x = cx + Math.cos(rotation) * outerRadius;
      y = cy + Math.sin(rotation) * outerRadius;
      ctx.lineTo(x, y);
      rotation += step;
      x = cx + Math.cos(rotation) * innerRadius;
      y = cy + Math.sin(rotation) * innerRadius;
      ctx.lineTo(x, y);
      rotation += step;
    }

    ctx.moveTo(cx, cy - outerRadius);
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = colorStar;
    ctx.fill();
    ctx.restore();
  }
  
  canvas.addEventListener('click', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    const img_data = ctx.getImageData(x, y, 1, 1);
    const pix = img_data.data;  
    const smallCanvas = document.getElementById('small-canvas');
    smallCanvas.style.backgroundColor = `rgba(${pix.join(',')})`;
  });
};

drawStar(100, 100, 5, 100, 50);