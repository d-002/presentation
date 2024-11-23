let font_style;
let slides;

let fps = 60;
let slide_index;
let interval;

let fonts = {
    title: false,
    content: false,
    all_fonts: []
};

function loadPresentation(path) {
    dom["load-file"].style.display = "none";
    dom.main.style = "";

    if (!font_style) {
        font_style = document.createElement("style");
        document.head.appendChild(font_style);
    }

    slides = [];
    slide_index = 0;
    build();

    interval = window.setInterval(mainloop, 1000/fps);
}

function endPresentation() {
    dom.main.style = "";
    dom.innerHTML = "";

    window.clearInterval(interval);

    console.log("End of presentation.");
}

function mainloop() {
    if (slide_index => slides.length) {
        endPresentation();
        return;
    }

    const slide = slides[index];

    switch (slide.state) {
        case "hidden":
            slide.show();
            break;
        case "waiting":
            while (input_queue) {
                slide.input(input_queue.pop());
            }
            break;
        case "done":
            index++;
    }
}

function set_title_font(name, url) {
    fonts.title = true;
    add_font(name, url);
}

function set_font(name, url) {
    fonts.content = true;
    add_font(name, url);
}

function add_font(name, url) {
    if (!fonts.all_fonts.includes(name)) {
        font_style.innerHTML += `
@font-face {
    font-family: NAME;
    src: url("URL");
}`.replace("NAME", name).replace("URL", url);

        fonts.all_fonts.push(name);
    }
}

function newSlide(arguments={}) {
    const slide = new Slide(arguments);
    slides.push(slide);
    return slide;
}
