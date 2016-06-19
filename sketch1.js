var music, amp;

function preload() {
    music = loadSound("sounds/Music/Music-01.mp3");
}

function setup() {
    createCanvas(500, 500);
    amp = new p5.Amplitude();
    music.play();
}

function draw() {
    background(0);
    fill(255);
    var level = map(amp.getLevel(), 0, 1, 50, 400);
    ellipse(width / 2, height / 2, level, level);
}