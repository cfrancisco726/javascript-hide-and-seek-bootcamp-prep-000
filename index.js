function getFirstSelector(selector){
  var element = document.querySelector(selector);
  return element
}

function nestedTarget(){
  const nestT = document.querySelector('div#nested div.target');
  return nestT
}

function increaseRankBy(n){
  const rankList = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = rankList.length; i < l; i++) {
    rankList[i].innerHTML = parseInt(rankList[i].innerHTML) + n
    }
    return rankList
}

function deepestChild(){
  const deepest = document.querySelector('#grand-node div div div div');
  return deepest
}
