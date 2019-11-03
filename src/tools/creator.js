export default class {
    constructor() {
        this.element = document.createElement('div');
        this.element.style.height = "20px";
        document.body.appendChild(this.element);
    }
    color = "cadetblue";
    addBgc(color = this.color) {
        this.element.style.backgroundColor = color;
    }
    showColor = () => {
        console.log(this.element.style.backgroundColor);

    }
}