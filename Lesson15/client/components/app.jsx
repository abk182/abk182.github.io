import React from 'react';
import { connect } from 'react-redux';

import { getUsers } from '../requests/request.js'
import { users } from '../action/actions.js'

const mapStateToProps =	state => (state);

const mapDispatchToProps = dispatch => {
    const NewUser={id:23,name:'Kek',age:24};
    getUsers().then((UsersList) => {
        dispatch(users.getUsers(UsersList));
        dispatch(users.addUser(NewUser));
    });
    return{}
};

// const mapDispatchToProps = dispatch => ({
//     getUsers: () => dispatch(users.getUsers())
// })


class App extends React.Component {
	constructor(props){
		super(props);

	}

	render(){
        console.log(this.props);
		return(
			<ul>
			{
				this.props.UsersList.map((item,index) =>{
					return(<li key={item.id}>{item.name}</li>)
				})
			}
			</ul>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(App);