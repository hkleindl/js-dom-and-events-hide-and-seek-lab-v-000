function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = n + parseInt(rankedLists[i].innerHTML);
  }
}
