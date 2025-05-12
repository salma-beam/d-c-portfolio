let winWidth = 800;
let winHeight = 90;

// Render a simple sine wave. Original by Daniel Shiffman.

let xspacing = 23.2; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 20.0; // Height of wave
let period = 600.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

let sentence = "Salma Noor Mahomed";
let sentenceArray = [];

function setup() {
  // Create the canvas (adjust width and height as needed)
  let canvas = createCanvas(winWidth, winHeight);

  canvas.parent('canvasForHTML');
  w = width + 400;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
  sentenceArray = sentence.split("");

}
function draw() {
  background('#F5F4ED');
  calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.025;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = cos(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(0);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < sentenceArray.length; x++) {
    //ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
    textSize(26);
    textFont('Helvetica Neue Medium');
    fill("black");
    text(sentenceArray[x],x * xspacing, height / 2 + yvalues[x], 26, 26);
  }
}

