class shape  {
    constructor(logoCharacters, logoColor, logoShape, logoShapeColor) {
        this.logoCharacters = logoCharacters;
        this.logoColor = logoColor;
        this.logoShape = logoShape;
        this.logoShapeColor = logoShapeColor;
        this.svgTemplate = "";
};
    setColor(color) {
        this.logoColor = color;
    }
    render() {
        return this.svgTemplate;
    }
    renderWithText() {
        var top = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
        var middle = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoColor}">${this.logoCharacters}</text>`;
        var bottom = `</svg>`;
        return top + this.render() + middle + bottom;
    }
};


class Triangle extends shape {
    constructor(logoCharacters, logoColor, logoShape, logoShapeColor, shapeData, svgTemplate) {
        super(logoCharacters, logoColor, logoShape, logoShapeColor);
        this.shapeData = '150, 18 244, 182 56, 182';
        this.svgTemplate = `<polygon points="${this.shapeData}" fill="${this.logoShapeColor}" />`;
    }
};

 class Square extends shape {
    constructor(logoCharacters, logoColor, logoShape, logoShapeColor, width, height, svgTemplate) {
        super(logoCharacters, logoColor, logoShape, logoShapeColor);
        this.width = '200';
        this.height = '200';
        this.svgTemplate = `<rect width="${this.width}" height="${this.height}" x="50" fill="${this.logoShapeColor}" />`;
    }
 };

class Circle extends shape{
    constructor(logoCharacters, logoColor, logoShape, logoShapeColor, width, height, radius, svgTemplate) {
        super(logoCharacters, logoColor, logoShape, logoShapeColor);
        this.width = '150';
        this.height = '100';
        this.radius = '80';
        this.svgTemplate = `<circle cx="${this.width}" cy="${this.height}" r="${this.radius}" y="50" fill="${this.logoShapeColor}" />`;
    }
};

module.exports = {
    Triangle,
    Square,
    Circle
}