"use strict";

// Assignment (Mathematical Shapes) Start

function findDiagonal(s) {
  // Function to find the length of the diagonal of a square of a given side.
  return Math.sqrt(2) * s; //Math.sqrt() function returns the square root of a number.
}

console.log(findDiagonal(9).toFixed(4)); //result = 12.7279

//Calculate the area of a triangle of three given sides
const side1 = 5;
const side2 = 6;
const side3 = 7;
const s = (side1 + side2 + side3) / 2;
const area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
console.log(area); //result 14.69

//Area and Perimeter of a circle
class circle {
  //Classes are a template for creating objects. They encapsulate data with code to work on that data.

  constructor(radius) {
    //The constructor method is a special method for creating and initializing an object created with a class.
    this.radius = radius;
    // area method
    this.area = function () {
      return Math.PI * this.radius * this.radius; //Math.PI property represents the ratio of the circumference of a circle to its diameter,
    };
    // perimeter method
    this.perimeter = function () {
      return 2 * Math.PI * this.radius;
    };
  }
}
const c = new circle(4);
console.log("Area =", c.area().toFixed(2)); //result area = 50.27
console.log("perimeter =", c.perimeter().toFixed(2)); // result perimeter = 25.13

// Assignment (Mathematical Shapes) END

//Assignment (Conditional Statements & Loops) Start

function max(x, z) {
  if (x > z) {
    return x;
  } else {
    return z;
  }
}

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

//Assignment (Conditional Statements & Loops) END

function handleNumbers(a, b) {
  const bigger = max(a, b);
  const isEvenNumber = isEven(bigger);

  console.log(`${bigger} is max and it is ${isEvenNumber ? "even" : "odd"}`);
}

handleNumbers(12, 4);
isEven(14);
