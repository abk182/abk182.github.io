import React from 'react';
 
export const Users = ({props}) => {
	return(
	<ul>
		{props.UsersList.map(item => {
			return(
				<li key={item.id}>
				{item.name}, возраст {item.age} 
				<input type="submit" value="X" onClick={(e) => props.deleteUser(item.id)}/>
				<input type="submit" value="..." onClick={(e) => props.editUser(item.id)}/>
				</li>
				)
			})
		}
	</ul>)
};
