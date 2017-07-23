import React from 'react';
import { connect } from 'react-redux';

import { getUsers,deleteUser,editUser } from '../requests/request.js' //импорт запросов
import { users } from '../action/actions.js' //импорт экшнов
import { Users } from './users.jsx' //импорт компоненты

const mapStateToProps =	(state) => (state);

const mapDispatchToProps = dispatch => ({
    getUsers: ()=> getUsers().then((UsersList) => { //запрос GET
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
        })
})


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
			<Users appp={this.props}/>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(App);