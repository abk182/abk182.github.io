var coffee = [
	new Coffee("Руссиано",39),
	new Coffee("Латте",40),
	new Coffee("Капучино",35),
	new Coffee("Чай",25),
	new Coffee("Эспрессо",35),
	new Coffee("Макиато",45),
	new Coffee("МакиатоСупер",50),
];

var MyCoffeeMachine = new CoffeeMachine(coffee);
MyCoffeeMachine.coffeeRender();


//определяет выделенный кофе
for (i=0;i<coffee.length;i++){
	document.getElementsByClassName('coffeeItem')[i].addEventListener('click',
		function(mouse) {
		MyCoffeeMachine.coffeeSelect(coffee[mouse.target.dataset.index]);
		})
}

// пробег по купюрам 6 шт
for (i=0;i<=6;i++){
	document.getElementsByClassName('rubles')[i].addEventListener('click',
	function(mouse){
		MyCoffeeMachine.moneyCollect(+mouse.target.value);
	});
}

document.getElementById('btn').addEventListener('click',function(){
if(MyCoffeeMachine.coffeeSelected != 0){
	if(MyCoffeeMachine.cashPaid >= MyCoffeeMachine.coffeeSelected.price){
		MyCoffeeMachine.pay();
	}else{
		alert('Недостаточно золота');
	}
}else{alert('Выбирите кофе')}
});

document.getElementById('btnback').addEventListener('click', function(){
	MyCoffeeMachine.cashGiveBackFunction();
});
