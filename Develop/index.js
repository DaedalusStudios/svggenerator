const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');


//Need to validate that a hex code or color keyword is entered
const isHexColor = (input) => /^#([0-9A-Fa-f]{3}){1,2}$/.test(input);
const isColorKeyword = (input) => {
    const colorKeywords = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];
    return colorKeywords.includes(input.toLowerCase());
  };

//This sets true if it's a valid input
const isValidColor = (input) => isHexColor(input) || isColorKeyword(input);

//prompt user for input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter max of 3 characters for your logo:',
            name: 'logoCharacters',
            validate: (input) => {
                const minLength = 1;
                const maxLength = 3;
                if (input.length >= minLength && input.length <= maxLength) {
                    return true;
                  } else {
                    return `Username must be between ${minLength} and ${maxLength} characters.`;
                  }
            },
        },
        {
            type: 'input',
            message: 'What color would you like your logo to be?',
            name: 'logoColor',
            validate: (input) => {
                if (isValidColor(input)) {
                  return true;
                } else {
                  return 'Please enter a valid hexadecimal color code or color keyword.';
                }
            },
        },
        {
            type: 'list',
            message: 'What shape would you like your logo to be?',
            name: 'logoShape',
            choices: ['circle', 'square', 'triangle'],
        },
        {
            type: 'input',
            message: 'What color should the shape be?',
            name: 'logoShapeColor',
            validate: (input) => {
                if (isValidColor(input)) {
                  return true;
                } else {
                  return 'Please enter a valid hexadecimal color code or color keyword.';
                }
            },
        },
    ])
    .then((response) => {
        
        switch (response.logoShape) {
            case 'circle':
                const circle = new shapes.Circle(response.logoCharacters, response.logoColor, response.logoShape, response.logoShapeColor);
                fs.writeFile('logo.svg', circle.renderWithText(), (err) =>
                    err ? console.error(err) : console.log('Generated logo.svg')
                );
                break;
            case 'square':
                const square = new shapes.Square(response.logoCharacters, response.logoColor, response.logoShape, response.logoShapeColor);
                fs.writeFile('logo.svg', square.renderWithText(), (err) =>
                    err ? console.error(err) : console.log('Generated logo.svg')
                );
                break;
            case 'triangle':
                const triangle = new shapes.Triangle(response.logoCharacters, response.logoColor, response.logoShape, response.logoShapeColor);
                console.log(triangle);
                fs.writeFile('logo.svg', triangle.renderWithText(), (err) =>
                    err ? console.error(err) : console.log('Generated logo.svg')
                );
                break;
        }

    
    });
