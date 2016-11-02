function getFirstSelector(selector) {
  var elem = document.querySelector(selector);
  return elem;
}

function nestedTarget() {
  var elem = document.getElementById('app');
  var elem2 = elem.querySelector('#nested .target');
  return elem2;
}

function increaseRankBy(n) {
  var elem = document.getElementsByClassName('ranked-list');

  for (var i = 0; i < elem.length; i++) {
    elem[i].innerHTML = (parseInt(elem[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
  var elem = document.getElementById('grand-node').children;

  let current = elem;
  let next = [];

  while(current) {
    if(Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i]);
      }
    }
    if (next.shift() === undefined)
      return current[0];

    current = next.shift();
  }
  return null;

}
