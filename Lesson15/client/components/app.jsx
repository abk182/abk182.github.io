import React from 'react';
import { connect } from 'react-redux';

import { getUsers,deleteUser,editUser,addUser } from '../requests/request.js' //импорт запросов
import { users } from '../action/actions.js' //импорт экшнов
import { Users } from './users.jsx' //импорт компоненты
import { AddUserStupidComponent } from './adduser.jsx';


const mapStateToProps =	(state) => (state);

const mapDispatchToProps = dispatch => ({
    getUsers: ()=> getUsers()
		.then((UsersList) => {
        	dispatch(users.getUsers(UsersList));
    }),
	deleteUser: (UserId) => deleteUser(UserId)
        .then(responseBody =>{
			dispatch(users.deleteUser(responseBody));
        })
        .catch(error => {
            console.log(error);
        }),
	editUser: (UserId) => editUser(UserId)
        .then(responseBody =>{
			dispatch(users.editUser(responseBody))
        })
        .catch(error => {
            alert('Empty Field');
        }),
	addUser: (newUser) => addUser(newUser)
        .then(responseBody =>{
        	dispatch(users.addUser(responseBody));
        })
        .catch(error=> {
            alert("Empty field");
        })
});


    class App extends React.Component {
	constructor(props){
		super(props);

	}

    componentDidMount() {
        // alert('Монтируется');
        this.props.getUsers();
    }


	render(){
	    // alert('render');
        console.log('App porps', this.props);
		return(
			<div className="Main">
				<Users props={this.props}/>
            	<AddUserStupidComponent props={this.props}/>
			</div>
    )
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(App);