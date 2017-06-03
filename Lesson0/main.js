var x= document.getElementById('numberX');
var y= document.getElementById('numberY');

document.getElementById('plus').addEventListener('click', function() {
  console.log(+x.value + +y.value);
  document.getElementById('answer').innerText = +x.value + +y.value;
  //document.getElementById('answer').append(+x.value + +y.value);
  //document.write(+x.value + +y.value);
});

document.getElementById('minus').addEventListener('click', function() {
  document.getElementById('answer').innerText = +x.value - +y.value;
});

document.getElementById('division').addEventListener('click', function() {
  document.getElementById('answer').innerText = +x.value / +y.value;
});

document.getElementById('multi').addEventListener('click', function() {
  document.getElementById('answer').innerText = +x.value * +y.value;
});
