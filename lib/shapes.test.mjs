// circle.test.js
import { Circle } from './shapes.mjs'; 

describe('Circle class', () => {
  it('renders a circle correctly', () => {
    const circle = new Circle('blue', 'VJP', 'white');
    const rendered = circle.render();

    
    expect(rendered).toContain('<circle');
    expect(rendered).toContain('<text');
    expect(rendered).toContain('fill="blue"');

  });
});

// triangle.test.js
import { Triangle } from './shapes.mjs';
describe('Triangle class', () => {
  it('renders a triangle correctly', () => {
    const triangle = new Triangle('red', 'KAP', 'black');
    const rendered = triangle.render();

    expect(rendered).toContain('<polygon');
    expect(rendered).toContain('<text');
    expect(rendered).toContain('fill="red"');
  });
});

// square.test.js
import { Square } from './shapes.mjs'; 

describe('Square class', () => {
  it('renders a square correctly', () => {
    const square = new Square('green', 'MVP', 'yellow');
    const rendered = square.render();

    expect(rendered).toContain('<rect');
    expect(rendered).toContain('<text');
    expect(rendered).toContain('fill="green"');
  });
});
