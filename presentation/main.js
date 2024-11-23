function build() {
    set_title_font("cabin", "presentation/cabin.ttf");
    set_font("outfit", "presentation/outfit.ttf");

    let slide = newSlide();
    slide.insert(new Element("title", {
        text: "This is a title"
    });
    slide.insert(new Element("subtitle", {
        text: "this is a test presentation."
    }));
    slide.insert(new Element("folder", {
        direction: "row",
        elements: [
            new Element("text", "this is text on the left."),
            new Element("text", "this is text in the middle."),
            new Element("image", "presentation/background.jpg")
        ]
    });
    slide.set("background", "presentation/background.jpg");
}
