import { Circle, Triangle, Square } from './lib/shapes.mjs'; 
import inquirer from 'inquirer';
import fs from 'fs';


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
      message: 'Enter the shape color:',
      default: 'blue',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color:',
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
    const shape = new ShapeClass(answers.shapeColor,answers.text, answers.textColor);
  
    // Write the SVG code to a file named logo.svg
    fs.writeFileSync('logo.svg', shape.render());
  
    console.log('Generated logo.svg');
  });
