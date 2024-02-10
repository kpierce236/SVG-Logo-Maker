import { Circle, Triangle, Square } from './lib/shapes.mjs'; 
import inquirer from 'inquirer';
import fs from 'fs';
import MaxLengthInputPrompt from 'inquirer-maxlength-input-prompt';
 

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)


// Define the prompts for user input
const prompts = [
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'Select the shape color:',
      choices: ['Black','Blue','Red','Green','Yellow','Orange','Pink','Purple'],
    },
    {
      type: 'maxlength-input',
      name: 'text',
      message: 'Enter text:',
      maxLength: 3
    },
    {
      type: 'list',
      name: 'textColor',
      message: 'Select the text color:',
      choices: ['White', 'Black', 'Blue','Red','Green','Yellow','Orange','Pink','Purple'],
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
