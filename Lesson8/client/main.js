import {User} from './classes/user.js'
import request from 'superagent'
import $ from 'jquery'

// Вывод на странице полученного от сервера списка
function renderList(){
request
	.get('/list')
	.end((err,res)=>{
		document.getElementById('user-list').innerHTML = '';
		res.body.forEach((item,index) =>{
			new User(item.name,item.age).renderUser(item.id);
		});
		deleteBtn(res.body.length);
	});
// $.ajax({
// 	type: 'GET',
// 	url: '/list',
// 	success: function(res){console.log(res);},
// 	error: function(err){console.log(err);}
// })
}

//Отправление запроса на добавление 
$('#add').on('click', function(){
let data = {
	id: new Date(),
	name: $('#name').val(),
	age: $('#age').val()
}
request
	.post('/add_user')
	.send(data)
	.end((err,res)=>{
		if (res.text = 'success') {
			console.log(res);
			renderList();
		}else{
			console.log(err);
		}
	})
})

//Обработчик кнопок "Х" и "Е"
let deleteBtn = (list) => {
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

