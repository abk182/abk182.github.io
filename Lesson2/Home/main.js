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

var container = document.getElementById('list');
var company_name = document.getElementById('company-name');
var price = document.getElementById('price');
var profitPrice = 0;
var profitButton= document.getElementById('profit');

//Цикл масива вывод данных в html
function render() {
	container.innerHTML = '';
	for(var i = 0; i < companies.length; i++) {
		companies[i]['adress'] = "Mashinostroitelnaya 91";
		container.innerHTML += '<td class=tdName>' + companies[i].name + '</td>'+
		'<td class=tdPrice>' + companies[i].price + '</td>';
	}
}

render();

//Добавляет запись в таблицу
document.getElementById('add').addEventListener('click', function() {
	if(company_name.value == "" || price.value == ""){
		alert('Введите пожалуйста что-нибудь');
	} else {
		console.log(company_name);
		console.log(price);
		companies.push({
			name: company_name.value,
			price: price.value
		});
		render();
	}
});

//Удаление

//Самая маленькая стоймость =
function Sort() {
	profitPrice = Math.min.apply(Math, companies.map(function(item) {
		return item.price;
	}));
	console.log(profitPrice);
}

//Сортирует таблицу по нажатию кнопки
profitButton.addEventListener('click', function() {
	companies.sort(function(a,b) {
	    return a.price - b.price;
	});
companies.reverse();
render();
Sort();
});




//HOASTING
// Hello1();
// function() Hello1 {
// 	document.write('hello!');
// }

// var Hello = function() {
// 	document.write('hello!');
// }
