const inquirer = require('inquirer');

  inquirer
  .prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
      },
      {
        type: 'input',
        message: 'Enter text color:',
        name: 'textColor',
      },
      {
        type: 'list',
        message: 'Select a shape:',
        name: 'shape',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        message: 'Enter shaper color:',
        name: 'shapeColor',
      },
  ])
  .then((data) => {
    console.log(`Selections:${data.text},${data.textColor},${data.shape},${data.shapeColor}`);
  })
  .catch((error) => {
    console.error('An error occured: ', error);
  });