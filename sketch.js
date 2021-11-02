//Walsh, K (2021) sketch.js (Source code].

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
        fill(255, 165, 0);
        const nose = pose.nose;
        rect(nose.x, nose.y, 80, 25);

        // Create a back rectangle for the hat
        fill(0);
        const rightEye = pose.rightEye;
        rect(rightEye.x + 10, rightEye.y - 150, 100, 100);

        //Create white ellipse for the snowball
        fill(255, 255, 255);
        const leftHip = pose.leftHip;
        ellipse(leftHip.x, leftHip.y, 50, 50);

        //Create second white ellipse for the snowball
        fill(255, 255, 255);
        const leftKnee = pose.leftKnee;
        ellipse(leftKnee.x, leftKnee.y, 50, 50);

        //Create third white ellipse for the snowball
        fill(255, 255, 255);
        const leftAnkle = pose.leftAnkle;
        ellipse(leftAnkle.x, leftAnkle.y, 50, 50);


        // Create a yellow ellipse for the right eye
        //fill(255, 215, 0);
        //const leftEye = pose.leftEye;
        //ellipse(leftEye.x, leftEye.y, 20, 20);

        //fill(0, 255, 0);
        //const rightShoulder = pose.rightShoulder;
        //ellipse(rightShoulder.x, rightShoulder.y, 20, 20);
    }
}
