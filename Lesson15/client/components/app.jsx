import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps =	state => ({UsersList: state.UsersList})

const mapDispatchToProps = dispatch => ({})


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