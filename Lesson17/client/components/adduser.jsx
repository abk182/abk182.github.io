import React from 'react'

export const AddUserStupidComponent = ({props}) =>{
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
			props.NewUser.name = e.target.value;
			break;
		case 'age':
            props.NewUser.age = e.target.value;
			break;
		case 'add': 
			let newUser = props.NewUser;
            props.addUser(newUser);
			break;
		}
	}
}
