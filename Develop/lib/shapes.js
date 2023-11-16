class Triangle {
    constructor(fill) {
    this.fill = fill;
    this.shapeData = '150, 18 244, 182 56, 182';
    this.render = function() {
        return `<polygon points="${this.shapeData}" fill="${this.fill}" />`;
        }
    }
};

 class Square {
    constructor(fill) {
        this.fill = fill;
        this.width = '150';
        this.height = '150';
        this.render = function() {
            return `<rect width="${this.width}" height="${this.height}" fill="${this.fill}" />`;
        }
    }

 }

class Circle {
    constructor(fill) {
    this.fill = fill;
    this.width = '150';
    this.height = '100';
    this.radius = '80';
    this.render = function() {
        return `<circle cx="${this.width}" cy="${this.height}" r="${this.radius}" fill="${this.fill}" />`;
        }
    }
};

module.exports = {
    Triangle,
    Square,
    Circle
}