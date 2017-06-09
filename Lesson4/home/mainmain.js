var NewCoffeeMachine = new CoffeeMachine();

var container = document.getElementById('coffee-container');
var resultContainer = document.getElementById('result');
var list = document.getElementsByClassName('coffeeItem');
NewCoffeeMachine.coffeeRender(container);

for (var i = 0; i < list.length; i++){
	list[i].addEventListener('click', function(e){
		console.log(e);
		NewCoffeeMachine.setCoffee(e.target.dataset.name);
		NewCoffeeMachine.resultContainer;
	});
}

console.log(list);
