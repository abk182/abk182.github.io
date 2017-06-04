//Массив Объектов
var companies = [
	{
		name: "It-Park",
		price: 52353,
	},
	{
		name: "Mak-web",
		price: 235,
	},
	{
		name: "tomat.agency",
		price: 102352,
	}
];
var company = {
	name: "It-Park",
	price: 10000,
	Hello: function() {
		document.write('hello!');
	}
};
var container = document.getElementById('list');
var name1 = document.getElementById('company-name');
var price = document.getElementById('price');
var profitPrice = 0;
var profitButton= document.getElementById('profit');

//Цикл масива вывод данных в html
function render() {
	container.innerHTML = '';
	for(var i = 0; i < companies.length; i++) {
		companies[i]['adress'] = "Mashinostroitelnaya 91";
		container.innerHTML += '<li>' + companies[i].name + '</li>';
	}
}

document.getElementById('add').addEventListener('click', function() {
	console.log(name1);
	console.log(price);
	companies.push({
		name: name1.value,
		price: price.value
	});
	render();
});

function Sort() {
	profitPrice = Math.min.apply(Math, companies.map(function(item) {
		return item.price;
	}));
	console.log(profitPrice);
}

profitButton.addEventListener('click', function() {
	Sort();
})
render();

//HOASTING
// Hello1();
// function() Hello1 {
// 	document.write('hello!');
// }

// var Hello = function() {
// 	document.write('hello!');
// }
