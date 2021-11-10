//* 'Week 6 — loadSounds', Doug Whitton, October, 2020 *//
//This code has been adapted from the example shared in Week 6 — loadSounds.//
//I added the slider change the volume of the sound. Lines 5 — 21 is new code.//

let song;
let slider;

function preload() {
    song = loadSound('assets/assets_sounds_squiggle.mp3');
}

function setup() {
    createCanvas(720, 200);
    slider = createSlider(0, 1, 0.5, 0.01);
    song.play();
}

function draw() {
    background(0);
    song.setVolume(slider.value());
}

//Class Code//

function mousePressed() {
    if (song.isPlaying()) {
        // .isPlaying() returns a boolean
        song.stop();
        background(255, 0, 0);
    } else {
        song.play();
        background(0, 255, 0);
    }
}
