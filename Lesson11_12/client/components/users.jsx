import React from 'react';
import { deleteUser,editUser } from '../requests/request.js'
 
export const Users = ({appp}) => {
	return(
	<ul>
		{appp.state.usersFiltered.map(item => {
			return(
				<li key={item.id}>
				{item.name}, возраст {item.age} 
				<input type="submit" value="X" 
				onClick={
					(e) => {
						deleteUser(item.id) //удаление юзера(вынеси в отдельную функцию)
							.then(responseBody =>{
							let usersFiltered = responseBody;
							appp.setState({usersFiltered});
							// console.log(appp.state);
							})
							.catch(error => {
								console.log(error);
							})
					}
				}
				/>
				<input type="submit" value="..." 
				onClick={
					(e) => {
						editUser(item.id) //изменение юзера(вынеси в отдельную функцию)
							.then(responseBody =>{
							let usersFiltered = responseBody;
							appp.state.userList = responseBody;//не обязательный элемент для обновления userList
							appp.setState({usersFiltered});
							})
							.catch(error => {
								alert('Empty Field');
								console.log(error);
							})
					}
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