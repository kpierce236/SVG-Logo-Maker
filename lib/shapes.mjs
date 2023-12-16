// Circle class
export class Circle {
  constructor(shapeColor,text,textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }

  // Implement the render method specific to circles
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <!-- Draw a circle -->
    <circle cx="100" cy="100" r="80" fill="${this.shapeColor}" />
    
    <!-- Add text -->
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" dy=".3em" fill="${this.textColor}" font-size="40">
      ${this.text}
    </text>
  </svg>`

  }
}

// Triangle class 
export class Triangle {
  constructor(shapeColor,text,textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }

  // Implement the render method specific to triangles
  render() {
 return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  <!-- Draw a triangle -->
  <polygon points="100,10 40,190 160,190" fill="${this.shapeColor}" />
  
  <!-- Add text -->
  <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${this.textColor}" font-size="40">
  ${this.text}
  </text>
</svg>`
  }

}

// Square class 
export class Square {
  constructor(shapeColor,text,textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }

  // Implement the render method specific to squares
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
    <!-- Draw a green square -->
    <rect width="150" height="150" fill="${this.shapeColor}" />
    
    <!-- Add white text -->
    <text x="150" y="100" text-anchor="middle" dy=".3em" fill="${this.textColor}" font-size="40">
      ${this.text}
    </text>
  </svg>`
  }
}


