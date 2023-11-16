const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require ('./lib/shapes.js');

//prompt user for input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter max of 3 characters for your logo:',
            name: 'logoCharacters',
        },
        {
            type: 'input',
            message: 'What color would you like your logo to be?',
            name: 'logoColor',
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
        },
    ])
    .then((response) => {
    switch (response.logoShape) {
        case 'circle':
            shapeMarkup = new shapes.Circle(response.logoShapeColor).render();
            break;
        case 'square':
            shapeMarkup = new shapes.Square(response.logoShapeColor).render();
            break;
        case 'triangle':
            shapeMarkup = new shapes.Triangle(response.logoShapeColor).render();
            break;
    }
    
        var data = 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeMarkup}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.logoColor}">${response.logoCharacters}</text>
    </svg>`;
    // function to write the svg file
    fs.writeFile('logo.svg', data, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
    )
    });
