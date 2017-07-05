import {User,Admin} from './classes/user.js'
import request from 'superagent'
import {addUser} from './requests/request.js'

// Вывод на странице полученного от сервера списка
function renderList(){
request
	.get('/list')
	.end((err,res)=>{
		document.getElementById('user-list').innerHTML = '';
		res.body.forEach((item,index) =>{
			new User(item).renderUser(item.id);
		});
		btns(res.body.length);
	});
}

//Отправление запроса на добавление 
document.getElementById('add').addEventListener('click', function(){
let data = {
	name: document.getElementById('name').value,
	age: document.getElementById('age').value
}
addUser(data)
	.then(success =>{
		console.log(success);
		renderList();
	})
	.catch(error =>{
		alert("Empty field");
		console.log(error);
	})
})

//Обработчик кнопок "Х" и "Е"
let btns = (list) => {
	for(let i=0; i<list;i++){
		document.getElementsByClassName('delete')[i].addEventListener('click',function(e){
			deleteUser(e.target.dataset.id);
		})
		document.getElementsByClassName('edit')[i].addEventListener('click',function(e){
			editUser(e.target.dataset.id);
		})
	}
}

// Запрос на удаление из списка
let deleteUser = (id) =>{
	request
		.delete('/delete/'+id)
		.end((err,res)=>{
			if(res.text=='success'){renderList();}else{console.log(err)};
		})
}

//Запрос на изменение
let editUser = (id) =>{
	let name = prompt("Имя","");
	let age = prompt("Возраст",'');
	if(name!= null && age!= null){
		request
			.put('/put/'+id)
			.send({id: id, name: name, age: age})
			.end((err,res)=>{
				if(res.text=='success'){renderList();}else{console.log(err)};
		})
	}
}

renderList();

