import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById("repeat-it").addEventListener('click', () => {
  debugger;

  // read user values
  let str = readString("user-text");
  let num = readNumber("number-of-times");

  let result = "";
  // repeat the string
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < str.length; j++) {
      result += str[j];
    }
  }

  // display the repeated string
  display("repeated-output", result);
});
