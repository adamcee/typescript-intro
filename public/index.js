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

var getDocument = () => document;

var setSize12 = makeSetSize(12, getDocument);
var setSize14 = makeSetSize(14, getDocument);

console.log('setSize functions created');

var size12Button = document.getElementById('size-12');
size12Button.onclick = setSize12();

document.getElementById('size-14').onclick = setSize14();

setOnClickHandlerFor('size-16', makeSetSize(16, document));

/**
 * Set the onclick callback function for element with ID elementID to the function we pass in as an argument.
 * @param   {string} elementID 
 * @param   {function} callback 
 * @returns null
 */
function setOnClickHandlerFor(elementID, callback) {
  console.log(`setting onclick callback function for element with id ${element} to ${callback.toString()}`);
  document.getElementById(elementID).onclick = callback;
}