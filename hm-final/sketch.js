//* 'Week 7 — Posenet', Doug Whitton, October, 2020 *//
//This code has been adapted from the example shared in Week 7 — Posenet.//
//I created the image that will appear above the user's head. Lines 18 — 24, 62 — 69 is new code.//
//
// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];
let img1;
let img2;

function preload() {
    img1 = loadImage('images/space.png');
    img2 = loadImage('images/space2.png');
}

function setup() {
    createCanvas(1280, 960);
    video = createCapture(VIDEO);
    video.size(width, height);

    // Create a new poseNet method with a single detection
    poseNet = ml5.poseNet(video, {
        outputStride: 8,
        quantBytes: 4
    }, modelReady);
    // This sets up an event that fills the global variable "poses"
    // with an array every time new poses are detected
    poseNet.on('pose', function (results) {
        poses = results;
    });
    // Hide the video element, and just show the canvas
    video.hide();
}

function modelReady() {
    select('#status').html('Model Loaded');
}

function mousePressed() {
    console.log(JSON.stringify(poses))
}

function draw() {
    image(video, 0, 0, width, height);
    strokeWeight(2);

    // For one pose only (use a for loop for multiple poses!)
    if (poses.length > 0) {
        const pose = poses[0].pose;
        console.log(pose);

        // Create a orange rectangle for the carrot nose
        fill(0);
        const rightEye = pose.rightEye;
        image(img1, rightEye.x - 450, rightEye.y - 500, 500, 500);

        fill(0);
        const leftEye = pose.leftEye;
        image(img2, leftEye.x, leftEye.y - 500, 500, 500);


        // Create a yellow ellipse for the right eye
        //fill(255, 215, 0);
        //const leftEye = pose.leftEye;
        //ellipse(leftEye.x, leftEye.y, 20, 20);

        //fill(0, 255, 0);
        //const rightShoulder = pose.rightShoulder;
        //ellipse(rightShoulder.x, rightShoulder.y, 20, 20);
    }
}
