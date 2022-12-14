const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let sizeFraction = 1; // if changed then mouse movement has to be mapped

let width = Math.floor(window.innerWidth * sizeFraction);
let height = Math.floor(window.innerHeight * sizeFraction);

if (width / 2 % 2 == 0) width -= 1;
if (height / 2 % 2 == 0) height -= 1;

canvas.width = width;
canvas.height = height;

let player = {
    x: width / 2,
    y: height / 2,
    size: 0,
    color: "white",
};

let enemies = [];
// let pX = width / 2;
// let pY = height / 2;
// let size = 0;

let FPS = 60;
let UPS = 60; //updates per second

// drawState();

function start () {
    //speed is pixels per second
    enemies.push({ x: width / 2, y: height / 2, direction: Math.PI / 2, speed: 100, size: 40, color: "red" });
    // schedule the first one.
    setTimeout(drawWrapper, 0);
    draw();
    setTimeout(physicsWrapper, 0);
    document.onmousemove = mouseTracker;
    console.log("started");
}

start();

function resize () {
    width = window.innerWidth * sizeFraction;
    height = window.innerHeight * sizeFraction;

    if (width / 2 % 2 == 0) width -= 1;
    if (height / 2 % 2 == 0) height -= 1;

    canvas.width = width;
    canvas.height = height;

    // start();
    drawWrapper();
}

window.addEventListener("resize", resize);
