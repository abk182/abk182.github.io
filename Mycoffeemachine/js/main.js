var coffee = [
	new Coffee("Руссиано",39),
	new Coffee("Латте",40),
	new Coffee("Капучино",35),
	new Coffee("Чай",25),
	new Coffee("Эспрессо",35),
	new Coffee("Макиато",45),
];

var MyCoffeeMachine = new CoffeeMachine(coffee);
MyCoffeeMachine.CoffeeRender();


//определяет выделенный кофе
for (i=0;i<coffee.length;i++){
	document.getElementsByClassName('coffeeItem')[i].addEventListener('click',
		function(mouse) {
		MyCoffeeMachine.CoffeeSelect(coffee[mouse.target.dataset.index]);
		})
}

var money=0;//накапливает сумму для пэй по нажатию
for (i=0;i<=coffee.length;i++){
	document.getElementsByClassName('rubles')[i].addEventListener('click',
		function(mouse){
			money += +mouse.target.value;
			document.getElementById('money-show').innerHTML= money;
	});
}

document.getElementById('btn').addEventListener('click',function(){
	if(MyCoffeeMachine.coffeeSelected != 0){
		if(money >= MyCoffeeMachine.coffeeSelected.price){
			MyCoffeeMachine.Pay(money);
			MyCoffeeMachine.coffeeReady();
			money=0;
		}else{
			alert('Недостаточно золото');
		}}else{alert('Выбирите кофе')}

});
