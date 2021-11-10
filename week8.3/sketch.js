//* p5.accessibility, Processing Foundation and NYU ITP, November 10, Version 2.1, https://p5js.org/libraries, Public License*//

function setup() {
    noCanvas();
    var myVoice = new p5.Speech()
}

var myVoice = new p5.Speech();


function setup() {
    createCanvas(400, 400);
    background(255, 188, 217, 100);
    textSize(16);
    textAlign(CENTER);
    text("click me", width / 2, height / 2);

}

function draw() {

}

function mousePressed() {
    if (mouseX < width && mouseY < height) {
        myVoice.speak('Hello Holly');
    }
}
