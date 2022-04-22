var money = 0;

function click()
{
  money++;
  updateDisp();
}

function updateDisp()
{
  var elem = document.getElementById('text');
  elem.innerHTML = "<h1>Samuel is cooler than you</h1>";
}
