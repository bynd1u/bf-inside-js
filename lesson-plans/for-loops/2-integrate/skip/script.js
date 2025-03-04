import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById("skip-them").addEventListener('click', () => {
  debugger;

  // read user values
  let num = readNumber("skip-size");
  let str = readString("user-text");



  let result = "";
  // create a new string with skipped characters

  for (let i = 0; i < str.length; i += num) {
    result += str[i];
  }

  // display the skipped string
  display("skipped-output", result);
});
