import React from 'react';

export const User = ({name,age}) => {
	return(
	<li>
	{name}, возраст {age} 
	<input type="submit" value="X" />
	<input type="submit" value="..." />
	</li>
	)
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