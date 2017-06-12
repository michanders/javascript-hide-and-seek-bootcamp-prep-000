function getFirstSelector(selector){
  var select = document.querySelector(selector);
  return select;
}

function nestedTarget(){
  var test = document.querySelector('div.target');
  return test;
}


function increaseRankBy(n){
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i = 0; i<list.length; i++){
    var x = parseInt(list[i].innerHTML);
    var y = parseInt(n);
    list[i].innerHTML = x+y;
  }
}

function deepestChild(){
  var nestChild = document.querySelector('#grand-node div div div div');
  return nestChild;
}
