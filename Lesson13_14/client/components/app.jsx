import React from 'react';
import { connect } from 'react-redux';

import { getUsers } from './../requests/request.js'
import { Users } from './users.jsx'
import { AddUserStupidComponent } from './adduser.jsx'

const mapStateToProps = ({App}) => ({
	usersList: [],
	usersFiltered:[],
	newUser: {
	name:'',
	age:''
	}
})

// const mapDispatchToProps = dispatch => ({
// 	changeUserData: (e) => dispatch(app.changeUserData(e.target))
// })



export class App extends React.Component{
	constructor(props){
		super(props);
		console.log(props)
	}

	componentDidMount(){
		// // alert('Монтируется');
		// getUsers().then((userList,usersFiltered) => {
		// 	usersFiltered=userList;
		// 	this.setState({userList,usersFiltered});
		// });

	}

	// searchUser(e){
	// 	let name = e.target.value;
	// 	console.log(name);
	// 	let userList = this.state.userList;
	// 	console.log(userList);
	// 	let usersFiltered = [];

	// 	usersFiltered = userList.filter(item => {
	// 		if(!name) return false;

	// 		let lowName = item.name.toLowerCase();
	// 		let lowValue = name.toLowerCase();

	// 		return lowName.indexOf(lowValue) != -1;
	// 	})

	// 	if(!usersFiltered.length && !name) usersFiltered = userList;
	// 	this.setState({usersFiltered});
	// }

	render(){
		// alert('Рендерится');
		// console.log(this.state);
		return (
			<div>
				<input onChange={(e)=>console.log(e)} placeholder="find user"/>
				
			</div>
			);
	}
	
}

export default connect(mapStateToProps)(App);

// export const Temp=()=> {
// 	getUsers()
// 		.then(success=> {console.log(success)})
// 		.catch(error => {console.log(error)});

// 	addUser({name:"",age:""})
// 		.then(success=> {console.log(success)})
// 		.catch(error => {console.log(error)});
// }

// <Users appp={this}/>
// <AddUserStupidComponent app={this}/> 