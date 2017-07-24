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
			app.NewUser.name = e.target.value;
			break;
		case 'age':
            app.NewUser.age = e.target.value;
			break;
		case 'add': 
			let newUser = app.NewUser;
			app.addUser(newUser);
			break;
		}
	}
}
