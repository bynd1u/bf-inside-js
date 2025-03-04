import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById("do-math").addEventListener('click', () => {
  debugger;

  // read user values
  let num1 = readNumber("left");
  let num2 = readNumber("right")
  // use a for loop to multiply the two numbers
  let result = 0;
  for (let i = 0; i < num2; i++) {
    result += num1;
  }
  
  // display the product
  display("product", result);
  
});
