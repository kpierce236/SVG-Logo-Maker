import { Circle, Triangle, Square } from './lib/shapes.mjs'; 
import inquirer from 'inquirer';
import fs from 'fs';
import {cssColorNames} from './colorsData.js';
import MaxLengthInputPrompt from 'inquirer-maxlength-input-prompt';

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

// Regular expression for validating hexadecimal color
const hexColorRegExp = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

// Custom validation function to ensure the entered value matches one of the CSS color names or a hexadecimal color code
const validateColor = function(value) {
  if (cssColorNames.includes(value.toLowerCase().replace(/\s/g, '')) || value.match(hexColorRegExp)) {
    return true;
  }
  return `Please enter a valid CSS color name or hexadecimal color code.`;
};

// Define the prompts for user input
const prompts = [
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Select the shape color:',
      validate: validateColor,
    },
    {
      type: 'maxlength-input',
      name: 'text',
      message: 'Enter text:',
      maxLength: 3
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Select the text color:',
      validate: validateColor,
    },
  ];
  
  // Run the prompts to collect user input
  inquirer.prompt(prompts).then((answers) => {

    // Determine the shape class based on user input
    let ShapeClass;
    switch (answers.shape) {
      case 'Circle':
        ShapeClass = Circle;
        break;
      case 'Triangle':
        ShapeClass = Triangle;
        break;
      case 'Square':
        ShapeClass = Square;
        break;
      default:
        console.error('Invalid shape selected.');
        process.exit(1);
    }
  
    // Create an instance of the selected shape
    const shape = new ShapeClass(answers.shapeColor.toLowerCase().replace(/\s/g, ''),answers.text, answers.textColor.toLowerCase().replace(/\s/g, ''));
  
    // Write the SVG code to a file named logo.svg
    fs.writeFileSync('logo.svg', shape.render());
  
    console.log('Generated logo.svg');
  });
