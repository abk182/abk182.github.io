var value = 0;

//Область видимости локально глобально скрыто
function Func() {
	var value = 1;
	console.log(value);
}
Func();

//callback
function GetNumber (number, callback) {
	setTimeout(function(){
		return callback(number + 20);
	}, 1000);
}

var newNumber = 100;
var callback = function(n){ newNumber = n;console.log(newNumber);}
GetNumber(10, callback);

console.log(newNumber);

//HOASTING!!!

// var names = ['Lala','asd','sdf'];
// var x = 0;
// while (x != names.length) {
// 	console.log(names[x]);
// 	x++;
// }
// do{
//  	console.log(names[x]);
// 	x++;
// }while(x < names.length);

//переназничение функции в самой функции
function display () {
	console.log('Privet');
	display = function () {
		console.log('Zdorov');
	}
}

//display();
//display();

function Car(name_, mileage_) {
	this.name = name_;
	this.mileage = mileage_;

	this.drive = function(){
		document.write('poehala');
	}
}

var lada = new Car('granta',10000);
var lexus = new Car('rx400',2000);

console.log(lada.name);
