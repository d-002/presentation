let dom = {
    "load-file": null,
    main: null
};

let input_queue;

function updateSize() {
    const html = document.body.parentNode;
    const width = html.clientWidth, height = html.clientHeight;

    html.style = "--size: "+Math.min(width, height)+"px";
}

function pressKey(evt) {
    input_queue.push(evt.key);
}

window.onload = () => {
    Object.keys(dom).forEach(id => dom[id] = document.getElementById(id));

    updateSize();
    window.addEventListener("resize", updateSize);
    dom.main.addEventListener("keydown", pressKey);

    loadPresentation();
};
