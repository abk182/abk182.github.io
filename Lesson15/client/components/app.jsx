import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		console.log(this.props.State.UsersList);
		return(
			<ul>
			{
				this.props.State.UsersList.map((item,index) =>{
					return(<li key={index}>{item}</li>)
				})
			}
			</ul>
			)
	}
}

export default connect(
	state => ({State: state}),
	dispatch => ({})
	)(App);