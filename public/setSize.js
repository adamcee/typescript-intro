/**
 * Creates a function which when called will set the Document font size. 
 * @param {number} size 
 *        Font size to set
 * @param {object} document 
 *        The browser Document object.
 * @returns {function}
 *          Returns a function which will set the font size for the document to desired size - our `size` argument.
 */
function makeSetSize(size, document) {
  console.log('creating makeSetSize size ' + size);

  return function () {
    document.body.style.fontSize = size + 'px';
    console.log(`document font size set to ${size}`);
  };
}
