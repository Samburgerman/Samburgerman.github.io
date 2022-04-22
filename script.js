var money = 0;

function click()
{
  money++;
  updateDisp();
}

function updateDisp()
{
  window.alert("money="+money);
  var elem = document.getElementById('text');
  elem.innerHTML = "<h1> "+money+" </h1>";
}
