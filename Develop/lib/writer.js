const fs = require('fs');

function writeSVG(data) {
    fs.writeFile('logo.svg', data, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg')
    )
}


