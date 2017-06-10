var coffee = [
	{
		name: "Руссиано",
		price: 39,
		sugar: ''
	},
	{
		name: "Латте",
		price: 39,
		sugar: ''
	},
	{
		name: "Капучино",
		price: 39,
		sugar: ''
	},
	{
		name: "Чай",
		price: 39,
		sugar: ''
	},
	{
		name: "Эспрессо",
		price: 39,
		sugar: ''
	},
	{
		name: "Макиато",
		price: 39,
		sugar: ''
	},
]

function CoffeeMachine(){
	this.coffeeList= coffee;
	console.log(this.coffeeList);
	this.money = 0;	//кэш
	this.deliver = 0; //сдача

	this.selectedCoffee = '';
	this.fill = false;

	this.coffeeRender = function (container){
		var coffee = this.coffeeList;
		console.log('check');
		container.innerHTML='';
		coffee.forEach(function(item){
			container.innerHTML += (
					`<li>
						<p>${item.name}</p>
						<input
							type="submit"
							data-name=${item.name}
							value="Налить"
							class="coffeeItem">
					</li>` //` = ''
					)
		});
	}

	this.setCoffee = function(coffee){
		this.selectedCoffee = coffee;
		console.log(this.selectedCoffee);
	}

	this.fillCoffee = function(){
		container.innerHTML= 'Налито '+ this.selectedCoffee;
	}

}
