function draw () {
    let canvas = document.querySelector("#path-finder");
    let cx = canvas.getContext("2d");
    const windowSize = { width: window.innerWidth, height: window.innerHeight };
    cx.canvas.width = windowSize.width;
    cx.canvas.height = windowSize.height;
    return true;
}
