import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById("pyramid-it").addEventListener('click', () => {
  debugger;

  // read user text
  let txt = readString("to-pyramid");
  // create the pyramid

  let result = "";

  for (let i = 0; i < txt.length; i++) {
    result += txt.slice(i) + "\n";
  }

  // display the pyramid
  display("pyramided", result);
});
