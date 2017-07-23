import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app.jsx';
import { Reducer_1 } from './reducers/reducer.js'


const store = createStore(Reducer_1);
console.log('Store init state', store.getState());



ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>,
	document.getElementById('root'));

store.subscribe(()=>{
    console.log('store ', store.getState());
});