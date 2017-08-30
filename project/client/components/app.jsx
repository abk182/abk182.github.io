import React from 'react';
import { connect } from 'react-redux';

import Sidebar from './Sidebar.jsx';
import Toolbar from './Toolbar.jsx';

const mapStateToProps = (props, params) => ({
	deckId: 1
})

const App = ({deckId, children}) => {

	console.log(children);
	console.log(deckId);
		return (
			<div className="app">
				<Toolbar deckId={deckId} />
				<Sidebar />
			</div>
		)
	
}

export default connect(mapStateToProps)(App);
