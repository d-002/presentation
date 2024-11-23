class Slide {
    constructor(args) {
        this.data = {
            contents: null,
            background: null
        };
        Object.keys(this.data).forEach(key => this.data[key] = this.format(key, this.data[key]));

        Object.keys(args).forEach(key => this.set(key, args[key]));
    }

    set(key, value) {
        if (Object.keys(this.data).includes(key)) this.data[key] = this.format(key, value);
    }

    insert(element, index=null) {
        // index == null: append at the end
        if (index == null) index = this.data.content.length;

        this.data.content[index] = element;

        return data;
    }

    format(key, value) {
        switch(key) {
            case "background":
                if (value) return 'url("'+value+'")';
                return "null";
            case "contents":
                if (value) return value;
                return [];
            default:
                return value;
        }
    }

    show() {
        dom.main.innerHTML = "";

        dom.main.style = "background: "+this.data.background;
        dom.innerHTML = "foobarbaz";
    }
}
