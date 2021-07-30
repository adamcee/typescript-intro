/**
 * EXERCISE: Make this script work!
 * There are two signicant problems with this script.
 * Once you solve the first problem, you will encounter the second!
 * 
 * Your browser console will give you error messages and the console.log messages in this script.
 * They will guide you right to where the problem is.
 * BE SURE YOU HAVE CHROME DEVTOOLS OPEN.
 * 
 * Hint: Look at https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
 */
console.log('setSizeScript.js');

function makeSetSize(size) {
  console.log('creating makeSetSize size ' + size);

  return function () {
    console.log(`setting font size to ${size}`);
    document.body.style.fontSize = size + 'px';
  };
}

var setSize12 = makeSetSize(12);
var setSize14 = makeSetSize(14);
var setSize16 = makeSetSize(16);

console.log('setSize functions created');

var size12Button = document.getElementById('size-12')
size12Button.onclick = setSize12();

var size14Button = document.getElementById('size-14')
size14Button.onclick = setSize14();

var size16Button = document.getElementById('size-16')
size16Button.onclick = setSize16();