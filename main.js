const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// data
const data = [
  { date: 1, total: 10 },
  { date: 2, total: 20 },
  { date: 3, total: 60 },
  { date: 4, total: 40 },
  { date: 5, total: 55 },
  { date: 6, total: 20 },
  { date: 7, total: 50 },
  { date: 8, total: 30 },
];

// canvas size
canvas.width = 600;
canvas.height = 400;

const margin = 20;

const chartWidth = canvas.width - 2 * margin;
const chartHeight = canvas.height - 2 * margin;

// x y axis
ctx.beginPath();
ctx.moveTo(margin, margin); // top left
ctx.lineTo(margin, canvas.height - margin); // bottom left
ctx.lineTo(canvas.width - margin, canvas.height - margin); // bottom right
ctx.stroke();

const spacingX = chartWidth / (data.length - 1);
const spacingY = chartHeight / 10;

console.log(spacingY);

// x labels
for (let i = 0; i < data.length; i++) {
  let x = i * spacingX + margin;
  let y = canvas.height - margin; // Y pos start from bottom (0)

  // tick
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + 5);
  ctx.stroke();
  // text
  const d = data[i];
  ctx.fillText(d.date, x - 3, y + 15);
}

// y labels
for (let i = 0; i <= 10; i++) {
  let x = margin;
  let y = canvas.height - margin - i * spacingY;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - 5, y);
  ctx.stroke();
  ctx.textAlign = "right";
  ctx.fillText(i * 10, x - 5, y + 5);
}

// line chart
ctx.beginPath();
for (let i = 0; i < data.length; i++) {
  const d = data[i];

  let x = i * spacingX + margin;
  const yScale = chartHeight / 100;
  let y = canvas.height - margin - d.total * yScale;

  if (i == 0) {
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
  }
}
ctx.strokeStyle = "red";
ctx.stroke();
