import React from 'react';

import { deleteUser,editUser } from '../requests/request.js'
import { users } from '../action/actions.js' //импорт экшнов
 
export const Users = ({appp}) => {
	console.log('Users props',appp);
	return(
	<ul>
		{appp.UsersList.map(item => {
			return(
				<li key={item.id}>
				{item.name}, возраст {item.age} 
				<input type="submit" value="X" 
				onClick={
					(e) => {appp.deleteUser(item.id)}
				}
				/>
				<input type="submit" value="..." 
				onClick={
					(e) => {appp.editUser(item.id)}
				}
				/>	
				</li>
				)
			})
		}
	</ul>)
}



// export class User extends React.Component{
// 	constructor(props){
		// super(props);
// 		this.id = id;
// 		this.name = name;
// 		this.age = age;
// 	}

// 	render(){
// 		return <li key={this.id}>{this.name}{this.age}</li>
// 	}
// }