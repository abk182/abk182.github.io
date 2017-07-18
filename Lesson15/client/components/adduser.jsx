	import React from 'react'
import { addUser } from './../requests/request.js'

export const AddUserStupidComponent = ({app}) =>{
	return (
	<div>
		<input type="text" id="name" onChange={(e)=>setUserData(e)} placeholder="Имя" />
		<input type="number" id="age" onChange={(e)=>setUserData(e)} placeholder="Возраст" />
		<input type="submit" id="add" onClick={(e)=>setUserData(e)} value="ОК" />
	</div>
	)

function setUserData(e){
	switch(e.target.id){
		case 'name':
			app.state.newUser.name = e.target.value;
			break;
		case 'age':
			app.state.newUser.age = e.target.value;
			break;
		case 'add': 
			let newUser = app.state.newUser;
			let usersFiltered = app.state.usersFiltered;
			addUser(newUser)
				.then(feedBack =>{
					usersFiltered.push(feedBack);
					app.setState({usersFiltered});
					// console.log(app.state);
				})
				.catch(error=> {
					alert("Empty field");
				})
			break;
		}
	}
}
