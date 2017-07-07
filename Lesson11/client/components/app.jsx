import React from 'react';
import { getUsers,addUser } from './../requests/request.js'
import { User } from './user.jsx'

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			userList: [],
			usersFiltered:[],
			userName: ''
		};
	}

	componentDidMount(){
		alert('Монтируется');
		getUsers().then(userList => {
			this.setState({userList});
		});
	}

	setUserName(e){
		let name = e.target.value;
		console.log(name);
		let userList = this.state.userList;
		console.log(userList);
		let usersFiltered = [];

		usersFiltered = userList.filter(item => {
			if(!name) return false;

			let lowName = item.name.toLowerCase();
			let lowValue = name.toLowerCase();

			return lowName.indexOf(lowValue) != -1;
		})

		if(!usersFiltered.length) usersFiltered = userList;

		console.log(usersFiltered);
		this.setState({usersFiltered});
	}

	render(){
		alert('Рендерится');
		const {userList} = this.state;
		console.log(this.state);
		return (
			<div>
				<input onChange={(e) => this.setUserName(e)} placeholder="find user"/>
				<ul>
					{userList.map(item => {
						return <User name={item.name} age={item.age} key={item.id} />
					})}
				</ul>
			</div>
			);
	}
	
}



// export const Temp=()=> {
// 	getUsers()
// 		.then(success=> {console.log(success)})
// 		.catch(error => {console.log(error)});

// 	addUser({name:"",age:""})
// 		.then(success=> {console.log(success)})
// 		.catch(error => {console.log(error)});
// }
