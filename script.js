let dom = {
    "main": null
};

function updateSize() {
    const html = document.body.parentNode;
    const width = html.clientWidth, height = html.clientHeight;

    html.style = "--size: "+Math.min(width, height)+"px";
}

window.onload = () => {
    Array.from(Object.keys(dom)).forEach(id => dom[id] = document.getElementById(id));

    updateSize();
    window.addEventListener("resize", updateSize);
};
