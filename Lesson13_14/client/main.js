import React from 'react';
import { render } from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'

import { firstReducer } from './reducers/reducer.js';

import App from './components/app.jsx';

const store = createStore(firstReducer);

render(
	<Provider store={store}>
		<App props = {store}/>
	</Provider>,
	document.getElementById('root')
	);

store.subscribe(()=>{
	console.log('izmenilsya store',store.getState());
})

store.dispatch({ type: 'ADD_USER', name: 'Ivan'})
store.dispatch({ type: 'ADD_USER', name: 'Leonid'})