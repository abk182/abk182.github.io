// ООП
function User(_name,_age){
	this.age= _age;
	this.name= _name;

	this.go = function(){
		console.log(this.name + 'goes');
	}
}

//расширение конструктора
User.prototype.country = 'Russia'

var user = new User('Vlad',38);
user.country = 'Usa';

var user1 = new User('Timur', 12);

//console.log(user1);

//Инкапсуляция

function Employee(_name,_age,_comp){
	User.call(this, _name,_age);
	this.name = _name;
	this.age = _age;
	this.comp = _comp;

	var salary = 10000; // скрытая локальная переменная

	this.getSalary = function(price) {
		console.log('Zarplata'+salary);
	}
}

// Employee.prototype.highSalary = function (){
// 	salary + price
// 	this.salary = price;
// 	console.log(salary);
// }
//console.log(emploee.salary);

Employee.prototype = Object.create(User.prototype);
var employee = new Employee('Victor',50,'KAMAZ');

//employee.getSalary();

//call and apply
Function.prototype.hello = function(){
	console.log('hello');
}

function display(data) {
	console.log(data);
	this.name = 'вфывфыв';
	console.log(this);
	this.go();
}


// console.log(Function.prototype);
// console.log(display);
//console.log(this.document);
//display.hello();

var arr = ['someText']
display.apply(user,arr);

display.call(employee,'Text');
