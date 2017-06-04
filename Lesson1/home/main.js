var result=0; //накапливает результат вычислений
var operator="";

function solve (resultLocal,variableLocal,operatorLocal){
    if (operatorLocal=="+") {resultLocal = resultLocal + variableLocal};
    if (operatorLocal=="-") {resultLocal = resultLocal - variableLocal};
    if (operatorLocal=="/") {resultLocal = resultLocal / variableLocal};
    if (operatorLocal=="*") {resultLocal = resultLocal * variableLocal};
    return resultLocal;
}


//вывод
function render (){
  document.getElementById('answer').innerText=result;
  document.getElementById('numberX').addEventListener('focus', function() {
    document.getElementById('numberX').value = "";
  })
}


document.getElementById('plus').addEventListener('click', function(){
  var variable = +document.getElementById('numberX').value;
  result=solve(result,variable,"+");
  render();
})

document.getElementById('minus').addEventListener('click', function(){
  var variable = +document.getElementById('numberX').value;
  result=solve(result,variable,"-");
  render();
})

document.getElementById('division').addEventListener('click', function(){
  var variable = +document.getElementById('numberX').value;
  result=solve(result,variable,"/");
  render();
})

document.getElementById('multi').addEventListener('click', function(){
  var variable = +document.getElementById('numberX').value;
  result=solve(result,variable,"*");
  render();
})

/*
document.getElementById('plus').addEventListener('click', function() {
  var x = +document.getElementById('numberX').value;
  result=solve(result,x,"+");
  document.getElementById('answer').innerText=result;
})
*/
