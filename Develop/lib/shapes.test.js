const { Triangle, Square, Circle } = require("./shapes");

describe('Triangle', () => {
    describe('render', () => {
        it('should return a the exact polygon string', () => {
            const shape = new Triangle("ABC", "red", "Triangle", "blue");
            shape.logoShape = "Triangle"
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});

describe('Square', () => {
    describe('render', () => {
        it('should return a the exact polygon string', () => {
            const shape = new Square("ABC", "red", "Square", "red");
            shape.logoShape = "Square"
            shape.setColor("red");
            expect(shape.render()).toEqual('<rect width="200" height="200" x="50" fill="red" />');
        });
    });
});

describe('Circle', () => {
    describe('render', () => {
        it('should return a the exact Circle string', () => {
            const shape = new Circle("ABC", "red", "Circle", "green");
            shape.logoShape = "Circle"
            shape.setColor("green");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" y="50" fill="green" />');
        });
    });
});