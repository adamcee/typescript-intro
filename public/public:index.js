function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}