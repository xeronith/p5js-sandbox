var music, amp;

function preload() {
    music = loadSound("sounds/Music/Music-01.mp3");
}

function setup() {
    createCanvas(500, 500, WEBGL);
    amp = new p5.Amplitude();
    music.play();
}

function draw() {
    background(128);
    var level = map(amp.getLevel(), 0, 1, 50, 400);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(level, level, level);
}