import React from 'react';
import { getUsers } from './../requests/request.js'
import { Users } from './users.jsx'
import { AddUserStupidComponent } from './adduser.jsx'

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			userList: [],
			usersFiltered:[],
			newUser: {
				name:'',
				age:''
			}
		};
	}

	componentDidMount(){
		// alert('Монтируется');
		getUsers().then((userList,usersFiltered) => {
			usersFiltered=userList;
			this.setState({userList,usersFiltered});
		});
	}

	searchUser(e){
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

		if(!usersFiltered.length && !name) usersFiltered = userList;
		this.setState({usersFiltered});
	}

	render(){
		// alert('Рендерится');
		// console.log(this.state);
		return (
			<div>
				<input onChange={(e)=>this.searchUser(e)} placeholder="find user"/>
				<Users appp={this}/>
				<AddUserStupidComponent app={this}/> 
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
