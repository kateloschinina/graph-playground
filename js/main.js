const verticesColor = "#77d";

function draw () {
    let cx = setUpCanvas();
    drawDot(cx, 100, 100);
    return true;
}

function drawDot (cx, x, y, r = 3) {
    cx.beginPath();
    cx.arc(x, y, r, 0, Math.PI * 2);
    cx.fillStyle = verticesColor;
    cx.fill();
}

function setUpCanvas () {
    let canvas = document.querySelector("#path-finder");
    let cx = canvas.getContext("2d");
    const windowSize = { width: window.innerWidth, height: window.innerHeight };
    cx.canvas.width = windowSize.width;
    cx.canvas.height = windowSize.height;
    return cx;
}
