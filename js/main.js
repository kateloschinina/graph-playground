const verticesColor = "#77d";
const numberOfVertices = 100;

function draw () {
    const windowSize = { width: window.innerWidth, height: window.innerHeight };
    let cx = setUpCanvas(windowSize);
    drawVertices(cx, windowSize, numberOfVertices);
    return true;
}

class Dot {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
}

function drawDot (cx, x, y, r = 3) {
    cx.beginPath();
    cx.arc(x, y, r, 0, Math.PI * 2);
    cx.fillStyle = verticesColor;
    cx.fill();
}

function drawVertices (cx, windowSize, numberOfVertices) {
    for (let i = 0; i < numberOfVertices; i++) {
        const x = Math.random() * windowSize.width;
        const y = Math.random() * windowSize.height;
        drawDot(cx, x, y);
    };
}

function setUpCanvas (windowSize) {
    let canvas = document.querySelector("#path-finder");
    let cx = canvas.getContext("2d");
    cx.canvas.width = windowSize.width;
    cx.canvas.height = windowSize.height;
    return cx;
}
