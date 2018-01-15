const verticesColor = "#77d";
const edgesColor = "#ccc";
const numberOfVertices = 500;

function draw () {
    const windowSize = { width: window.innerWidth, height: window.innerHeight };
    let cx = setUpCanvas(windowSize);
    drawGraph(cx, windowSize, numberOfVertices);
    return true;
}

class Dot {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    drawDot (cx, color, r = 3) {
        cx.beginPath();
        cx.arc(this.x, this.y, r, 0, Math.PI * 2);
        cx.fillStyle = color;
        cx.fill();
    }
}

class Edge {
    constructor (dot1, dot2) {
        this.dot1 = dot1;
        this.dot2 = dot2;
    }

    drawEdge (cx, color, width = 2) {
        cx.beginPath();
        cx.moveTo(this.dot1.x, this.dot1.y);
        cx.lineTo(this.dot2.x, this.dot2.y);
        cx.closePath();
        cx.strokeStyle = color;
        cx.lineWidth = width;
        cx.stroke();
    }
}

function drawGraph (cx, windowSize, numberOfVertices) {
    const arrayOfVertices = [];
    for (let i = 0; i < numberOfVertices; i++) {
        const x = Math.random() * windowSize.width;
        const y = Math.random() * windowSize.height;
        const dot = new Dot(x, y);
        dot.drawDot(cx, verticesColor);
        if (i > 1) {
            const edge = new Edge(arrayOfVertices[i-1], dot);
            edge.drawEdge(cx, edgesColor);
        }
        arrayOfVertices.push(dot);
    };
}

function setUpCanvas (windowSize) {
    let canvas = document.querySelector("#path-finder");
    let cx = canvas.getContext("2d");
    cx.canvas.width = windowSize.width;
    cx.canvas.height = windowSize.height;
    return cx;
}
