import React from 'react';
import { connect } from 'react-redux';

import { getUsers, deleteUser, addUser, editUser, getVideos, setVideoName } from '../action/actions.js' //импорт экшнов
import { Users } from './users.jsx' //импорт компоненты
import { AddUserStupidComponent } from './adduser.jsx';

const mapStateToProps =	(state) => (state);

const mapDispatchToProps = dispatch => ({
	getUsers: () => dispatch(getUsers.pending()),
	deleteUser: (Id) => dispatch(deleteUser.pending(Id)),
	editUser: (Id) => dispatch(editUser.pending(Id)),
	addUser: (NewUser) => dispatch(addUser.pending(NewUser)),
	getVideos: (name) => dispatch(getVideos.pending(name)),
	setVideoName: (name) => dispatch(setVideoName.set(name))
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
		return(
			<div className="Main">
				<Users props={this.props}/>
            	<AddUserStupidComponent props={this.props}/>
				<input type="text" id="video" onChange={(e) => this.props.setVideoName(e.target.value)}/>
				<input type="submit" onClick={() => this.props.getVideos(this.props.videoName)} />
			</div>
    	)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(App);