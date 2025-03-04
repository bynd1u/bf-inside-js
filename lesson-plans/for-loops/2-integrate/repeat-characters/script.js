import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById("repeat-them").addEventListener('click', () => {
  debugger;

  // read user values
  let txt = readString("user-text");
  let numOfTimes = readNumber("number-of-times");
  // repeat the characters in the text
  let result = "";
  for (let i = 0; i < txt.length; i++) {
    for (let j = 0; j < numOfTimes; j++) {
      result += txt[i];
    }
  }

  // display the text with repeated characters
  display("repeated-output", result);
});
